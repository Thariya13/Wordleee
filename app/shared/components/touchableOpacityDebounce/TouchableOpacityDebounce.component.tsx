import {debounce as _debounce} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  AccessibilityRole,
  AccessibilityState,
  TouchableOpacity,
} from 'react-native';

interface Props {
  children?: any;
  testID?: string;
  disabled?: boolean;
  activeOpacity?: number;
  title?: string;
  hitSlop?: any;
  accessible?: boolean;
  accessibilityRole?: AccessibilityRole | undefined;
  accessibilityState?: AccessibilityState | undefined;
  accessibilityLabel?: string | undefined;
  style?: any;
  debounceTime?: number;
  onPress: (e?: any) => void;
}

const TouchableOpacityDebounce = ({onPress, children, ...props}: Props) => {
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    if (props.debounceTime) {
      setDelay(props.debounceTime);
    }
  }, [props.debounceTime]);

  const debounce_fun = _debounce(onPress, delay, {
    leading: true,
    trailing: false,
  });

  const handlePress = () => {
    debounce_fun(props.debounceTime);
  };

  return (
    <TouchableOpacity {...props} onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableOpacityDebounce;
