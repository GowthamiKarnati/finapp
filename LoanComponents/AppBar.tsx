// import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import React from 'react';
// const AppBar = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <Icon name="arrow-left" size={23} color="white" />
//         <View style={styles.titleContainer}>
//           <Text style={styles.appBarTitle}>my debts</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row', 
//     height: 60,
//     backgroundColor: '#12b981',
//     padding: 16,
//     alignItems: 'center', 
   
//   },
//   appBarTitle: {
//     fontSize: 23,
//     color: 'white',
//     fontWeight: '500',
    
//   },
//   titleContainer: {
//     flex: 1,
//     alignItems:'center'  
//   },
// });

// export default AppBar;
// import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// const AppBar = () => {
//   const navigation = useNavigation();

//   const navigateToProfileScreen = () => {
//     navigation.navigate('Home');
//   };

//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={navigateToProfileScreen}>
//           <Icon name="arrow-left" size={23} color="white" />
//         </TouchableOpacity>
//         <View style={styles.titleContainer}>
//           <Text style={styles.appBarTitle}>Profile</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     height: 60,
//     backgroundColor: '#12b981',
//     padding: 16,
//     alignItems: 'center',
//   },
//   appBarTitle: {
//     fontSize: 23,
//     color: 'white',
//     fontWeight: '600',
//   },
//   titleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default AppBar;
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type StackParamList = {
  Home: undefined; // Add other screen names and their params if needed
};

type AppBarProps = {
  navigation: NavigationProp<StackParamList>;
};

const AppBar: React.FC<AppBarProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-left" size={23} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.appBarTitle}>My debts</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#12b981',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    fontSize: 23,
    color: 'white',
    fontWeight: '600',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AppBar;
