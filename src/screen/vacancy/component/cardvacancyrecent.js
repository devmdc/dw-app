import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Image} from 'react-native';
import NumberFormat from 'react-number-format';
import {colors, images} from 'assets';
import {Text} from 'component';

const CardVacancyRecent = ({
  style,
  id,
  name,
  pos,
  image,
  location,
  workingDate,
  fee,
  type,
  onPress,
  onEdit,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.girdContent, style]}>
        <Image source={image} style={styles.imgProfile} resizeMode={'cover'} />
        <View style={styles.infoContainer}>
          <Text bold maxLine={1} style={styles.txtPos}>
            {pos}
          </Text>
          <Text maxLine={1} style={styles.txtName}>
            {name}
          </Text>
          <View style={styles.wrapperText}>
            <Image
              source={images.location}
              style={styles.imgIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.txtLocation}>{location}</Text>
          </View>
          <View style={styles.wrapperText}>
            <Image
              source={images.time}
              style={styles.imgIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.txtWorkingDate}>{`${workingDate}`}</Text>
          </View>
          <NumberFormat
            value={fee}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'IDR '}
            renderText={value => (
              <Text style={styles.txtFee}>{`${value} / ${type}`}</Text>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

CardVacancyRecent.defaultProps = {
  id: 1,
  name: 'Company Name',
  pos: 'Job Position',
  location: 'Location',
  workingDate: 'Working Date Range',
  fee: 1000000,
  type: 'bulan',
  image: images.profile,
  onPress: () => console.log('Card Pressed'),
  onEdit: () => console.log('Edit Pressed'),
};

const styles = StyleSheet.create({
  girdContent: {
    width: 145,
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: colors.dwWhite,
    borderRadius: 10,
    margin: 5,
  },
  imgProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imgEdit: {
    width: 21,
    height: 21,
  },
  imgLocation: {
    width: 8,
    height: 8,
    marginRight: 6,
  },
  wrapperText: {
    alignItems: 'center',
    marginTop: 3,
    flexDirection: 'row',
  },
  infoContainer: {
    flexDirection: 'column',
    marginTop: 10,
    // marginHorizontal: 12,
    flex: 1,
  },
  txtPos: {
    fontSize: 15,
    color: colors.dwBlue,
  },
  txtName: {
    fontSize: 11,
    color: colors.dwGrey,
  },
  txtLocation: {
    flex: 1,
    fontSize: 9,
    color: colors.dwGrey,
  },
  txtWorkingDate: {
    fontSize: 9,
    color: colors.dwWhatsapp,
  },
  txtFee: {
    fontSize: 11,
    color: colors.dwLightBlue,
    marginTop: 3,
  },
  imgIcon: {
    width: 9,
    height: 9,
    marginRight: 3,
  },
});

export default CardVacancyRecent;
