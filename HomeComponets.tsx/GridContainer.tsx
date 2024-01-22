// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import React from 'react'
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// const GridContainer = () => {
//     const navigation = useNavigation();
//     const navigateToMyLoans = () => {
//         navigation.navigate('MyLoans'); 
//       };
//       const navigateToLoans = () =>{
//         navigation.navigate('loans');
//       }
//   return (
//     <View style={styles.container}>
//     <TouchableOpacity onPress={navigateToMyLoans}>
//       <View style={styles.gridItem}>     
          
//           <FontAwesomeIcon name="file-text" color="white" style={[styles.textstyle, styles.icon]} />

//           <Text style={styles.textstyle}>Apply for Loan</Text> 
//       </View>
//       </TouchableOpacity>
//       <View style={[styles.gridItem,styles.truck ]}>       
//         <FontAwesomeIcon name="truck" color="white" style={[styles.textstyle, styles.icon]} />
//         <Text style={styles.textstyle}>My Trucks</Text> 
//       </View>
//       <TouchableOpacity onPress={navigateToLoans}>
//       <View style={[styles.gridItem, styles.loan]}>     
//           <FontAwesomeIcon name="money" color="white" style={[styles.textstyle, styles.icon]} />
//           <Text style={styles.textstyle}>My Loan</Text> 
//       </View>
//       </TouchableOpacity>
//       <View style={[styles.gridItem, styles.insurance]}>     
          
//       <FontAwesomeIcon name="shield" color="white" style={[styles.textstyle, styles.icon]} />
//           <Text style={styles.textstyle}>Insurance</Text> 
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     container:{
//         marginTop:45,
//         marginHorizontal:15,
//         marginBottom:20,
//     },
//     gridItem:{
//         height:'auto',
//         width: 'auto',
//         backgroundColor:'#3c82f6',
//         alignItems:'center',
//         padding:16,
//         marginBottom: 16,
//         borderRadius:8,
//     },
//     textstyle:{
//         fontSize:20,
//         fontWeight:'bold',
//         color:'white',
//     },
//     icon: {
//         marginBottom:10, 
//         fontSize:28
//       },
//     truck:{
//         backgroundColor:'#12b981'
//     },
//     loan:{
//         backgroundColor:'#f59e0c'
//     },
//     insurance:{
//         backgroundColor:'#6466f1'
//     }
// });
// export default GridContainer
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const GridContainer = () => {
  const navigation = useNavigation();
  const mobileNumber = useSelector((state) => state.user.mobileNumber);
  const navigateToMyLoans = () => {
    navigation.navigate('MyLoans');
  };

  const navigateToLoans = () => {
    navigation.navigate('loans');
  };

  return (
    <View style={styles.container}>
      {/* <Text >Mobile Number: {mobileNumber}</Text> */}

      <TouchableOpacity onPress={navigateToMyLoans}>
        <View style={styles.gridItem}>
          <FontAwesomeIcon name="file-text" color="white" style={[styles.textstyle, styles.icon]} />
          <Text style={styles.textstyle}>Apply for Loan</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.gridItem, styles.truck]}>
        <FontAwesomeIcon name="truck" color="white" style={[styles.textstyle, styles.icon]} />
        <Text style={styles.textstyle}>My Trucks</Text>
      </View>
      <TouchableOpacity onPress={navigateToLoans}>
        <View style={[styles.gridItem, styles.loan]}>
          <FontAwesomeIcon name="money" color="white" style={[styles.textstyle, styles.icon]} />
          <Text style={styles.textstyle}>My Loans</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.gridItem, styles.insurance]}>
        <FontAwesomeIcon name="shield" color="white" style={[styles.textstyle, styles.icon]} />
        <Text style={styles.textstyle}>Insurance</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  gridItem: {
    height: 'auto',
    width: 'auto',
    backgroundColor: '#3c82f6',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginBottom: 10,
    fontSize: 28,
  },
  truck: {
    backgroundColor: '#12b981',
  },
  loan: {
    backgroundColor: '#f59e0c',
  },
  insurance: {
    backgroundColor: '#6466f1',
  },
});

export default GridContainer;
