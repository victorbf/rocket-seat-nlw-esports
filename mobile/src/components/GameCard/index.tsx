import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  ImageSourcePropType,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType,
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps,
};

export function GameCard({ data, ...rest }: Props) {
  const { ads, cover, id, name } = data;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={cover}
      >
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.ads}>
            {ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}