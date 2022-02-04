import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import {colors} from 'assets';
import {Text} from 'component';

import {setMarginTop} from '../styles';

const FooterResult = ({title, star, subtitle}) => {
  return (
    <View>
      <Text bold style={styles.textFooter} fontSize={13}>
        {title}
      </Text>
      {star && (
        <View style={setMarginTop(20)}>
          <Rating
            readonly
            type={'custom'}
            ratingCount={5}
            minValue={0}
            imageSize={20}
            startingValue={star}
            ratingColor={colors.dwBrightYellow}
            ratingBackgroundColor={colors.dwBrightYellow}
          />
        </View>
      )}
      <View style={[styles.wrapperButtonFooter, setMarginTop(20)]}>
        <Text style={[styles.textFooter, {textAlign: 'left'}]} fontSize={13}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

FooterResult.defaultProps = {
  title: 'Upcoming',
  star: 5,
  subtitle:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
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

export default FooterResult;
