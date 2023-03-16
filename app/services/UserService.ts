import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {SignUpRequest} from '../types/wordleee.types';

export const fetchUsers = async (): Promise<
  FirebaseFirestoreTypes.DocumentData[]
> => {
  const usersCollection = firestore().collection('users');

  return (await usersCollection.get()).docs.map(doc => doc.data());
};

export const fetchUser = async (
  email: string,
): Promise<FirebaseFirestoreTypes.DocumentData | undefined> => {
  return (await firestore().doc(`users/${email.toLowerCase()}`).get()).data();
};

export const updateUserDetails = ({
  firstName,
  lastName,
  email,
}: SignUpRequest): Promise<void> => {
  return firestore()
    .doc(`users/${email.toLowerCase()}`)
    .set({firstName, lastName, email});
};

export const updateUserPoints = (
  email: string,
  points: number,
): Promise<void> => {
  return firestore()
    .doc(`users/${email.toLowerCase()}`)
    .set({points}, {merge: true});
};
