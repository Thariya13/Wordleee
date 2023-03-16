import {StyleSheet} from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  headerTitleWrapper: {
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.background.darkPurple,
    fontFamily: 'Roboto-Bold',
  },
  controllerWrapper: {
    paddingVertical: 5,
  },
  signUpButtonWrapper: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  signUpButton: {
    width: '30%',
  },
  error: {
    color: colors.font.primaryRed,
  },
});

export default styles;
