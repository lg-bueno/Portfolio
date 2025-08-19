'use client';

import { Column, Heading, Text, Button } from "@once-ui-system/core";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Column as="section" fill center paddingBottom="160">
          <Text marginBottom="s" variant="display-strong-xl">
            Erro Crítico
          </Text>
          <Heading marginBottom="l" variant="display-default-xs">
            Algo deu errado no sistema
          </Heading>
          <Text onBackground="neutral-weak" marginBottom="l">
            {error.message || 'Ocorreu um erro inesperado no sistema.'}
          </Text>
          <Button onClick={reset} variant="primary">
            Tentar novamente
          </Button>
        </Column>
      </body>
    </html>
  );
} 