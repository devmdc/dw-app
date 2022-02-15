import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Text, Header, Loading} from 'component';
import {formatDate} from 'utils';
import {images} from 'assets';

import ExperienceCard from './component/experiencecard';

import styles, {setMarginTop} from './styles';

import useExperience from './useExperience';

const ExperienceScreen = ({navigation}) => {
  const {dataJob, loading, refreshData, refreshLoad} = useExperience();

  const renderItem = ({item, index}) => {
    return (
      <ExperienceCard
        id={item.id}
        name={item.company_name}
        pos={item.job_position_name}
        image={{
          uri: item.image,
        }}
        location={item.city_name}
        workingDate={`${formatDate(item.date_start, true)} - ${formatDate(
          item.date_end,
          true,
        )}`}
        fee={item.payment}
        type={item.period}
        isManual={item.type === 'Manual'}
        onEdit={() =>
          navigation.navigate('AddExperience', {
            id: item.id,
            name: item.company_name,
            pos: {id: item.job_position_id, name: item.job_position_name},
            city: {id: item.city_id, name: item.city_name},
            startDate: item.date_start,
            endDate: item.date_end,
            fee: item.payment.toString(),
            period: item.period,
          })
        }
      />
    );
  };

  return (
    <Container>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.header}>
        <Text bold style={styles.textInfo} fontSize={17}>
          My Experience
        </Text>
        <View style={[setMarginTop(20), styles.line]} />
      </View>
      {loading && <Loading />}
      {!loading && dataJob && dataJob.length > 0 && (
        <FlatList
          data={dataJob}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          style={styles.list}
          contentContainerStyle={styles.wrapperContent}
          refreshing={refreshLoad}
          onRefresh={refreshData}
        />
      )}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddExperience', {name: ''})}>
          <Image
            source={images.add}
            style={styles.imgAdd}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ExperienceScreen;
