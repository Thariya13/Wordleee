import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SignInRequest, SignUpRequest} from '../types/wordleee.types';

export const subscribeOnAuthStateChanged = (
  callback: (authUser: FirebaseAuthTypes.User | null) => void,
) => {
  return auth().onAuthStateChanged(callback);
};

export const signUpAuthUser = async ({
  email,
  password,
}: SignUpRequest): Promise<FirebaseAuthTypes.User> => {
  return (await auth().createUserWithEmailAndPassword(email, password)).user;
};

export const signInAuthUser = async ({
  email,
  password,
}: SignInRequest): Promise<FirebaseAuthTypes.User> => {
  return (await auth().signInWithEmailAndPassword(email, password)).user;
};

export const signOutAuthUser = async (): Promise<void> => {
  await auth().signOut();
};
