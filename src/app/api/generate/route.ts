import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@/utils/supabase/server';

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    try {
        const { topic, tone, thoughts } = await req.json();

        if (!topic && !thoughts) {
            return NextResponse.json(
                { error: 'Assunto ou ideias soltas são obrigatórios.' },
                { status: 400 }
            );
        }

        // Connect to Supabase to fetch User and their DNA if "Meu Perfil DNA (Padrão)" is selected
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        let finalTone = tone;

        if (tone === 'Meu Perfil DNA (Padrão)' || tone === 'Meu Perfil DNA (Padrão) ') {
            if (!user) {
                return NextResponse.json({ error: 'Você precisa estar logado para usar seu DNA.' }, { status: 401 });
            }

            // Fetch DNA from database
            const { data: dnaData, error: dnaError } = await supabase
                .from('content_dna')
                .select('dna_profile')
                .eq('user_id', user.id)
                .single();

            if (dnaError || !dnaData?.dna_profile) {
                return NextResponse.json({ error: 'Nenhum Perfil DNA cadastrado. Por favor, adicione o seu Perfil primeiro preenchendo o formulário de DNA no Dashboard!' }, { status: 400 });
            }

            // Re-assign Tone strictly as the DNA instructions
            finalTone = `[INSTRUÇÕES ESTRITAS DE PERFIL DE ESCRITA COMPORTAMENTAL]
Abaixo está o DNA da voz, a essência e o padrão comportamental EXATO de como esse usuário escreve em seus posts do LinkedIn de maior sucesso. 
Aja como ele e utilize essas características e ritmos em vez de seu padrão básico de I.A.:

${dnaData.dna_profile}`;
        }

        // Prepare the specialized prompt for LinkedIn content creation
        const prompt = `
Você é um Ghostwriter especialista na rede social LinkedIn, focado em alta conversão, engajamento autêntico e employee advocacy. 
O seu objetivo é criar um post brilhante baseado nas diretrizes do usuário.

Aqui estão as informações fornecidas pelo usuário:
1. Assunto base / Link (Opcional): ${topic || 'Nenhum assunto inicial definido'}
2. Tom de voz escolhido pelo usuário: ${finalTone || 'Direto e profissional'}
3. Ideias soltas (Rascunho) do usuário: ${thoughts || 'Nenhuma ideia solta'}

--- **DIRETRIZES DE FORMATAÇÃO E COPY DO LINKEDIN** ---
- O post deve começar com um "Hook" (gancho) de no máximo 2 linhas, impactante, que faça o leitor parar de rolar a tela.
- Use parágrafos muito curtos (1 ou 2 linhas no máximo). Evite blocos grandes de texto, pois 90% das leituras do LinkedIn são no celular.
- Estruture a leitura com quebras de linha frequentes (pular linhas).
- Se apropriado com o TOM DE VOZ, use emojis, mas sem exageros.
- No meio do texto, inclua listas pontuadas ou numéricas curtas se houver dados ou passos a compartilhar.
- Termine o texto com um "Call to Action" final na forma de uma pergunta que incentive comentários e discussões reflexivas no final.
- **NÃO** use as hashtags exageradas. Use de 2 a 3 hashtags muito focadas no final, pulando duas linhas após a pergunta final.
- O material deve soar HUMANO, como se a pessoa tivesse escrito de uma vez, sem parecer uma enciclopédia gerada por IA.

Baseado estritamente no TOM DE VOZ (${finalTone}), escreva o material final abaixo (apenas o texto de saída, sem explicações extras de IA):`;

        // Process using Gemini 2.5 Flash
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        return NextResponse.json({ content: responseText });

    } catch (error: any) {
        console.error('Error generating AI post:', error);
        return NextResponse.json(
            { error: `Erro na IA: ${error?.message || String(error)}` },
            { status: 500 }
        );
    }
}
