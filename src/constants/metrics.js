import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const METRICS = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
};
