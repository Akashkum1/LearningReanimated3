/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  // StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  LinearTransition,
  RollInLeft,
  RollInRight,
  RollOutLeft,
  RollOutRight,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Card from './src/components/Card';
import ZomatoInput from './src/components/ZomatoInput';
import SkiaPage from './src/components/SkiaPage';

const data = [
  {
    id: 1,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterUrl: 'https://picsum.photos/1200/800',
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterUrl: 'https://picsum.photos/1600/900',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: 'https://picsum.photos/1024/768',
  },
  {
    id: 4,
    title: 'The Godfather: Part II',
    description:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    posterUrl: 'https://picsum.photos/800/600',
  },
  {
    id: 5,
    title: '12 Angry Men',
    description:
      'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    posterUrl: 'https://picsum.photos/640/480',
  },
];

function CardList(): React.JSX.Element {
  const [movies, setMovies] = useState(data);

  function handleAdd() {
    const randomIdx = Math.floor(Math.random() * 5);
    setMovies([
      {...data[randomIdx], id: Math.floor(Math.random() * 100000)},
      ...movies,
    ]);
  }

  function handleDelete() {
    setMovies([...movies.slice(1)]);
  }

  return (
    <View style={{flex: 1}}>
      <Button title="Add" onPress={handleAdd} />
      <Button title="Delete" color={'red'} onPress={handleDelete} />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingBottom: 50}}>
        {movies.map(movie => (
          <Card key={movie.id} {...movie} />
        ))}
      </ScrollView>
    </View>
  );
}

function App(): React.JSX.Element {
  // const width = useSharedValue(50);

  // const handlePress = () => {
  //   width.value = width.value + 50;
  // };

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{translateX: width.value}],
  // }));

  // useEffect(() => {
  //   width.value = withRepeat(
  //     withSequence(
  //       withTiming(width.value - 10, {duration: 500, easing: Easing.cubic}),
  //       withTiming(width.value + 10, {duration: 500, easing: Easing.cubic}),
  //     ),
  //     -1,
  //     true,
  //   );
  //   setTimeout(() => cancelAnimation(width), 5000);
  // }, []);

  return (
    <SafeAreaView>
      {/* <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'violet',
            borderRadius: 10,
          },
          animatedStyle,
        ]}
      />
      <Button onPress={handlePress} title="Click me" /> */}
      {/* <CardList /> */}
      <View className="bg-neutral-300">
        <SkiaPage />
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   backgroundStyle: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   container: {
//     flex: 1,
//   },
// });

export default App;
