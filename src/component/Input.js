import React from 'react';
import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import {fonts, colors} from 'assets';

const Input = ({
  title,
  editable = true,
  placeholder,
  placeholderColor = colors.white,
  style,
  textStyle,
  password,
  rightIcon,
  leftIcon,
  value,
  multiline,
  isRightLoading,
  pointerEvents = 'auto',
  numberOfLines = 1,
  keyboardType = 'default',
  returnKeyType,
  onChangeTextValue = () => {},
  onEndEditing = () => {},
  onSubmitEditing = () => {},
  ...props
}) => (
  <View style={[styles.container, style]} {...props}>
    {leftIcon && leftIcon}

    <TextInput
      testID={'inputComp'}
      keyboardType={keyboardType}
      autoCapitalize="none"
      editable={editable}
      value={value}
      multiline={multiline}
      numberOfLines={numberOfLines}
      secureTextEntry={password}
      placeholder={placeholder}
      returnKeyType={returnKeyType}
      placeholderTextColor={placeholderColor}
      pointerEvents={pointerEvents}
      style={[styles.input, !editable ? styles.disabled : {}, textStyle]}
      onChangeText={text => onChangeTextValue(text)}
      onEndEditing={event => onEndEditing(event.nativeEvent.text)}
      onSubmitEditing={event => onSubmitEditing(event.nativeEvent.text)}
    />

    {isRightLoading && <ActivityIndicator color={colors.silver} />}

    {rightIcon && rightIcon}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.dwLightGrey,
    paddingHorizontal: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontFamily: fonts.regular,
    fontSize: 14,
    flex: 1,
    height: 45,
    justifyContent: 'center',
    textAlignVertical: 'center',
    color: colors.black,
  },
  disabled: {
    color: colors.disabled,
  },
});

export {Input};
