import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';
import {colors, images} from 'assets';
import {Text} from 'component';

const CardJobPreference = ({name, checked, onPress}) => {
  const [check, setCheck] = useState(checked);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress(!check);
        setCheck(!check);
      }}>
      <View style={styles.container}>
        <Text
          style={styles.textName}
          color={colors.dwDarkGrey}
          fontSize={15}
          semibold>
          {name}
        </Text>
        <Image
          resizeMode={'cover'}
          source={check ? images.check : images.uncheck}
          style={styles.iconCheck}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

CardJobPreference.defaultProps = {
  name: 'Customer Service',
  checked: false,
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
