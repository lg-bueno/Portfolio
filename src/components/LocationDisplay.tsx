"use client";

import { useState, useEffect } from "react";
import { Text } from "@once-ui-system/core";

export function LocationDisplay() {
  const [location, setLocation] = useState<string>("São Paulo, BR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simular localização baseada no fuso horário ou IP
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes("America/Sao_Paulo")) {
      setLocation("São Paulo, BR");
    } else if (timezone.includes("America/New_York")) {
      setLocation("New York, US");
    } else if (timezone.includes("Europe/London")) {
      setLocation("London, UK");
    } else {
      setLocation("Remote");
    }
  }, []);

  if (!mounted) {
    return (
      <Text
        variant="body-default-s"
        onBackground="neutral-weak"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          fontWeight: "600",
          padding: "6px 12px",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)"
        }}
      >
        São Paulo, BR
      </Text>
    );
  }

  return (
    <Text
      variant="body-default-s"
      onBackground="neutral-weak"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        fontWeight: "600",
        padding: "6px 12px",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: "translateY(0)"
      }}

    >
      📍 {location}
    </Text>
  );
}
