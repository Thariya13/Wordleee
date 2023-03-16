import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {shuffle as _shuffle} from 'lodash';
import styles from './Word.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../../types/navigation.types';
import WordCharacterButtons from '../../components/wordCharacterButtons/WordCharacterButtons.component';
import WordCharacterViews from '../../components/wordCharacterViews/WordCharacterViews.component';
import {NAV_HOME_HOME} from '../../../../navigation/home/HomeRoutes';
import {useDispatch, useSelector} from 'react-redux';
import {setUserPoints} from '../../../../store/home/actions/Home.action';
import {selectAuthUser} from '../../../../store/home/selectors/Home.selectors';
import {Button, Text} from '@react-native-material/core';
import WordleeeHeader from '../../../../shared/components/wordleeeHeader/WordleeeHeader.component';
import ViewShot from 'react-native-view-shot';
import Share, {Social} from 'react-native-share';

const shuffleText = (text: string): string[] =>
  _shuffle(Array.from(text.toUpperCase()));

type Props = NativeStackScreenProps<HomeStackParamList, 'Nav_Home_Word'>;

const WordScreen = ({navigation, route}: Props) => {
  const {
    wordCategory: {wordTests},
  } = route.params;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [characters, setCharacters] = useState<string[]>([]);
  const [spelledCharacters, setSpelledCharacters] = useState<string[]>([]);
  const [matched, setMatched] = useState<boolean>(false);

  const viewShotRef = useRef<any>();

  const currentUser = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const {question, answer} = wordTests[currentIndex];

  useEffect(() => {
    setCharacters(shuffleText(answer));
    setSpelledCharacters([]);
  }, [currentIndex, answer]);

  useEffect(() => {
    if (spelledCharacters.length === answer.length) {
      const spelledWord = spelledCharacters.join('');
      if (spelledWord === answer.toUpperCase()) {
        setMatched(true);
        currentUser &&
          currentUser.email &&
          dispatch(
            setUserPoints({
              email: currentUser.email,
              points: (currentUser.points && currentUser.points + 10) || 10,
            }),
          );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spelledCharacters]);

  const handleOnPressWordCharacterButton = (
    character: string,
    index: number,
  ) => {
    characters[index] = '';
    setCharacters([...characters]);
    setSpelledCharacters([...spelledCharacters, character]);
  };

  const handleOnPressNext = () => {
    if (currentIndex === wordTests.length - 1) {
      navigation.navigate(NAV_HOME_HOME);
    } else {
      setCurrentIndex(currentIndex + 1);
      setMatched(false);
    }
  };

  const handleOnPressBack = () => {
    navigation.goBack();
  };

  const handleOnPressShare = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      await Share.shareSingle({
        social: Share.Social.INSTAGRAM,
        url: `data:text/plain;base64,${uri}`,
        type: 'image/*',
      });
    } catch (error) {
      console.log('Share error: ', error);
    }
  };

  return (
    <ViewShot
      style={styles.viewShot}
      ref={viewShotRef}
      options={{
        fileName: 'Your-File-Name',
        format: 'png',
        quality: 0.9,
        result: 'base64',
      }}>
      <WordleeeHeader handleOnPressBack={handleOnPressBack}>
        <View style={styles.container}>
          <View style={styles.pointsWrapper}>
            <Text variant="overline" style={styles.points}>
              You have earned {(currentUser && currentUser.points) || 0} points.
            </Text>
          </View>
          {matched ? (
            <View>
              <Text variant="h3" style={styles.title}>
                Correct! Congratulations
              </Text>
            </View>
          ) : (
            <>
              <WordCharacterViews
                characters={characters}
                spelledCharacters={spelledCharacters}
              />
              <Text variant="h5" style={styles.title}>
                {question.toUpperCase()}
              </Text>
              <WordCharacterButtons
                characters={characters}
                handleOnPress={handleOnPressWordCharacterButton}
              />
            </>
          )}
          {matched && (
            <View style={styles.shareButtonWrapper}>
              <Button
                variant="text"
                title="Do you want to share your score?"
                onPress={handleOnPressShare}
              />
            </View>
          )}
          <View style={styles.buttonWrapper}>
            <Button
              variant="text"
              title={
                currentIndex === wordTests.length - 1
                  ? 'Done'
                  : spelledCharacters.length
                  ? 'Next'
                  : 'Skip'
              }
              onPress={handleOnPressNext}
            />
          </View>
        </View>
      </WordleeeHeader>
    </ViewShot>
  );
};

export default WordScreen;
