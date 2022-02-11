import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'assets';
import {Text, Button} from 'component';

import {setMarginTop} from '../styles';

import useDetailVacancy from '../useDetailVacancy';

const FooterStatus = ({id, title, subtitle, btntitle, btnDisabled}) => {
  const {submitData} = useDetailVacancy(id);

  const [loading, setLoading] = useState(false);

  const actionPress = async () => {
    setLoading(true);
    await submitData('apply');
    setLoading(false);
  };

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
          loading={loading}
          disabled={btnDisabled}
          style={[styles.buttonFooter]}
          onPress={actionPress}>
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
