export const tracks = [
  { id: 'fundacao', label: 'Fundação', color: 'oklch(72% 0.18 250)' },
  { id: 'prompt', label: 'Engenharia de Prompt', color: 'oklch(70% 0.22 295)' },
  { id: 'claude', label: 'Claude por dentro', color: 'oklch(72% 0.18 250)' },
  { id: 'lovable', label: 'Lovable', color: 'oklch(70% 0.22 295)' },
  { id: 'casos', label: 'Casos práticos', color: 'oklch(82% 0.14 165)' },
  { id: 'seguranca', label: 'Segurança', color: 'oklch(82% 0.14 165)' },
] as const;

export type TrackId = (typeof tracks)[number]['id'];
