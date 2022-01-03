import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from './Text';
import {colors, images} from 'assets';

const Header = ({
  title = '',
  isBack = false,
  tintColor = '#ADB7C1',
  logo = true,
  titleIsActive = true,
  rightIcon,
  style,
  link = '',
  bgColor = colors.dwWhite,
}) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, style, {backgroundColor: bgColor}]}>
      {isBack && (
        <TouchableWithoutFeedback onPress={goBack}>
          <Image
            style={[styles.icoBack]}
            source={images.back}
            resizeMode={'contain'}
          />
        </TouchableWithoutFeedback>
      )}
      <View style={styles.centerContainer}>
        {logo && (
          <Image
            style={styles.icoHeader}
            source={images.logoHeader}
            resizeMode={'contain'}
          />
        )}
        {titleIsActive && <Text style={styles.textCenter}> {title} </Text>}
      </View>

      <View style={styles.wrapperRightView}>
        {rightIcon && (
          <View style={styles.rightView}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate(link)}>
              {rightIcon}
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.pure,
  },
  title: {
    fontSize: 20,
    color: colors.gold,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icoHeader: {
    width: 160,
    height: 64,
    marginTop: 10,
  },
  icoBack: {
    width: 24,
    height: 24,
  },
  wrapperRightView: {
    position: 'absolute',
    right: 20,
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textCenter: {
    fontSize: 17,
    color: colors.mint,
    fontWeight: '600',
  },
});

export {Header};
