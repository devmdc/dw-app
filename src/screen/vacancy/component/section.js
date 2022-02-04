import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from 'assets';
import {Text} from 'component';

import {setMarginTop, setMarginRight, setFlex} from '../styles';

const Section = ({title, more, onPress, titleColor, style}) => {
  return (
    <>
      <View style={[styles.sectionWrapper, style]}>
        <Text bold style={[{color: titleColor}, setFlex(1)]} fontSize={15}>
          {title}
        </Text>
        {more && (
          <TouchableOpacity onPress={onPress}>
            <Text
              style={[{color: colors.dwGrey}, setMarginRight(20)]}
              fontSize={11}>
              {more}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={[setMarginTop(10), styles.line]} />
    </>
  );
};

Section.defaultProps = {
  title: 'Recent Vacancies',
  more: 'See More',
  titleColor: colors.dwMainColor,
  onPress: () => {},
};

const styles = StyleSheet.create({
  sectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.dwLightGrey,
  },
});

export default Section;
