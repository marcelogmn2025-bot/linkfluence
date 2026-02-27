import Link from "next/link";

export default function Home() {
    return (
        <div style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh', fontFamily: 'var(--font-sans)', overflowX: 'hidden' }}>

            {/* Header / Navbar - Changed styling to look distinct */}
            <header style={{
                position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)',
                width: '90%', maxWidth: '1000px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.8rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
                border: '1px solid rgba(10, 102, 194, 0.15)',
                boxShadow: '0 10px 30px -10px rgba(10, 102, 194, 0.1)',
                zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>

                    <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#002544', letterSpacing: '-0.5px' }}>
                        {/* New Linkfluence Logo - Infinity / Link concept */}
                        <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #09A8EC, #4493df)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(9, 168, 236, 0.4)' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                        </div>
                        Linkfluence
                    </Link>

                    <nav className="desktop-nav" style={{ gap: '2rem', display: 'flex' }}>
                        <Link href="#produto" style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>A Plataforma</Link>
                        <Link href="#solucoes" style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>Casos de Uso</Link>
                        <Link href="#precos" style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>Planos</Link>
                    </nav>

                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Link href="/login" style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>
                        Fazer Login
                    </Link>
                    <Link href="/login" style={{ background: '#002544', color: 'white', padding: '0.6rem 1.2rem', fontSize: '0.9rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s', border: '1px solid transparent' }}>
                        Criar Conta
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <main style={{ paddingTop: '160px', paddingBottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', padding: '0 1rem', position: 'relative' }}>

                    {/* Background Particles & Glow */}
                    <div style={{ position: 'absolute', top: '-100px', left: '-15%', right: '-15%', bottom: '-200px', pointerEvents: 'none', zIndex: 0 }}>
                        <div className="animate-float-slow" style={{ position: 'absolute', top: '10%', left: '0%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(9, 168, 236, 0.05) 0%, rgba(255,255,255,0) 60%)', filter: 'blur(40px)' }}></div>
                        <div className="particle-container">
                            <div className="particle p1"></div>
                            <div className="particle p2"></div>
                            <div className="particle p3"></div>
                            <div className="particle p4"></div>
                            <div className="particle p5"></div>
                            <div className="particle p6"></div>
                            <div className="particle p7"></div>
                            <div className="particle p8"></div>
                            <div className="particle p9"></div>
                            <div className="particle p10"></div>
                            <div className="particle p11"></div>
                            <div className="particle p12"></div>
                            <div className="particle p13"></div>
                            <div className="particle p14"></div>
                            <div className="particle p15"></div>
                            <div className="particle p16"></div>
                            <div className="particle p17"></div>
                            <div className="particle p18"></div>
                        </div>
                    </div>

                    <div className="animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(9, 168, 236, 0.1)', border: '1px solid rgba(9, 168, 236, 0.2)', padding: '0.35rem 1rem', borderRadius: '999px', color: '#09A8EC', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                        <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#09A8EC', borderRadius: '50%' }}></span>
                        O segredo do crescimento acelerado B2B
                    </div>

                    <h1 className="animate-fade-in delay-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem', color: '#0f172a', position: 'relative', zIndex: 1 }}>
                        Transforme sua experiência <br />
                        em <span style={{ background: 'linear-gradient(135deg, #09A8EC, #4493df)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>influência no LinkedIn</span>
                    </h1>

                    <p className="animate-fade-in delay-200" style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '3.5rem', lineHeight: '1.6', maxWidth: '650px', margin: '0 auto 3.5rem auto', textWrap: 'balance', position: 'relative', zIndex: 1 }}>
                        Abandone os textos genéricos de IA. O Linkfluence mapeia o seu <strong>DNA de Conteúdo</strong> para que você agende posts, construa autoridade e feche negócios no LinkedIn sem gastar horas escrevendo.
                    </p>

                    <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', position: 'relative' }}>

                        {/* Feature Approach Card 1 - Different formatting from Supergrow */}
                        <div className="card-hover" style={{ background: 'white', padding: '2rem', borderRadius: '24px', flex: '1', minWidth: '320px', maxWidth: '400px', textAlign: 'left', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #09A8EC, #4493df)' }}></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>Quero crescer meu LinkedIn</h3>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '2rem', lineHeight: '1.6' }}>Para líderes que precisam aumentar o alcance e gerar demanda no LinkedIn, mas não têm 5 horas na semana para escrever textos.</p>
                            <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f8fafc', color: '#334155', padding: '0.7rem 1.2rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #e2e8f0' }}>
                                Começar agora <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Feature Approach Card 2 */}
                        <div className="card-hover-dark" style={{ background: '#061a33', padding: '2rem', borderRadius: '24px', flex: '1', minWidth: '320px', maxWidth: '400px', textAlign: 'left', border: '1px solid #0c2c56', boxShadow: '0 10px 40px -10px rgba(10, 102, 194, 0.15)', position: 'relative', overflow: 'hidden' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>Agências de Social Media</h3>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.6' }}>Gerencie o cronograma de publicações do LinkedIn de diversos clientes, capturando a voz de cada um com exatidão.</p>
                            <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#09A8EC', color: 'white', padding: '0.7rem 1.2rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>
                                Falar com vendas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Showcase Section */}
                <div style={{ width: '100%', padding: '6rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#ffffff', position: 'relative' }}>

                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', textAlign: 'center', letterSpacing: '-0.02em', textWrap: 'balance' }}>
                        Tudo o que você precisa para construir influência.
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '4rem', textAlign: 'center', maxWidth: '600px', textWrap: 'balance' }}>
                        Crie conteúdo autêntico, expanda sua rede de contatos e acompanhe o que funciona sem dores de cabeça.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1100px', width: '100%' }}>

                        {/* Editor Card */}
                        <div className="card-hover" style={{ background: '#f8fafc', borderRadius: '24px', padding: '2.5rem 2.5rem 0 2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid #e2e8f0' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', borderRadius: '24px 24px 0 0', background: 'linear-gradient(90deg, #09A8EC, #4493df)' }}></div>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '32px', height: '32px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', color: '#94a3b8' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                            </div>

                            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: '#09A8EC', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                Criação de Conteúdo
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '300px', lineHeight: '1.3', maxWidth: '85%' }}>
                                Inteligência artificial que escreve como você — não para você.
                            </h3>

                            {/* CSS Mockup: Editor */}
                            <div style={{ marginTop: 'auto', background: '#09A8EC', borderRadius: '16px 16px 0 0', padding: '1.5rem 1.5rem 0 1.5rem', position: 'absolute', bottom: 0, left: '2.5rem', right: '2.5rem', height: '240px', zIndex: 1 }}>
                                <div style={{ background: 'white', borderRadius: '12px 12px 0 0', width: '100%', height: '100%', boxShadow: '0 -10px 30px rgba(0,0,0,0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>Gerenciador de Posts</div>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#e2e8f0' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <div style={{ width: '32px', height: '32px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '16px' }}>🤖</span></div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', width: '80%', marginBottom: '8px' }}></div>
                                            <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', width: '60%', marginBottom: '16px' }}></div>
                                            <div style={{ height: '8px', background: '#f8fafc', borderRadius: '4px', width: '90%', marginBottom: '8px' }}></div>
                                            <div style={{ height: '8px', background: '#f8fafc', borderRadius: '4px', width: '75%' }}></div>
                                        </div>
                                    </div>

                                    {/* Glassmorphism Floating Badge */}
                                    <div className="animate-float-slow" style={{ position: 'absolute', bottom: '40px', left: '-20px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', gap: '1rem', alignItems: 'center', zIndex: 2, width: '280px' }}>
                                        <div style={{ width: '36px', height: '36px', background: '#8b5cf6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>✨</div>
                                        <div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>DNA de Conteúdo Ativo</div>
                                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Ajustando sua forma de escrita única</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Engagement Card */}
                        <div className="card-hover" style={{ background: '#f8fafc', borderRadius: '24px', padding: '2.5rem 2.5rem 0 2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid #e2e8f0', minHeight: '520px' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', borderRadius: '24px 24px 0 0', background: 'linear-gradient(90deg, #8b5cf6, #c084fc)' }}></div>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '32px', height: '32px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', color: '#94a3b8' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                            </div>

                            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: '#8b5cf6', textTransform: 'uppercase', marginBottom: '1rem', marginTop: '1rem' }}>
                                Gestão de Relacionamento
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '300px', lineHeight: '1.3', maxWidth: '85%' }}>
                                Construa relacionamentos reais, não apenas alcance inflado.
                            </h3>

                            {/* CSS Mockup: Engagement */}
                            <div style={{ marginTop: 'auto', background: '#8b5cf6', borderRadius: '16px 16px 0 0', padding: '1.5rem 1.5rem 0 1.5rem', position: 'absolute', bottom: 0, left: '2.5rem', right: '2.5rem', height: '240px', zIndex: 1 }}>
                                <div style={{ background: 'white', borderRadius: '12px 12px 0 0', width: '100%', height: '100%', boxShadow: '0 -10px 30px rgba(139, 92, 246, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>Lista de Engajamento</div>
                                        <div style={{ fontSize: '0.7rem', background: '#f1f5f9', color: '#475569', padding: '0.3rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>12 leads sincronizados</div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                                        <div style={{ height: '36px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', width: '130px', display: 'flex', alignItems: 'center', padding: '0 0.5rem', gap: '0.5rem' }}>
                                            <div style={{ width: '16px', height: '16px', background: '#e2e8f0', borderRadius: '4px' }}></div>
                                            <div style={{ height: '4px', background: '#cbd5e1', width: '40px', borderRadius: '2px' }}></div>
                                        </div>
                                        <div style={{ height: '36px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', width: '130px', display: 'flex', alignItems: 'center', padding: '0 0.5rem', gap: '0.5rem' }}>
                                            <div style={{ width: '16px', height: '16px', background: '#e2e8f0', borderRadius: '4px' }}></div>
                                            <div style={{ height: '4px', background: '#cbd5e1', width: '40px', borderRadius: '2px' }}></div>
                                        </div>
                                    </div>

                                    {/* Post Card Component Floating */}
                                    <div style={{ background: 'white', border: '2px solid #8b5cf6', borderRadius: '8px', padding: '1rem', position: 'absolute', bottom: '15px', left: '15%', right: '5%', boxShadow: '0 15px 35px rgba(0,0,0,0.08)', zIndex: 2 }}>
                                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                                            <div style={{ width: '24px', height: '24px', background: '#e2e8f0', borderRadius: '50%' }}></div>
                                            <div>
                                                <div style={{ height: '6px', width: '80px', background: '#475569', borderRadius: '3px', marginBottom: '4px' }}></div>
                                                <div style={{ height: '4px', width: '50px', background: '#cbd5e1', borderRadius: '2px' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ height: '4px', width: '100%', background: '#f1f5f9', borderRadius: '2px', marginBottom: '6px' }}></div>
                                        <div style={{ height: '4px', width: '85%', background: '#f1f5f9', borderRadius: '2px', marginBottom: '16px' }}></div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ height: '20px', width: '120px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px' }}></div>
                                            <div style={{ height: '26px', width: '80px', background: '#8b5cf6', borderRadius: '6px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Analytics Card */}
                        <div className="card-hover" style={{ background: '#f8fafc', borderRadius: '24px', padding: '2.5rem 2.5rem 0 2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid #e2e8f0', minHeight: '520px' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', borderRadius: '24px 24px 0 0', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }}></div>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '32px', height: '32px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', color: '#ca8a04' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
                            </div>

                            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: '#d97706', textTransform: 'uppercase', marginBottom: '1rem', marginTop: '1rem' }}>
                                Análises
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '300px', lineHeight: '1.3', maxWidth: '85%' }}>
                                Monitore o que está funcionando. Faça mais disso.
                            </h3>

                            {/* CSS Mockup: Analytics */}
                            <div style={{ marginTop: 'auto', background: '#f59e0b', borderRadius: '16px 16px 0 0', padding: '1.5rem 1.5rem 0 1.5rem', position: 'absolute', bottom: 0, left: '2.5rem', right: '2.5rem', height: '260px', zIndex: 1, overflow: 'hidden' }}>
                                <div style={{ background: 'white', borderRadius: '12px 12px 0 0', width: '100%', height: '100%', boxShadow: '0 -10px 30px rgba(245, 158, 11, 0.2)', padding: '1.2rem', display: 'flex', gap: '1rem' }}>

                                    {/* Left Stats Column */}
                                    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                            <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600, marginBottom: '2px' }}>Seguidores</div>
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>25,725</div>
                                                <div style={{ fontSize: '0.6rem', color: '#10b981', fontWeight: 700, background: '#d1fae5', padding: '2px 4px', borderRadius: '4px' }}>+4.6%</div>
                                            </div>
                                        </div>
                                        <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                            <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600, marginBottom: '2px' }}>Impressões</div>
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>8,342</div>
                                                <div style={{ fontSize: '0.6rem', color: '#ef4444', fontWeight: 700, background: '#fee2e2', padding: '2px 4px', borderRadius: '4px' }}>-1.2%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Report Column */}
                                    <div style={{ flex: 1, border: '1px solid #f1f5f9', borderRadius: '8px', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div>
                                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a' }}>O que funcionou na semana</div>
                                            <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Relatório Semanal</div>
                                        </div>

                                        <div style={{ background: '#f5f3ff', border: '1px solid #ede9fe', padding: '0.75rem', borderRadius: '6px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                <div style={{ background: '#8b5cf6', width: '20px', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>✨</div>
                                                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6d28d9' }}>Oportunidade de Conteúdo</div>
                                            </div>
                                            <div style={{ height: '6px', background: '#ddd6fe', borderRadius: '3px', width: '100%', marginBottom: '4px' }}></div>
                                            <div style={{ height: '6px', background: '#ddd6fe', borderRadius: '3px', width: '60%' }}></div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #ecfdf5', padding: '0.5rem', borderRadius: '6px' }}>
                                            <div style={{ background: '#10b981', width: '16px', height: '16px', borderRadius: '4px', opacity: 0.2 }}></div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#10b981' }}>Melhor Post</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Teams Card */}
                        <div className="card-hover" style={{ background: '#f8fafc', borderRadius: '24px', padding: '2.5rem 2.5rem 0 2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', border: '1px solid #e2e8f0', minHeight: '520px' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', borderRadius: '24px 24px 0 0', background: 'linear-gradient(90deg, #10b981, #34d399)' }}></div>
                            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '32px', height: '32px', background: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', color: '#059669' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm14 14v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                            </div>

                            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: '#10b981', textTransform: 'uppercase', marginBottom: '1rem', marginTop: '1rem' }}>
                                Equipes
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '300px', lineHeight: '1.3', maxWidth: '85%' }}>
                                Sua equipe publica conteúdo alinhado à marca. Você mantém o controle.
                            </h3>

                            {/* CSS Mockup: Teams */}
                            <div style={{ marginTop: 'auto', background: '#10b981', borderRadius: '16px 16px 0 0', padding: '1.5rem 1.5rem 0 1.5rem', position: 'absolute', bottom: 0, left: '2.5rem', right: '2.5rem', height: '260px', zIndex: 1, overflow: 'hidden' }}>
                                <div style={{ background: 'white', borderRadius: '12px 12px 0 0', width: '100%', height: '100%', boxShadow: '0 -10px 30px rgba(16, 185, 129, 0.2)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>Content Board</div>
                                        <div style={{ background: '#09A8EC', color: 'white', fontSize: '0.65rem', padding: '0.3rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>+ Add Drafts</div>
                                    </div>

                                    {/* Kanban Board Mockup */}
                                    <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                                        {/* Column 1 */}
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1' }}></div>
                                                Rascunhos
                                            </div>
                                            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.5rem', marginBottom: '0.5rem' }}>
                                                <div style={{ height: '4px', background: '#cbd5e1', borderRadius: '2px', width: '90%', marginBottom: '4px' }}></div>
                                                <div style={{ height: '4px', background: '#cbd5e1', borderRadius: '2px', width: '60%', marginBottom: '10px' }}></div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <div style={{ width: '14px', height: '14px', background: '#e2e8f0', borderRadius: '50%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column 2 */}
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '0.65rem', color: '#09A8EC', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#09A8EC' }}></div>
                                                Em Revisão
                                            </div>
                                            <div style={{ background: 'white', border: '1px solid #3b82f6', borderRadius: '6px', padding: '0.5rem', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.1)' }}>
                                                <div style={{ height: '4px', background: '#93c5fd', borderRadius: '2px', width: '100%', marginBottom: '4px' }}></div>
                                                <div style={{ height: '4px', background: '#93c5fd', borderRadius: '2px', width: '80%', marginBottom: '4px' }}></div>
                                                <div style={{ height: '4px', background: '#93c5fd', borderRadius: '2px', width: '50%', marginBottom: '10px' }}></div>
                                            </div>
                                        </div>
                                        {/* Column 3 */}
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
                                                Aprovados
                                            </div>
                                            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.5rem', opacity: 0.6 }}>
                                                <div style={{ height: '4px', background: '#cbd5e1', borderRadius: '2px', width: '80%', marginBottom: '4px' }}></div>
                                                <div style={{ height: '4px', background: '#cbd5e1', borderRadius: '2px', width: '40%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Dark Indigo Section: Redesigned Stats */}
                <div className="animate-fade-in delay-300" style={{ width: '100%', background: '#0f172a', padding: '7rem 2rem', marginTop: '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

                    {/* Background decoration */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(9, 168, 236, 0.5), transparent)' }}></div>
                    <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(9, 168, 236, 0.15) 0%, transparent 60%)', filter: 'blur(60px)' }}></div>

                    <h2 style={{ color: 'white', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center', maxWidth: '800px', lineHeight: '1.3', textWrap: 'balance', zIndex: 1 }}>
                        Por que focar no seu Content DNA?
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '4rem', textAlign: 'center', maxWidth: '600px', textWrap: 'balance', zIndex: 1 }}>
                        O mundo corporativo está cansado de textos gerados de forma robótica.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', width: '100%', zIndex: 1 }}>

                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '3rem 2rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                            <div style={{ background: 'rgba(9, 168, 236, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4493df', marginBottom: '1.5rem' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem', fontWeight: 600 }}>Autenticidade Real</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', textWrap: 'balance' }}>Pessoas compram de pessoas. Sua autoridade só cresce quando a audiência sente que é realmente você escrevendo.</p>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '3rem 2rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                            <div style={{ background: 'rgba(9, 168, 236, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4493df', marginBottom: '1.5rem' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem', fontWeight: 600 }}>Crescimento em Escala</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', textWrap: 'balance' }}>Produza um calendário editorial completo e com qualidade impecável encurtando o tempo na frente do computador.</p>
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '3rem 2rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                            <div style={{ background: 'rgba(9, 168, 236, 0.15)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4493df', marginBottom: '1.5rem' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem', fontWeight: 600 }}>Agendamento Nativo</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', textWrap: 'balance' }}>Aprove e agende publicações para o LinkedIn direto do painel. Tudo o que você precisa em um workflow sem atritos.</p>
                        </div>

                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer style={{ background: '#020617', padding: '3rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '0.85rem', borderTop: '1px solid #1e293b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '20px', height: '20px', background: 'linear-gradient(135deg, #09A8EC, #4493df)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                    </div>
                    © 2026 Linkfluence. Todos os direitos reservados.
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link href="#">Privacidade</Link>
                    <Link href="#">Termos</Link>
                </div>
            </footer>
        </div>
    );
}
