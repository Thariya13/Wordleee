import React from 'react';
import {View} from 'react-native';
import styles from './WordCharacterButtons.styles';
import {Button} from '@react-native-material/core';
import colors from '../../../../theme/color';

interface Props {
  characters: string[];
  handleOnPress: (character: string, index: number) => void;
}

const WordCharacterButtons = ({characters, handleOnPress}: Props) => {
  return (
    <View style={styles.wordButtonWrapper}>
      {characters.map((character, index) => (
        <View style={styles.buttonWrapper}>
          <Button
            variant="contained"
            title={character}
            tintColor={colors.font.primaryYellow}
            onPress={() => handleOnPress(character, index)}
          />
        </View>
      ))}
    </View>
  );
};

export default WordCharacterButtons;
