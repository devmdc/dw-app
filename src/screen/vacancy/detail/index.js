import React, {useEffect} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ViewMoreText from 'react-native-view-more-text';
import NumberFormat from 'react-number-format';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Loading, Text} from 'component';
import {colors, images} from 'assets';
import {formatDate} from 'utils';
import {getColor, getTitle} from 'constant';

import styles, {setMarginTop} from './styles';

import useDetailVacancy from './useDetailVacancy';

const DetailVacancyScreen = ({route, navigation}) => {
  const {id, uri} = route.params || {};

  const {isFetching} = useSelector(state => ({
    isFetching: state.vacancy.isFetching,
  }));

  const {loading, data, getData, getFooter} = useDetailVacancy(id);

  useEffect(() => {
    if (isFetching) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container color={'transparent'}>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header isBack logo />
      </DropShadow>

      {loading && <Loading />}
      {!loading && (
        <>
          <View
            style={[
              styles.wrapperStatus,
              {backgroundColor: getColor(data.applicant_status)},
            ]}>
            <Text style={styles.textStatus}>
              {getTitle(data.applicant_status)}
            </Text>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            style={styles.container}
            showsVerticalScrollIndicator={false}>
            <View style={[styles.wrapperSection, setMarginTop(56)]}>
              <DropShadow style={[styles.shadowImage]}>
                <View style={styles.wrapperProfile}>
                  <Image
                    source={{uri: uri}}
                    style={styles.imageProfile}
                    resizeMode={'cover'}
                  />
                </View>
              </DropShadow>
              <Text
                semibold
                fontSize={15}
                style={[styles.textTitle, setMarginTop(50)]}>
                {data.job_title}
              </Text>
              <Text
                semibold
                fontSize={11}
                style={[
                  styles.textTitle,
                  setMarginTop(5),
                  {color: colors.dwBlue},
                ]}>
                {data.job_position_name}
              </Text>
              <Text
                bold
                fontSize={13}
                style={[setMarginTop(20), {color: colors.dwMediumBlue}]}>
                Basic Info
              </Text>
              <View style={[styles.line, setMarginTop(5)]} />
              <View style={[{flexDirection: 'row'}, setMarginTop(15)]}>
                <Image
                  source={images.vacanJob}
                  style={styles.imageVacan}
                  resizeMode={'contain'}
                />
                <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  {data.job_position_name}
                </Text>
              </View>
              <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
                <Image
                  source={images.vacanPerson}
                  style={styles.imageVacan}
                  resizeMode={'contain'}
                />
                <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  {data.quota} person
                </Text>
              </View>
              <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
                <Image
                  source={images.vacanLocation}
                  style={styles.imageVacan}
                  resizeMode={'contain'}
                />
                <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  {data.city_name}
                </Text>
              </View>
              <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
                <Image
                  source={images.vacanGender}
                  style={styles.imageVacan}
                  resizeMode={'contain'}
                />
                <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  {data.gender}
                </Text>
              </View>
              <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
                <Image
                  source={images.vacanProfile}
                  style={styles.imageVacan}
                  resizeMode={'contain'}
                />
                <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  {data.age_start} - {data.age_end} Tahun
                </Text>
              </View>
            </View>

            <View style={[styles.wrapperSection, setMarginTop(16)]}>
              <Text bold fontSize={13} style={[{color: colors.dwWhatsapp}]}>
                Work Info
              </Text>
              <View style={[styles.line, setMarginTop(5)]} />
              <View style={[setMarginTop(10)]}>
                <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  Work Date
                </Text>
                <Text
                  medium
                  fontSize={11}
                  style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
                  {formatDate(data.date_start, true)} -{' '}
                  {formatDate(data.date_end, true)}
                </Text>
                <View style={[styles.line, setMarginTop(5)]} />
              </View>
              <View style={[setMarginTop(10)]}>
                <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  Day-off
                </Text>
                <Text
                  medium
                  fontSize={11}
                  style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
                  Lorem Ipsum
                </Text>
                <View style={[styles.line, setMarginTop(5)]} />
              </View>
              <View style={[setMarginTop(10)]}>
                <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  Salary
                </Text>
                <NumberFormat
                  value={data.payment}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'IDR '}
                  renderText={value => (
                    <Text
                      medium
                      fontSize={11}
                      style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
                      {`${value} / ${data.period}`}
                    </Text>
                  )}
                />

                <View style={[styles.line, setMarginTop(5)]} />
              </View>
              <View style={[setMarginTop(10)]}>
                <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
                  Work location
                </Text>
                <Text
                  medium
                  fontSize={11}
                  style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
                  {data.location}
                </Text>
                <View style={[styles.line, setMarginTop(5)]} />
              </View>
            </View>

            <View style={[styles.wrapperSection, setMarginTop(16)]}>
              <Text bold fontSize={13} style={[{color: colors.dwFreshOrange}]}>
                Description
              </Text>
              <View style={[styles.line, setMarginTop(5)]} />
              <ViewMoreText
                textStyle={[{color: colors.dwDarkGrey}, setMarginTop(10)]}
                numberOfLines={3}
                renderViewMore={onPress => (
                  <Text
                    style={setMarginTop(7)}
                    fontSize={11}
                    color={colors.dwLightBlue}
                    onPress={onPress}>
                    View more
                  </Text>
                )}
                renderViewLess={onPress => (
                  <Text
                    style={setMarginTop(7)}
                    fontSize={11}
                    color={colors.dwLightBlue}
                    onPress={onPress}>
                    View less
                  </Text>
                )}>
                <Text medium fontSize={11}>
                  {data.description}
                </Text>
              </ViewMoreText>
            </View>
          </ScrollView>

          <DropShadow style={[styles.shadowFooter, {zIndex: 4}]}>
            <View style={styles.wrapperFooter}>
              {getFooter(
                data.applicant_status,
                data.interview_date,
                data.rating_point,
                data.rating_text,
              )}
            </View>
          </DropShadow>
        </>
      )}
    </Container>
  );
};

export default DetailVacancyScreen;
