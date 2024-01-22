// import React, { useEffect } from 'react';
// import { BackHandler, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Appbar from '../HomeComponets.tsx/Appbar';
// import GridContainer from '../HomeComponets.tsx/GridContainer';
// import BottomContainer from '../HomeComponets.tsx/BottomContainer';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const Stack = createStackNavigator();

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   useEffect(() => {
//     const checkUserLoggedIn = async () => {
//       const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
//       if (userLoggedIn !== 'true') {
//         // If the user is not logged in, navigate back to the login screen
//         navigation.replace('Login'); // Replace 'Login' with the actual name of your login screen
//       }
//     };

//     checkUserLoggedIn();

//     // Add event listener for the back button press
//     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//       // Close the app when the back button is pressed on the home screen
//       BackHandler.exitApp();
//       return true; // Prevent default behavior (going back)
//     });

//     return () => {
//       // Remove the event listener when the component is unmounted
//       backHandler.remove();
//     };
//   }, [navigation]);
    
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView stickyHeaderIndices={[0]}>
//       <Appbar navigation={navigation}/>
//       <GridContainer />
//       <BottomContainer />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles=StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor:'#f3f4f6'
//   }
// });

// export default HomeScreen;
import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Appbar from '../HomeComponets.tsx/Appbar';
import GridContainer from '../HomeComponets.tsx/GridContainer';
import BottomContainer from '../HomeComponets.tsx/BottomContainer';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
      if (userLoggedIn !== 'true') {
        // If the user is not logged in, navigate back to the login screen
        navigation.replace('Login'); // Replace 'Login' with the actual name of your login screen
      }
    };

    checkUserLoggedIn();

    // Add event listener for the back button press only when the screen is focused
    const backHandler = isFocused
      ? BackHandler.addEventListener('hardwareBackPress', () => {
          // Close the app when the back button is pressed on the home screen
          BackHandler.exitApp();
          return true; // Prevent default behavior (going back)
        })
      : null;

    return () => {
      // Remove the event listener when the component is unmounted
      backHandler && backHandler.remove();
    };
  }, [isFocused, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Appbar navigation={navigation} />
        <GridContainer />
        <BottomContainer />
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

export default HomeScreen;
