import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import NumberFormat from 'react-number-format';
import {colors, images} from 'assets';
import {Text} from 'component';

const CardNotification = ({
  style,
  id,
  name,
  pos,
  image,
  location,
  workingDate,
  fee,
  type,
  interviewDate,
  status,
  statusBC,
  onPress,
  onEdit,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.girdContent, style]}>
        <Image source={image} style={styles.imgProfile} resizeMode={'cover'} />
        <View style={styles.infoContainer}>
          <Text bold style={styles.txtName}>
            {name}
          </Text>
          <Text style={styles.txtPos}>{pos}</Text>
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
          {interviewDate && (
            <Text semibold style={styles.txtInterview}>
              {`Interview Date.\n${interviewDate}`}
            </Text>
          )}
        </View>
        <View style={[styles.wrapperStatus, {backgroundColor: statusBC}]}>
          <Text medium style={styles.txtStatus}>
            {status}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

CardNotification.defaultProps = {
  id: 1,
  name: 'Company Name',
  pos: 'Job Position',
  location: 'Location',
  workingDate: 'Working Date Range',
  fee: 1000000,
  type: 'bulan',
  image: images.profile,
  status: 'On Going',
  statusBC: colors.dwBlueTwitter,
  onPress: () => console.log('Card Pressed'),
  onEdit: () => console.log('Edit Pressed'),
};

const styles = StyleSheet.create({
  girdContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: colors.dwWhite,
    borderRadius: 10,
    marginVertical: 5,
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
  wrapperStatus: {
    width: 100,
    height: 25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperText: {
    alignItems: 'center',
    marginTop: 3,
    flexDirection: 'row',
  },
  infoContainer: {
    flexDirection: 'column',
    marginHorizontal: 12,
    flex: 1,
  },
  txtName: {
    fontSize: 15,
    color: colors.dwBlue,
  },
  txtPos: {
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
  txtInterview: {
    fontSize: 11,
    color: colors.dwDarkGrey,
    marginTop: 5,
  },
  txtStatus: {
    fontSize: 11,
    color: colors.dwWhite,
    textAlign: 'center',
  },
  imgIcon: {
    width: 9,
    height: 9,
    marginRight: 3,
  },
});

export default CardNotification;
