// login
import React from 'react';
import {View} from 'react-native';
import styles from './SignIn.styles';
import {useForm, Controller} from 'react-hook-form';
// import TouchableOpacityDebounce from '../../../../shared/components/touchableOpacityDebounce/TouchableOpacityDebounce.component';
import {SignInRequest} from '../../../../types/wordleee.types';
import {TextInput, Button, Text} from '@react-native-material/core';
import colors from '../../../../theme/color';
import WordleeeHeader from '../../../../shared/components/wordleeeHeader/WordleeeHeader.component';

interface Props {
  handleOnPressSignIn: (data: SignInRequest) => void;
  handleOnPressCreateAccount: () => void;
}

const SignIn = ({handleOnPressSignIn, handleOnPressCreateAccount}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <WordleeeHeader>
      <View style={styles.emailTextInputWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 30,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Email"
              variant="standard"
              color={colors.background.darkPurple}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text variant="caption" style={styles.error}>
            Email is Required.
          </Text>
        )}
      </View>
      <View style={styles.passwordTextInputWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 10,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Password"
              variant="standard"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text variant="caption" style={styles.error}>
            Password is Required.
          </Text>
        )}
      </View>
      <View style={styles.loginButtonWrapper}>
        <Button
          variant="contained"
          title="Login"
          style={styles.loginButton}
          onPress={handleSubmit(handleOnPressSignIn)}
        />
      </View>
      <Button
        variant="text"
        title="Not Registered, Create an Account"
        onPress={handleOnPressCreateAccount}
      />
    </WordleeeHeader>
  );
};

export default SignIn;
