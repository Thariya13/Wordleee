import React from 'react';
import {View} from 'react-native';
import styles from './WordleeeHeader.styles';
import {Button, Text} from '@react-native-material/core';

interface Props {
  children: any;
  currentUser?: any;
  handleOnPressBack?: () => void;
}

const WordleeeHeader = ({children, currentUser, handleOnPressBack}: Props) => (
  <View style={styles.containerWrapper}>
    {handleOnPressBack && (
      <>
        <Button
          variant="text"
          title="Back"
          style={styles.back}
          onPress={handleOnPressBack}
        />
      </>
    )}
    <View style={styles.headerTitleWrapper}>
      {currentUser && (
        <Text
          variant="caption"
          style={
            styles.headerTitle
          }>{`Hello ${currentUser.firstName} ${currentUser.lastName}!`}</Text>
      )}
      <Text variant="h2" style={styles.headerTitle}>
        Wordleee
      </Text>
    </View>
    {children}
  </View>
);

export default WordleeeHeader;
