import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: string;
  title: string;
  _count: { ads: number };
  bannerUrl: string,
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps,
};

export function GameCard({ data, ...rest }: Props) {
  const { title, _count, bannerUrl } = data;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: bannerUrl }}
      >
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>
            {title}
          </Text>
          <Text style={styles.ads}>
            {_count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}