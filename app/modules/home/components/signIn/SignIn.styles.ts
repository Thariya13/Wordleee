import {StyleSheet} from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  emailTextInputWrapper: {
    paddingVertical: 5,
  },
  passwordTextInputWrapper: {
    paddingVertical: 5,
  },
  loginButtonWrapper: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  loginButton: {
    width: '30%',
  },
  error: {
    color: colors.font.primaryRed,
  },
});

export default styles;
