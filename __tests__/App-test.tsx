/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../app/App';
import HeaderTitle from '../app/shared/components/headerTitle/HeaderTitle.component';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import WordleeeHeader from '../app/shared/components/wordleeeHeader/WordleeeHeader.component';
import {Text} from 'react-native';
import WordleeeButton from '../app/shared/components/wordleeeButton/WordleeeButton.component';
import TouchableOpacityDebounce from '../app/shared/components/touchableOpacityDebounce/TouchableOpacityDebounce.component';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('Header title renders correctly', () => {
  const tree = renderer.create(<HeaderTitle title="Home Screen" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Wordlee Header renders correctly', () => {
  const tree = renderer
    .create(
      <WordleeeHeader>
        <Text>Hello World</Text>
      </WordleeeHeader>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Wordlee Button renders correctly', () => {
  const tree = renderer
    .create(
      <WordleeeButton
        title="Hello"
        activeButtonStyle={{backgroundColor: 'red'}}
        handleOnPress={() => console.log('Hello World')}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Touchable Opacity Debounce renders correctly', () => {
  const tree = renderer
    .create(
      <TouchableOpacityDebounce onPress={() => console.log('Hello World')}>
        <Text>Hello World</Text>
      </TouchableOpacityDebounce>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
