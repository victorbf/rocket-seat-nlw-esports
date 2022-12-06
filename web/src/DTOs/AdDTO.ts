export interface AdDTO {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord?: string;
  weekDays: number[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  createdAt: string;
}
