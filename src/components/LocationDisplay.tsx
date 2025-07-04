// LocationDisplay.tsx
'use client';

type Props = {
  timeZone: string;
};

const timeZoneMap: Record<string, { label: string; icon?: string }> = {
  'America/Sao_Paulo': { label: 'Goiânia, Brasil' },
  'Europe/Vienna': { label: 'Viena, Áustria', icon: '🇦🇹' },
  'Europe/Lisbon': { label: 'Lisboa, Portugal', icon: '🇵🇹' },
  'America/New_York': { label: 'Nova York, EUA', icon: '🇺🇸' },
};

export default function LocationDisplay({ timeZone }: Props) {
  const location = timeZoneMap[timeZone] ?? { label: timeZone };

  return (
    <span className="flex items-center gap-2 text-sm text-white">
      {/* Substituir por um ícone SVG ou remover se não quiser emojis */}
      {location.icon && <span aria-hidden="true">{location.icon}</span>}
      <span>{location.label}</span>
    </span>
  );
}
