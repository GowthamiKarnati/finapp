import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import AppBar from '../ProfileComponents/AppBar';
import MainContent from '../ProfileComponents/MainContent';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type StackParamList = {
  Home: undefined;
  Profile: undefined;
};

type ProfileScreenProps = {
  navigation: NavigationProp<StackParamList>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
      <AppBar navigation={navigation} />
      <MainContent />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f3f4f6'
  }
});
export default ProfileScreen;
