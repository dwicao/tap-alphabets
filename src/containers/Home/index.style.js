import { StyleSheet } from 'react-native';
import { height, totalSize } from 'react-native-dimension';

export default StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sectionTop: {
    alignItems: 'center',
  },
  title: {
    color: 'black',
    marginTop: height(5),
    fontSize: totalSize(5),
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
