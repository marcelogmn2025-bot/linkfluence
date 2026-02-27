import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    try {
        const { sourcePost, tone } = await req.json();

        if (!sourcePost) {
            return NextResponse.json(
                { error: 'O texto do post original é obrigatório.' },
                { status: 400 }
            );
        }

        const prompt = `
Você é um Especialista em Networking e Engajamento no LinkedIn.
Seu cliente precisa de ajuda para deixar comentários inteligentes em posts de outras pessoas para ganhar visibilidade e construir autoridade (Social Selling).

POST ORIGINAL (Para o qual você criará os comentários):
"""
${sourcePost}
"""

OBJETIVO:
Gere exatas 3 sugestões diferentes de comentários de alto valor em português (Brasil) que o usuário possa usar neste post. 
- Sugestão 1: Perfil "Autoridade Que Agrega" (Concorda com o post e adiciona um dado, reflexão profunda ou ponto de vista extra validando o autor).
- Sugestão 2: Perfil "Curioso e Investigativo" (Elogia a abordagem, mas faz 1 pergunta inteligente e instigante para forçar o autor a responder e gerar debate).
- Sugestão 3: Perfil "Apoiador Breve" (Um comentário mais curto, empático, parabenizando a visão de forma menos densa, excelente para manter relacionamento).

Tom do usuário para guiar pequenos traços de personalidade: ${tone || 'Profissional'}

Retorne os dados no formato JSON.
        `;

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: SchemaType.OBJECT,
                    properties: {
                        comments: {
                            type: SchemaType.ARRAY,
                            items: {
                                type: SchemaType.OBJECT,
                                properties: {
                                    type: { type: SchemaType.STRING, description: "Nome do estilo de comentário (ex: Autoridade Que Agrega)" },
                                    text: { type: SchemaType.STRING, description: "O texto exato do comentário gerado" }
                                }
                            }
                        }
                    }
                }
            }
        });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        let parsedResult;
        try {
            parsedResult = JSON.parse(responseText);
        } catch (e) {
            return NextResponse.json({ error: 'Erro ao formatar os comentários da IA.' }, { status: 500 });
        }

        return NextResponse.json({ comments: parsedResult.comments });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return NextResponse.json(
            { error: `Erro na IA: ${errorMessage}` },
            { status: 500 }
        );
    }
}
