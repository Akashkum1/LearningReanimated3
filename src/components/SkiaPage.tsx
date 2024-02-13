import React, {useEffect} from 'react';
import {
  Canvas,
  Circle,
  Fill,
  Group,
  Path,
  Skia,
} from '@shopify/react-native-skia';
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';
import {useLoop} from '../hooks/useLoop';

// const star = () => {
//   const R = 115.2;
//   const C = 128.0;
//   const path = Skia.Path.Make();
//   path.moveTo(C + R, C);
//   for (let i = 1; i < 8; ++i) {
//     const a = 2.6927937 * i;
//     path.lineTo(C + R * Math.cos(a), C + R * Math.sin(a));
//   }
//   return path;
// };

const SkiaPage = () => {
  const {width, height} = useWindowDimensions();
  const r = useSharedValue(0);
  const c = useDerivedValue(() => width - r.value);
  // useEffect(() => {
  //   r.value = withRepeat(withTiming(width * 0.33, {duration: 10000}), -1);
  // }, [r, width]);
  // const path = star();
  const x = useLoop({duration: 1000, from: 0, to: 100});
  return (
    <Canvas style={{width, height}}>
      {/* <Group blendMode="difference"> */}
      <Circle cx={width / 2} cy={width / 2} r={x} color="cyan" />
      {/* <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" /> */}
      {/* <Circle cx={width / 2} cy={height / 2} r={r} color="cyan" /> */}
      {/* <Fill color="white" />
      <Group >
        <Path
          path={
            'M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z'
          }
          style="stroke"
          strokeWidth={4}
          color="#3EB489"
        />
      </Group> */}
      {/* <Circle cx={c} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={c} r={r} color="yellow" /> */}
      {/* </Group> */}
    </Canvas>
  );
};

export default SkiaPage;
