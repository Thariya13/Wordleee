import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import styles from './Leaderboard.styles';
import {useDispatch, useSelector} from 'react-redux';
import {selectUsers} from '../../../../store/home/selectors/Home.selectors';
import WordleeeHeader from '../../../../shared/components/wordleeeHeader/WordleeeHeader.component';
import {Avatar, ListItem} from '@react-native-material/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../../types/navigation.types';
import {getUsers} from '../../../../store/home/actions/Home.action';

type Props = NativeStackScreenProps<HomeStackParamList, 'Nav_Home_Leaderboard'>;

const LeaderboardScreen = ({navigation}: Props) => {
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnPressBack = () => {
    navigation.goBack();
  };

  const renderUserItem = ({item}) => (
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar
          image={{
            uri: `https://mui.com/static/images/avatar/${Math.floor(
              Math.random() * 10,
            )}.jpg`,
          }}
        />
      }
      title={`${item.firstName} ${item.lastName}`}
      secondaryText={`earned ${item.points || 0} points`}
    />
  );

  return (
    <WordleeeHeader handleOnPressBack={handleOnPressBack}>
      <FlatList data={users} renderItem={renderUserItem} />
    </WordleeeHeader>
  );
};

export default LeaderboardScreen;
