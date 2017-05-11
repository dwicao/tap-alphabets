import { StyleSheet } from 'react-native';
import { totalSize } from 'react-native-dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.7)',
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topHeader: {
    fontSize: totalSize(7),
  },
  header: {
    fontSize: totalSize(5),
  },
  score: {
    fontSize: totalSize(5),
    fontWeight: 'bold',
  },
  txt: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
