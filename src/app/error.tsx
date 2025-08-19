'use client';

import { Column, Heading, Text, Button } from "@once-ui-system/core";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        Oops!
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Algo deu errado
      </Heading>
      <Text onBackground="neutral-weak" marginBottom="l">
        {error.message || 'Ocorreu um erro inesperado.'}
      </Text>
      <Button onClick={reset} variant="primary">
        Tentar novamente
      </Button>
    </Column>
  );
} 