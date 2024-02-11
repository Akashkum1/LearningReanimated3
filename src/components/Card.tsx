import {Dimensions, Image, View} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  RollInRight,
  RollOutLeft,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

type CardProps = {
  key: number;
  id: number;
  title: string;
  description: string;
  posterUrl: string;
};

function Card({
  id,
  title,
  description,
  posterUrl,
}: CardProps): React.JSX.Element {
  return (
    <Animated.View
      entering={RollInRight}
      exiting={RollOutLeft}
      layout={LinearTransition}
      style={{
        borderRadius: 28,
        padding: 16,
        marginVertical: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 8,
        shadowRadius: 6,
        shadowOffset: {height: 6, width: 0},
        shadowOpacity: 0.1,
      }}>
      <Image
        src={posterUrl}
        style={{
          height: (width - 30) * 1.5,
          width: '100%',
          borderRadius: 20,
        }}
      />
      {/* <Text>{title}</Text> */}
    </Animated.View>
  );
}

export default Card;
