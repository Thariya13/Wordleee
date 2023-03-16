import {StyleSheet} from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  wordViewWrapper: {
    flexDirection: 'row',
    height: 50,
  },
  character: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: colors.background.darkPurple,
  },
});

export default styles;
