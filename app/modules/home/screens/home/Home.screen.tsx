import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './Home.styles';
import {HomeStackParamList} from '../../../../types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  NAV_HOME_LEADERBOARD,
  NAV_HOME_WORD,
} from '../../../../navigation/home/HomeRoutes';
import {
  SignInRequest,
  SignUpRequest,
  WordCategory,
} from '../../../../types/wordleee.types';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import SignUp from '../../components/signUp/SignUp.component';
import SignIn from '../../components/signIn/SignIn.component';
import {subscribeOnAuthStateChanged} from '../../../../services/AuthService';
import {useDispatch, useSelector} from 'react-redux';
import {
  getUser,
  getUsers,
  getWordCategories,
  signInUser,
  signOutUser,
  signUpUser,
} from '../../../../store/home/actions/Home.action';
import {
  selectAuthUser,
  selectWordCategories,
} from '../../../../store/home/selectors/Home.selectors';
import {Button} from '@react-native-material/core';
import WordleeeHeader from '../../../../shared/components/wordleeeHeader/WordleeeHeader.component';

type Props = NativeStackScreenProps<HomeStackParamList, 'Nav_Home_Home'>;

const HomeScreen = ({navigation}: Props) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [signUpPressed, setSignUpPressed] = useState<boolean>(false);

  const wordCategories = useSelector(selectWordCategories);
  const currentUser = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  // Handle user state changes
  const handleOnAuthStateChanged = (
    authUser: FirebaseAuthTypes.User | null,
  ) => {
    setUser(authUser);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = subscribeOnAuthStateChanged(handleOnAuthStateChanged);
    dispatch(getWordCategories());
    dispatch(getUsers());

    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getWordCategories());
    dispatch(getUsers());
    user?.email && dispatch(getUser({email: user.email}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleOnPressWordCategory = (wordCategory: WordCategory): void =>
    navigation.navigate(NAV_HOME_WORD, {wordCategory});

  const handleOnPressLeaderboard = (): void =>
    navigation.navigate(NAV_HOME_LEADERBOARD);

  const handleOnPressSignUp = (signUpRequest: SignUpRequest) => {
    dispatch(signUpUser(signUpRequest));
  };

  const handleOnPressSignIn = (signInRequest: SignInRequest) => {
    dispatch(signInUser(signInRequest));
  };

  const handleOnPressCreateAccount = () => {
    setSignUpPressed(true);
  };

  const handleOnPressSignOut = () => {
    dispatch(signOutUser());
  };

  const renderWordCategories = () =>
    wordCategories && wordCategories.length
      ? wordCategories.map((wordCategory: WordCategory) => (
          <Button
            variant="text"
            title={wordCategory.name}
            onPress={() => handleOnPressWordCategory(wordCategory)}
          />
        ))
      : null;

  return (
    <View style={styles.container}>
      {!user ? (
        signUpPressed ? (
          <SignUp
            handleOnPressSignUp={handleOnPressSignUp}
            handleOnPressBack={() => setSignUpPressed(!signUpPressed)}
          />
        ) : (
          <SignIn
            handleOnPressSignIn={handleOnPressSignIn}
            handleOnPressCreateAccount={handleOnPressCreateAccount}
          />
        )
      ) : (
        <>
          <View style={styles.signOutButtonWrapper}>
            <Button
              variant="text"
              title="Sign Out"
              style={styles.signOutButton}
              onPress={handleOnPressSignOut}
            />
          </View>
          <WordleeeHeader currentUser={currentUser}>
            <View style={styles.wordCategoryWrapper}>
              {renderWordCategories()}
            </View>
            <View style={styles.bottomActiveButtonWrapper}>
              <Button
                variant="text"
                title="See your score on leaderboard?"
                onPress={handleOnPressLeaderboard}
              />
            </View>
          </WordleeeHeader>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
