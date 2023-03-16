import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
// import {WordCategory} from '../types/wordleee.types';

export const fetchWordCategories = async (): Promise<
  FirebaseFirestoreTypes.DocumentData[]
> => {
  const wordCategoriesCollection = firestore().collection('wordCategories');

  return (await wordCategoriesCollection.get()).docs.map(doc => doc.data());
};
