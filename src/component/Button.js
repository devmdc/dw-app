import React from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Image,
  ActivityIndicator,
} from 'react-native';
import {colors} from 'assets';
import {Text} from './Text';

const Button = ({
  children = 'Button',
  disabled = false,
  loading = false,
  color = colors.dwMainColor,
  textColor = 'white',
  bordered = false,
  style = {},
  textSize = 14,
  textUppercase = true,
  icon,
  onPress = () => {},
}) => {
  const TouchablePlatformSpecific =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  const currentColor = disabled ? colors.silver : color;

  const stylesBtn = [
    styles.container,
    !bordered ? {backgroundColor: currentColor} : {},
    {borderColor: currentColor},
    style,
  ];

  const touchableStyle = Platform.OS === 'ios' ? stylesBtn : {};

  return (
    <TouchablePlatformSpecific
      onPress={() => {
        if (!disabled && !loading) {
          onPress();
        }
      }}
      style={touchableStyle}>
      <View style={Platform.OS === 'android' ? stylesBtn : {}}>
        {!loading && (
          <View style={styles.wrapperChild}>
            {icon && (
              <Image source={icon} style={styles.icon} resizeMode={'contain'} />
            )}

            <Text
              bold
              style={[
                styles.text,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  fontSize: textSize,
                  color: bordered ? currentColor : textColor,
                  textTransform: textUppercase ? 'uppercase' : 'none',
                },
              ]}>
              {children}
            </Text>
          </View>
        )}
        {loading && <ActivityIndicator color={bordered ? color : textColor} />}
      </View>
    </TouchablePlatformSpecific>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    height: 44,
    borderRadius: 6,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 14,
  },
  wrapperChild: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export {Button};
