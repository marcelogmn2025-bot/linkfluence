'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (isSignUp) {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${location.origin}/auth/callback`,
                },
            });
            if (error) {
                setMessage(error.message);
            } else {
                setMessage('Verifique seu email para confirmar a conta.');
            }
        } else {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                setMessage('Erro ao fazer login. Verifique suas credenciais.');
            } else {
                router.push('/dashboard');
                router.refresh();
            }
        }
        setIsLoading(false);
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at top left, var(--gradient-start), var(--background) 50%, var(--gradient-end))' }}>

            {/* Esferas decorativas de fundo para efeito de vidro */}
            <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(80px)', top: '10%', left: '20%', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'rgba(217, 70, 239, 0.2)', borderRadius: '50%', filter: 'blur(80px)', bottom: '15%', right: '25%', zIndex: 0 }}></div>

            <div className="glass-panel animate-fade-in" style={{ padding: '3rem', width: '100%', maxWidth: '420px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                <div style={{ textAlign: 'center' }}>
                    <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Linkfluence</h1>
                    <p style={{ color: 'var(--text-muted)' }}>
                        Transforme expertise em influência
                    </p>
                </div>

                {message && (
                    <div style={{ padding: '1rem', background: isSignUp ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: isSignUp ? 'var(--secondary)' : '#F87171', border: `1px solid ${isSignUp ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`, borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Profissional</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            placeholder="voce@empresa.com"
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Senha</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '0.5rem' }} disabled={isLoading}>
                        {isLoading ? 'Aguarde...' : isSignUp ? 'Criar Conta' : 'Entrar na Plataforma'}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {isSignUp ? 'Já possui uma conta?' : 'Ainda não conectou seu LinkedIn?'}
                        <button
                            type="button"
                            onClick={() => setIsSignUp(!isSignUp)}
                            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', marginLeft: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}
                        >
                            {isSignUp ? 'Fazer login' : 'Criar nova conta'}
                        </button>
                    </p>
                </div>

            </div>
        </div>
    );
}
