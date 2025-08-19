"use client";

import { Column } from "@once-ui-system/core";
import CertificationsCarousel from "./certifications/CertificationsCarousel";

export default function CertificationsPage() {
  return (
    <Column fillWidth style={{ minHeight: "100vh" }}>
      <CertificationsCarousel />
    </Column>
  );
} 