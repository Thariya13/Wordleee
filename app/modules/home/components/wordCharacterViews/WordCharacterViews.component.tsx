import React from 'react';
import {View} from 'react-native';
import styles from './WordCharacterViews.styles';
import {Text} from '@react-native-material/core';

interface Props {
  characters: string[];
  spelledCharacters: string[];
}

const WordCharacterViews = ({characters, spelledCharacters}: Props) => {
  return (
    <View style={styles.wordViewWrapper}>
      {characters.map((_, index) => (
        <>
          <Text variant="overline" style={styles.character}>
            {spelledCharacters[index]}
          </Text>
        </>
      ))}
    </View>
  );
};

export default WordCharacterViews;
