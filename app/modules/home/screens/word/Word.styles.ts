import {StyleSheet} from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  viewShot: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  pointsWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.background.darkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 30,
  },
  points: {
    color: colors.font.primaryYellow,
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
  },
  title: {
    fontFamily: 'Roboto-Light',
    color: colors.background.darkPurple,
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  shareButtonWrapper: {
    paddingTop: 30,
  },
});

export default styles;
