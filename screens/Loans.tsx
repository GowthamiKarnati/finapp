// import { View, Text, ScrollView, StyleSheet } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import AppBar from '../LoanComponents/AppBar'
// import MainContent from '../LoanComponents/MainContent'
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../types'

// type LoansScreenNavigationProp = StackNavigationProp<RootStackParamList, 'loans'>;

// const Loans = () => {
//   const navigation = useNavigation<LoansScreenNavigationProp>();
//   return (
//     <SafeAreaView style={styles.container}>
//         <ScrollView stickyHeaderIndices={[0]}>
//         <AppBar navigation={navigation} />
//         <MainContent />
//         </ScrollView>
//     </SafeAreaView>
//   )
// }
// const styles=StyleSheet.create({
//     container:{
//       flex: 1,
//       backgroundColor:'#f3f4f6'
//     }
//   });
// export default Loans
// Loans.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../LoanComponents/AppBar';
import MainContent from '../LoanComponents/MainContent';
import { useNavigation } from '@react-navigation/native';
import { LoansScreenNavigationProp } from '../types';

const Loans = () => {
  const navigation = useNavigation<LoansScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <AppBar navigation={navigation} />
        <MainContent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
});

export default Loans;
