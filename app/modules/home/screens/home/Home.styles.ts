import {StyleSheet} from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  signOutButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  signOutButton: {
    width: '30%',
  },
  activeButton: {
    backgroundColor: colors.background.darkPurple,
    borderColor: colors.background.darkPurple,
  },
  wordCategoryWrapper: {
    paddingTop: 100,
  },
  bottomActiveButtonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
});

export default styles;
