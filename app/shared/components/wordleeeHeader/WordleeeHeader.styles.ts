import {StyleSheet} from 'react-native';
import colors from '../../../theme/color';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    paddingTop: 70,
  },
  container: {
    paddingTop: 70,
  },
  headerTitleWrapper: {
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.background.darkPurple,
    fontFamily: 'Roboto-Bold',
  },
  back: {
    width: '20%',
  },
});

export default styles;
