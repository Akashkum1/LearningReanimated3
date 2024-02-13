import {useEffect} from 'react';
import {
  Easing,
  cancelAnimation,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const useLoop = ({
  duration,
  from,
  to,
}: {
  duration: number;
  from: number;
  to: number;
}) => {
  const progress = useSharedValue(from);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(to, {duration, easing: Easing.inOut(Easing.ease)}),
      -1,
      true,
    );
    return () => {
      cancelAnimation(progress);
    };
  }, [duration, progress]);
  return progress;
};
