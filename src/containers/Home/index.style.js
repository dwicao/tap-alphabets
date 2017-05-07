import { StyleSheet } from 'react-native';
import { height, totalSize } from 'react-native-dimension';

export default StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: height(4),
    fontSize: totalSize(4),
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
