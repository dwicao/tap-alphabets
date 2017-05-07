import { StyleSheet } from 'react-native';
import { width, height } from 'react-native-dimension';

export default StyleSheet.create({
  img: {
    width: width(100),
    height: height(100),
    resizeMode: 'cover',
  },
});
