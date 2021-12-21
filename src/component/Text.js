import React from 'react';
import {Text as TextView} from 'react-native';
import {fonts, colors} from 'assets';

const Text = ({
  children,
  style,
  maxLine,
  fontSize = 14,
  color = colors.dwDarkGrey,
  regular = true,
  medium = false,
  bold = false,
  semibold = false,
  arabic = false,
  ...props
}) => (
  <TextView
    {...props}
    numberOfLines={maxLine}
    style={[
      {fontSize: fontSize, color: color},
      regular && {fontFamily: fonts.regular},
      medium && {fontFamily: fonts.medium},
      bold && {fontFamily: fonts.bold},
      semibold && {fontFamily: fonts.semibold},
      arabic && {fontFamily: fonts.arabic},
      style,
    ]}>
    {children}
  </TextView>
);

export {Text};
