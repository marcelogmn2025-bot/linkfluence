'use client';

import { useState } from 'react';

type CommentSuggestion = {
    type: string;
    text: string;
};

export default function EngagementAI() {
    const [sourcePost, setSourcePost] = useState('');
    const [tone, setTone] = useState('Profissional, porém descontraído (Networking)');
    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState<CommentSuggestion[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleGenerateComments = async () => {
        if (!sourcePost) return;
        setIsLoading(true);
        setComments([]);
        setCopiedIndex(null);

        try {
            const res = await fetch('/api/generate-comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sourcePost, tone })
            });

            const data = await res.json();

            if (data.error) {
                alert(data.error);
            } else {
                setComments(data.comments || []);
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao conectar com a API de Comentários.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <main className="main-content" style={{ padding: 0, background: 'var(--background)', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Utilitarian Top Header */}
            <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)' }}>
                <div>
                    <h1 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--foreground)' }}>Engajamento Estratégico AI</h1>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Destrave relacionamentos com líderes e autoridades deixando os comentários perfeitos.</p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '0.85rem' }}>
                        U
                    </div>
                </div>
            </header>

            {/* Scrollable Work Area */}
            <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

                        {/* Generator Form (Left Column) */}
                        <section className="glass-panel" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--foreground)' }}>O que o prospect postou?</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Copie o post da pessoa que você quer chamar a atenção no LinkedIn e cole aqui.</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <textarea
                                        value={sourcePost}
                                        onChange={(e) => setSourcePost(e.target.value)}
                                        className="input-field"
                                        style={{ minHeight: '180px', fontSize: '0.875rem', padding: '0.6rem 0.8rem' }}
                                        placeholder="Cole o texto ou assunto que o lead palestrou para que a IA crie argumentos à altura..."
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Meu Perfil de Abordagem (Social Selling)</label>
                                    <select
                                        value={tone}
                                        onChange={(e) => setTone(e.target.value)}
                                        className="input-field"
                                        style={{ appearance: 'none', background: 'var(--card-bg)', fontSize: '0.875rem', padding: '0.6rem 0.8rem', cursor: 'pointer' }}
                                    >
                                        <option>Profissional, porém descontraído (Networking)</option>
                                        <option>Autoridade C-Level (Incisivo e com dados)</option>
                                        <option>Empático (Focado em Gestão de Pessoas)</option>
                                        <option>Provocador (Questionador Construtivo)</option>
                                    </select>
                                </div>

                                <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0.5rem 0' }} />

                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                                    <button
                                        onClick={() => { setSourcePost(''); setComments([]); }}
                                        className="secondary-btn"
                                        style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                                    >
                                        Limpar
                                    </button>
                                    <button
                                        onClick={handleGenerateComments}
                                        disabled={isLoading || !sourcePost}
                                        className="primary-btn"
                                        style={{ opacity: (isLoading || !sourcePost) ? 0.7 : 1, width: '100%', fontSize: '0.9rem', padding: '0.6rem 1rem' }}
                                    >
                                        {isLoading ? 'Analisando Post...' : 'Gerar Argumentos (3 Tipos)'}
                                        {!isLoading && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>}
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Preview Form (Right Column) */}
                        <section className="glass-panel" style={{ padding: 0, height: '100%', minHeight: '500px', display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
                            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', background: 'var(--card-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>Opções de Engajamento</h3>
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, backgroundColor: 'var(--card-bg)' }}>
                                {comments.length === 0 && !isLoading && (
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center' }}>
                                        <p>Cole o post ao lado para receber 3 armas secretas de <br /> engajamento que destravam oportunidades.</p>
                                    </div>
                                )}

                                {isLoading && (
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                                        <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                                            <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                        </svg>
                                        A I.A. está calculando...
                                    </div>
                                )}

                                {comments.length > 0 && !isLoading && (
                                    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '500px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Escolha sua estratégia de ataque para esse post:</p>

                                            {comments.map((comment, index) => (
                                                <div key={index} style={{ background: 'var(--background)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                        {index === 0 && '🧠'} {index === 1 && '🔍'} {index === 2 && '🤝'}
                                                        {comment.type}
                                                    </h4>

                                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--foreground)', margin: 0 }}>
                                                        {comment.text}
                                                    </p>

                                                    <button
                                                        className="secondary-btn"
                                                        style={{ padding: '0.4rem', fontSize: '0.8rem', alignSelf: 'flex-end', display: 'flex', gap: '0.3rem', alignItems: 'center' }}
                                                        onClick={() => handleCopy(comment.text, index)}
                                                    >
                                                        {copiedIndex === index ? '✔ Copiado!' : 'Copiar Comentário'}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                )}
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}
