import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function ZomatoInput(): React.JSX.Element {
  const [color, setColor] = useState('lightgray');
  const [text, setText] = useState('');
  const translateY = useSharedValue(0);
  const zIndex = useSharedValue(-100);

  const width = useSharedValue(50);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    zIndex: zIndex.value,
  }));
  return (
    <View
      style={{
        borderColor: color,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15,
      }}>
      <TextInput
        cursorColor="black"
        style={{paddingHorizontal: 10, paddingVertical: 8}}
        onFocus={() => {
          setColor('black');
          translateY.value = withTiming(-18, {
            duration: 300,
          });
          zIndex.value = 10;
        }}
        onSubmitEditing={() => {
          console.log('Submit');
        }}
        onEndEditing={() => {
          console.log('End Editing');
          if (text.length === 0) {
            translateY.value = withTiming(0, {
              duration: 300,
            });
            zIndex.value = -100;
          }
        }}
        onChangeText={text => {
          setText(text);
        }}
        onBlur={() => {
          console.log('End Blurring');
          setColor('lightgray');
        }}
        value={text}
      />
      <Animated.Text
        style={[
          {
            position: 'absolute',
            left: 10,
            top: 6,
            color,
            backgroundColor: 'white',
            paddingHorizontal: 10,
          },
          animatedStyle,
        ]}>
        aggvsa
      </Animated.Text>
    </View>
  );
}

export default ZomatoInput;
