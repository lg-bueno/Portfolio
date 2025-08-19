"use client";

import { useEffect } from 'react';

interface SecurityWrapperProps {
  children: React.ReactNode;
}

export default function SecurityWrapper({ children }: SecurityWrapperProps) {
  useEffect(() => {
    // Verificar se estamos em modo de desenvolvimento
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Se estiver em desenvolvimento, não aplicar nenhuma restrição
    if (isDevelopment) {
      return;
    }
    
    // Desabilitar menu de contexto (botão direito)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Desabilitar teclas de atalho de inspeção
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, F12
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Desabilitar seleção de texto
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Detectar DevTools apenas em produção
    const detectDevTools = () => {
      try {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        // Verificar se é um dispositivo móvel (não deve bloquear)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if ((widthThreshold || heightThreshold) && !isMobile) {
          // Redirecionar ou mostrar aviso apenas se não for mobile
          document.body.innerHTML = '<h1>Acesso não autorizado detectado</h1>';
        }
      } catch (error) {
        console.error('Error in DevTools detection:', error);
      }
    };

    // Aplicar listeners apenas em produção
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    
    // Verificar DevTools periodicamente apenas em produção
    const interval = setInterval(detectDevTools, 1000);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(interval);
    };
  }, []);

  return <>{children}</>;
} 