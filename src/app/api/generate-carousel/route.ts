import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, Schema, Type } from '@google/generative-ai';
import { createClient } from '@/utils/supabase/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    try {
        const { sourceText, slideCount, tone } = await req.json();

        if (!sourceText) {
            return NextResponse.json(
                { error: 'O material fonte é obrigatório.' },
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

            finalTone = `[INSTRUÇÕES ESTRITAS DE PERFIL DE ESCRITA COMPORTAMENTAL]
Abaixo está o DNA da voz, a essência e o ritmo EXATO de como esse usuário escreve:
${dnaData.dna_profile}`;
        }

        // Prepare the specialized prompt for Carousel generation
        const prompt = `
Você é um Ghostwriter e Especialista em Design de Conteúdo no LinkedIn.
Seu objetivo é transformar o texto fonte fornecido em um roteiro matador para um Carrossel no LinkedIn.
O usuário solicitou aproximadamente ${slideCount} slides e usou o tom: ${finalTone || 'Didático e Inovador'}.

MATERIAL FONTE DO USUÁRIO:
"""
${sourceText}
"""

REGRAS DO CARROSSEL:
1. Comece com um slide de CAPA impactante (apenas um título forte e um subtítulo curto de promessa).
2. O MIOLO (slides internos) deve fatiar o conteúdo principal em passos, dicas ou pontos vitais. Use textos extremamente curtos por slide (ideal 10-30 palavras por slide). Ninguém lê slides com paredes de texto.
3. O ÚLTIMO SLIDE deve ser uma CTA (Chamada de Ação) muito objetiva, pedindo algo específico (salvar o post, comentar uma palavra, seguir o perfil, etc).
4. Evite usar palavras corporativas vazias. Siga a voz descrita em TOM e adapte o texto de acordo.

Gere exatamente a quantidade solicitada (ou bem próxima). Retorne os slides no formato JSON.
        `;

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        slides: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                            }
                        }
                    },
                    required: ["slides"]
                }
            }
        });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        let parsedResult;
        try {
            parsedResult = JSON.parse(responseText);
        } catch (e) {
            console.error("Failed to parse JSON response:", responseText);
            return NextResponse.json({ error: 'Erro ao formatar a resposta da IA.' }, { status: 500 });
        }

        return NextResponse.json({ slides: parsedResult.slides });

    } catch (error) {
        console.error('Error generating AI carousel:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return NextResponse.json(
            { error: \`Erro na IA: \${errorMessage}\` },
            { status: 500 }
        );
    }
}
