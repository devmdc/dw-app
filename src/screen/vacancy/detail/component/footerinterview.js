import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'assets';
import {Text, Button} from 'component';

import {setMarginTop, setMarginRight} from '../styles';

import useDetailVacancy from '../useDetailVacancy';

const FooterInterview = ({
  id,
  title,
  subtitle,
  btnleft,
  btnright,
  btnDisabled,
}) => {
  const {submitData} = useDetailVacancy(id);

  const [loadRight, setLoadRight] = useState(false);
  const [loadLeft, setLoadLeft] = useState(false);

  const actionPress = async isLeft => {
    if (isLeft) {
      setLoadLeft(true);
      await submitData('reject');
      setLoadLeft(false);
    } else {
      setLoadRight(true);
      await submitData('accept');
      setLoadRight(false);
    }
  };

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
          loading={loadLeft}
          disabled={btnDisabled}
          style={[styles.buttonFooter, styles.buttonBorder, setMarginRight(10)]}
          textColor={colors.dwGrey}
          onPress={() => actionPress(true)}>
          {btnleft}
        </Button>
        <Button
          loading={loadRight}
          disabled={btnDisabled}
          style={[styles.buttonFooter]}
          onPress={() => actionPress(false)}>
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
