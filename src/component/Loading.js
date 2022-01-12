import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {colors} from 'assets';

const Loading = ({style}) => (
  <View style={[styles.container, style]}>
    <ActivityIndicator color={colors.meeniblue} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export {Loading};
