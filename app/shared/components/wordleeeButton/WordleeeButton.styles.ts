import {StyleSheet} from 'react-native';
import colors from '../../../theme/color';

const styles = StyleSheet.create({
  activeButtonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  activeButton: {
    width: '100%',
    aspectRatio: 150 / 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#5544EE',
    borderColor: '#5544EE',
  },
  activeButtonText: {
    fontSize: 20,
    color: colors.font.brightYellow,
  },
});

export default styles;
