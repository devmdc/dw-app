import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'assets';
import {Text, Button} from 'component';

import {setMarginTop} from '../styles';

const FooterStatus = ({title, subtitle, btntitle, btnDisabled, onPress}) => {
  return (
    <View>
      <Text style={styles.textFooter} fontSize={13}>
        {title}
        {subtitle && (
          <Text bold style={styles.textFooter} fontSize={13}>
            {' '}
            {subtitle}
          </Text>
        )}
      </Text>
      <View style={[styles.wrapperButtonFooter, setMarginTop(20)]}>
        <Button
          disabled={btnDisabled}
          style={[styles.buttonFooter]}
          onPress={onPress}>
          {btntitle}
        </Button>
      </View>
    </View>
  );
};

FooterStatus.defaultProps = {
  title: 'Title Footer',
  btntitle: 'Footer',
  btnDisabled: false,
  onPress: () => console.log('pressed'),
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
});

export default FooterStatus;
