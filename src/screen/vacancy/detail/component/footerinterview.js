import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'assets';
import {Text, Button} from 'component';

import {setMarginTop, setMarginRight} from '../styles';

const FooterInterview = ({
  title,
  subtitle,
  btnleft,
  btnright,
  btnDisabled,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View>
      <Text style={styles.textFooter} fontSize={13}>
        {title}{' '}
        <Text bold style={styles.textFooter} fontSize={13}>
          {subtitle}
        </Text>
      </Text>
      <View style={[styles.wrapperButtonFooter, setMarginTop(20)]}>
        <Button
          disabled={btnDisabled}
          style={[styles.buttonFooter, styles.buttonBorder, setMarginRight(10)]}
          textColor={colors.dwGrey}
          onPress={onPressLeft}>
          {btnleft}
        </Button>
        <Button
          disabled={btnDisabled}
          style={[styles.buttonFooter]}
          onPress={onPressRight}>
          {btnright}
        </Button>
      </View>
    </View>
  );
};

FooterInterview.defaultProps = {
  title: 'Interview date :',
  subtitle: 'DD/MM/YYY',
  btnleft: 'Reject',
  btnright: 'Accept',
  btnDisabled: false,
  onPressLeft: () => console.log('pressed'),
  onPressRight: () => console.log('pressed'),
};

const styles = StyleSheet.create({
  textFooter: {
    color: colors.dwDarkGrey,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  wrapperButtonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  buttonFooter: {
    flex: 1,
  },
  buttonBorder: {
    backgroundColor: colors.dwWhite,
    borderColor: colors.dwWhite,
  },
});

export default FooterInterview;
