'use client';

import { useState } from 'react';

export default function CarouselMaker() {
    const [sourceText, setSourceText] = useState('');
    const [slideCount, setSlideCount] = useState('6');
    const [tone, setTone] = useState('Meu Perfil DNA (Padrão)');
    const [isLoading, setIsLoading] = useState(false);
    const [generatedSlides, setGeneratedSlides] = useState<string[]>([]);
    const [isCopied, setIsCopied] = useState(false);

    const handleGenerateCarousel = async () => {
        if (!sourceText) return;
        setIsLoading(true);
        setGeneratedSlides([]);

        try {
            const res = await fetch('/api/generate-carousel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sourceText, slideCount, tone })
            });

            const data = await res.json();

            if (data.error) {
                alert(data.error);
            } else {
                setGeneratedSlides(data.slides || []);
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao conectar com a IA.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="main-content" style={{ padding: 0, background: 'var(--background)', display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Utilitarian Top Header */}
            <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card-bg)' }}>
                <div>
                    <h1 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--foreground)' }}>Carrossel Maker</h1>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Transforme textos longos ou ideias em roteiros precisos para carrosséis.</p>
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
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--foreground)' }}>Texto Base / Ideia</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Material Fonte</label>
                                    <textarea
                                        value={sourceText}
                                        onChange={(e) => setSourceText(e.target.value)}
                                        className="input-field"
                                        style={{ minHeight: '180px', fontSize: '0.875rem', padding: '0.6rem 0.8rem' }}
                                        placeholder="Cole um artigo, um script de vídeo, ou explique sua ideia profundamente para que a IA divida em slides atrativos..."
                                    />
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Quantidade de Slides</label>
                                        <select
                                            value={slideCount}
                                            onChange={(e) => setSlideCount(e.target.value)}
                                            className="input-field"
                                            style={{ appearance: 'none', background: 'var(--card-bg)', fontSize: '0.875rem', padding: '0.6rem 0.8rem', cursor: 'pointer' }}
                                        >
                                            <option value="5">Curto (5 Slides)</option>
                                            <option value="7">Médio (7 Slides)</option>
                                            <option value="10">Longo (10 Slides)</option>
                                        </select>
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>Tom de Voz</label>
                                        <select
                                            value={tone}
                                            onChange={(e) => setTone(e.target.value)}
                                            className="input-field"
                                            style={{ appearance: 'none', background: 'var(--card-bg)', fontSize: '0.875rem', padding: '0.6rem 0.8rem', cursor: 'pointer' }}
                                        >
                                            <option>Meu Perfil DNA (Padrão)</option>
                                            <option>Didático e Passo-a-passo</option>
                                            <option>Storytelling Envolvente</option>
                                            <option>Técnico e Direto</option>
                                        </select>
                                    </div>
                                </div>

                                <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0.5rem 0' }} />

                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                                    <button
                                        onClick={() => { setSourceText(''); setGeneratedSlides([]); }}
                                        className="secondary-btn"
                                        style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                                    >
                                        Limpar
                                    </button>
                                    <button
                                        onClick={handleGenerateCarousel}
                                        disabled={isLoading || !sourceText}
                                        className="primary-btn"
                                        style={{ opacity: (isLoading || !sourceText) ? 0.7 : 1, width: '100%', fontSize: '0.9rem', padding: '0.6rem 1rem' }}
                                    >
                                        {isLoading ? 'Roteirizando Slides...' : 'Criar Carrossel com IA'}
                                        {!isLoading && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>}
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Preview Form (Right Column) */}
                        <section className="glass-panel" style={{ padding: 0, height: '100%', minHeight: '500px', display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
                            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', background: 'var(--card-bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>Roteiro do Carrossel</h3>
                                {generatedSlides.length > 0 && (
                                    <button
                                        className="secondary-btn"
                                        style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem', transition: '0.3s' }}
                                        onClick={() => {
                                            const text = generatedSlides.map((slide, i) => `--- SLIDE ${i + 1} ---\n${slide}\n`).join('\n');
                                            navigator.clipboard.writeText(text);
                                            setIsCopied(true);
                                            setTimeout(() => setIsCopied(false), 2000);
                                        }}
                                    >
                                        {isCopied ? '✔ Roteiro Copiado!' : 'Copiar Roteiro'}
                                    </button>
                                )}
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, backgroundColor: 'var(--card-bg)' }}>
                                {generatedSlides.length === 0 && !isLoading && (
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center' }}>
                                        <p>O roteiro dos seus slides aparecerá aqui.<br />Preencha os dados e clique em Criar Carrossel.</p>
                                    </div>
                                )}

                                {isLoading && (
                                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                                        <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                                            <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                        </svg>
                                        A engine está processando...
                                    </div>
                                )}

                                {generatedSlides.length > 0 && !isLoading && (
                                    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '500px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                                            {generatedSlides.map((slideContent, index) => (
                                                <div key={index} style={{ background: 'var(--background)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                                            {index + 1}
                                                        </span>
                                                        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)' }}>
                                                            {index === 0 ? 'Capa do Carrossel' : index === generatedSlides.length - 1 ? 'Slide Final (Call to Action)' : `Conteúdo ${index}`}
                                                        </h4>
                                                    </div>
                                                    <p style={{ whiteSpace: 'pre-wrap', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--foreground)', margin: 0 }}>
                                                        {slideContent}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                            <button className="primary-btn" style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}>Baixar Roteiro PDF</button>
                                            <button className="secondary-btn" style={{ flex: 1, padding: '0.5rem', fontSize: '0.85rem' }}>Criar Imagens do Design</button>
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
