import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function DuoCard({
  name,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel
}: DuoCardProps) {
  const yearPlural = yearsPlaying > 1 ? "s" : "";
  const weekDaysPlural = weekDays.length > 1 ? "s" : "";

  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={name} />
      <DuoInfo
        label="Tempo de jogo"
        value={`${yearsPlaying} ano${yearPlural}`}
      />
      <DuoInfo
        label="Disponibilidade"
        value={`${weekDays.length} dia${weekDaysPlural} \u2022 ${hourStart} - ${hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={useVoiceChannel ? "Sim" : "Não"} 
        colorValue={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button}>
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
