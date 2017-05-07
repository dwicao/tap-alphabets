import { StyleSheet } from 'react-native';
import { width, totalSize } from 'react-native-dimension';

export default StyleSheet.create({
  container: {
    width: width(25),
    height: width(27),
  },
  size: {
    height: width(25),
    borderRadius: width(2),
  },
  primary: {
    top: width(2),
  },
  secondary: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alphabet: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: totalSize(4.5),
    backgroundColor: 'transparent',
  },
});