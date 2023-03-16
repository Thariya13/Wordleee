// login
import React from 'react';
import {View} from 'react-native';
import styles from './SignUp.styles';
import {useForm, Controller} from 'react-hook-form';
import {SignUpRequest} from '../../../../types/wordleee.types';
import {TextInput, Text, Button} from '@react-native-material/core';
import colors from '../../../../theme/color';
import WordleeeHeader from '../../../../shared/components/wordleeeHeader/WordleeeHeader.component';

interface Props {
  handleOnPressSignUp: (data: SignUpRequest) => void;
  handleOnPressBack: () => void;
}

const SignIn = ({handleOnPressSignUp, handleOnPressBack}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  return (
    <WordleeeHeader handleOnPressBack={handleOnPressBack}>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="First Name"
            variant="standard"
            color={colors.background.darkPurple}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && (
        <Text variant="caption" style={styles.error}>
          First Name is Required.
        </Text>
      )}
      <View style={styles.controllerWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 30,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Last Name"
              variant="standard"
              color={colors.background.darkPurple}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
        />
      </View>
      {errors.lastName && (
        <Text variant="caption" style={styles.error}>
          Last Name is Required.
        </Text>
      )}
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
      <View style={styles.controllerWrapper}>
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
      </View>
      {errors.password && (
        <Text variant="caption" style={styles.error}>
          Password is Required.
        </Text>
      )}
      <View style={styles.signUpButtonWrapper}>
        <Button
          variant="contained"
          title="Sign Up"
          style={styles.signUpButton}
          onPress={handleSubmit(handleOnPressSignUp)}
        />
      </View>
    </WordleeeHeader>
  );
};

export default SignIn;
