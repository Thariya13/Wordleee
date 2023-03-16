import React from 'react';
import {Text} from 'react-native';
import styles from './WordCategory.styles';
import TouchableOpacityDebounce from '../../../../shared/components/touchableOpacityDebounce/TouchableOpacityDebounce.component';

interface Props {
  name: string;
  handleOnPress: (e?: any) => void;
}

const WordCategory = ({name, handleOnPress}: Props) => {
  return (
    <TouchableOpacityDebounce onPress={handleOnPress} style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacityDebounce>
  );
};

export default WordCategory;
