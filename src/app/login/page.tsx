import { createClient } from '@/utils/supabase/client';
import { useState } from 'react';

export default function Login() {
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(false);

    const handleLinkedInLogin = async () => {
        setIsLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'linkedin_oidc',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        });

        if (error) {
            console.error('Login error:', error.message);
            alert('Não foi possível conectar com o LinkedIn no momento.');
            setIsLoading(false);
        }
    };
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', padding: '2rem' }}>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', width: '100%', maxWidth: '440px', border: '1px solid #e2e8f0', textAlign: 'center' }}>

                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'linear-gradient(135deg, #0A66C2, #4493df)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>Linkfluence</span>
                </div>

                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Bem-vindo de volta</h1>
                <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2.5rem' }}>Conecte sua conta para continuar criando</p>

                {/* LinkedIn Real Login Button */}
                <button
                    onClick={handleLinkedInLogin}
                    disabled={isLoading}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: '#0A66C2', color: 'white', padding: '1rem', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', border: 'none', width: '100%', cursor: isLoading ? 'wait' : 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 14px rgba(10, 102, 194, 0.3)', opacity: isLoading ? 0.7 : 1 }}
                >
                    {isLoading ? (
                        <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                            <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    )}
                    {isLoading ? 'Conectando...' : 'Entrar com LinkedIn'}
                </button>

                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>ou</div>
                    <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }}></div>
                </div>

                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
                    Ainda não tem uma conta? <a href="#" style={{ color: '#0A66C2', fontWeight: 600, textDecoration: 'none' }}>Solicitar Acesso</a>
                </div>

                <a href="/" style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'none' }}>
                    &larr; Voltar ao Início
                </a>
            </div>
        </div>
    );
}
