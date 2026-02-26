import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@/utils/supabase/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json({ error: 'Você precisa estar logado.' }, { status: 401 });
        }

        const { sampleText } = await req.json();

        if (!sampleText) {
            return NextResponse.json({ error: 'Nenhum texto fornecido.' }, { status: 400 });
        }

        const prompt = `
Você é um Especialista em Copywriting de Redes Sociais e Psicologia Comportamental. Sua tarefa é extrair e mapear o "DNA de Conteúdo" e o "Tom de Voz" do autor do seguinte texto:

TEXTO DE EXEMPLO DO AUTOR:
"${sampleText}"

Forneça um resumo detalhado e exato do PERFIL DE COMUNICAÇÃO deste autor. 
Descreva as características principais: nível de formalidade (formal, casual, corporativo), vocabulário (simples ou complexo, gírias), uso de emojis ou humor, formatação (textão ou parágrafos curtos, listas), ritmo da leitura, como ele inicia (ganchos usuais) e como ele conclui as ideias.

A sua resposta deve ser um manual de instruções direto que eu possa usar mais tarde para instruir outra Inteligência Artificial a escrever EXATAMENTE como essa pessoa no LinkedIn.
IMPORTANTE: Nunca comece com uma frase genérica como "Aqui está a análise". Vá direto as regras e características puras de forma descritiva.
`;

        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(prompt);
        const dnaProfile = result.response.text();

        // Clean up profile slightly if it contains introductory text by accident
        const cleanedProfile = dnaProfile.trim();

        // Save DNA Profile to Supabase. Using upsert based on user_id as primary key.
        const { error: dbError } = await supabase
            .from('content_dna')
            .upsert({ user_id: user.id, dna_profile: cleanedProfile });

        if (dbError) {
            console.error('Supabase DB Error mapping DNA:', dbError);
            return NextResponse.json({ error: 'Erro ao salvar o DNA no banco de dados. Verifique a tabela.' }, { status: 500 });
        }

        return NextResponse.json({ message: 'DNA Mapeado', dna: cleanedProfile });

    } catch (error: any) {
        console.error('Error analyzing DNA post:', error);
        return NextResponse.json(
            { error: `Erro na engenharia reversa do seu DNA: ${error?.message || String(error)}` },
            { status: 500 }
        );
    }
}
