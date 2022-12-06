import { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { THEME } from '../../theme';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

interface RouteParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export const Game = () => {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as RouteParams;

  const handleGoBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    axios.get(`/games/${game.id}/ads`)
      .then(response => setDuos(response.data))
      .catch(console.log)
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          horizontal
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              {...item}
            />
          )}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
        />
      </SafeAreaView>
    </Background>
  );
}