import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../MyloanComponents/AppBar'
import ApplyForm from '../MyloanComponents/ApplyForm'
import { useNavigation } from '@react-navigation/native';

const MyLoans = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView stickyHeaderIndices={[0]}>
      <AppBar navigation={navigation} />
      <ApplyForm />
    </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#f3f4f6'
    }
  });
export default MyLoans;
