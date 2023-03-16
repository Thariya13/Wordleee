import React from 'react';
import {Text, View} from 'react-native';
import styles from './WordleeeButton.styles';
import TouchableOpacityDebounce from '../touchableOpacityDebounce/TouchableOpacityDebounce.component';

interface Props {
  title: string;
  activeButtonStyle?: {[key: string]: string | number};
  handleOnPress: () => void;
}

const WordleeeButton = ({title, activeButtonStyle, handleOnPress}: Props) => (
  <View style={styles.activeButtonWrapper}>
    <TouchableOpacityDebounce
      onPress={handleOnPress}
      style={[styles.activeButton, activeButtonStyle]}>
      <Text style={styles.activeButtonText}>{title}</Text>
    </TouchableOpacityDebounce>
  </View>
);

export default WordleeeButton;
