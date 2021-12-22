import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Config from 'react-native-config';

import {colors} from 'assets';

const isDev = Config.ISDEV === 'true';

const Container = ({
  children,
  style,
  color = colors.pure,
  statusBarColor = colors.pure,
  padding = 0,
  needTouchOutside = false,
}) => {
  const content = () => {
    return (
      <View
        style={[
          styles.container,
          {padding: padding, backgroundColor: color},
          style,
        ]}>
        {children}
      </View>
    );
  };

  return (
    <>
      <View
        style={[
          styles.statusBar,
          {backgroundColor: isDev ? colors.yellow : statusBarColor},
        ]}>
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor={isDev ? colors.yellow : statusBarColor}
        />
      </View>

      {needTouchOutside && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View
            style={[
              styles.container,
              {padding: padding, backgroundColor: color},
              style,
            ]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      )}

      {!needTouchOutside && content()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: getStatusBarHeight(true),
  },
});

export {Container};
