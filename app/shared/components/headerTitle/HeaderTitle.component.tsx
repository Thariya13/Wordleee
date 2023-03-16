import React from 'react';
import {Text} from 'react-native';
import styles from './HeaderTitle.styles';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => (
  <Text style={styles.titleText}>{title}</Text>
);

export default HeaderTitle;
