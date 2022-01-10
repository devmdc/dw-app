import React from 'react';
import {View, FlatList} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Text, Header} from 'component';
import ExperienceCard from './component/experiencecard';

import styles, {setMarginTop} from './styles';

const ExperienceScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return <ExperienceCard />;
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
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
        style={styles.list}
        contentContainerStyle={styles.wrapperContent}
      />
    </Container>
  );
};

export default ExperienceScreen;
