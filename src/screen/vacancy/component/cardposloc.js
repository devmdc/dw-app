import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {colors} from 'assets';
import {Text} from 'component';

const CardJobPreference = ({name, onPress}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress();
      }}>
      <View style={styles.container}>
        <Text
          style={styles.textName}
          color={colors.dwDarkGrey}
          fontSize={15}
          semibold>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

CardJobPreference.defaultProps = {
  name: 'Customer Service',
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.dwWhite,
    borderRadius: 5,
  },
  textName: {
    flex: 1,
    marginRight: 10,
  },
  iconCheck: {
    width: 20,
    height: 20,
  },
});

export default CardJobPreference;
