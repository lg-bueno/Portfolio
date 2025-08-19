# Solução de Problemas de CSS

## Problemas Comuns e Soluções

### 1. Cache do Navegador
Se o CSS parece "bugado", primeiro limpe o cache do navegador:
- **Chrome/Edge**: Ctrl + Shift + R (hard refresh)
- **Firefox**: Ctrl + F5
- Ou abra as ferramentas de desenvolvedor (F12) e clique com botão direito no botão de refresh

### 2. Problemas de Hidratação
Se há diferenças entre servidor e cliente:
- Verifique se todos os componentes usam `"use client"` quando necessário
- Use `suppressHydrationWarning` em elementos que mudam dinamicamente
- Evite usar `window` ou `document` durante a renderização inicial

### 3. Problemas de Responsividade
- Verifique se as classes CSS estão sendo aplicadas corretamente
- Use as classes `mobile-padding`, `mobile-gap`, `text-mobile` para mobile
- Teste em diferentes tamanhos de tela

### 4. Problemas de Tema
- Verifique se o tema está sendo aplicado corretamente
- Use `[data-theme="dark"]` e `[data-theme="light"]` para estilos específicos
- Verifique se as variáveis CSS estão sendo definidas

### 5. Problemas de Layout
- Verifique se o `SecurityWrapper` não está interferindo
- Use `position: relative` para elementos com problemas de z-index
- Verifique se não há conflitos de CSS

## Comandos Úteis

```bash
# Limpar cache e reiniciar
npm run build
npm run dev

# Verificar erros de linting
npm run lint

# Parar todos os processos Node
taskkill /f /im node.exe
```

## Verificações Importantes

1. **Console do Navegador**: Verifique se há erros JavaScript
2. **Network Tab**: Verifique se todos os arquivos CSS estão carregando
3. **Elements Tab**: Verifique se as classes CSS estão sendo aplicadas
4. **Mobile**: Teste em diferentes dispositivos

## Classes CSS Importantes

- `mobile-padding`: Padding responsivo para mobile
- `mobile-gap`: Gap responsivo para mobile  
- `text-mobile`: Texto responsivo para mobile
- `mobile-reduce-animations`: Reduz animações em mobile
- `mobile-high-contrast`: Melhora contraste em mobile

## Estrutura de Arquivos CSS

- `src/resources/custom.css`: CSS customizado principal
- `src/components/*.module.scss`: CSS modular dos componentes
- `src/components/breakpoints.scss`: Breakpoints responsivos

## Contato

Se os problemas persistirem, verifique:
1. Se todas as dependências estão instaladas
2. Se o Node.js está atualizado
3. Se não há conflitos de versão 