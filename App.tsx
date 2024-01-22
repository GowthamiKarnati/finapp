// import React, { useState, useEffect }  from 'react';
// import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import { RootStackParamList } from './types';
// import ProfileScreen from './screens/ProfileScreen';
// import MyLoans from './screens/MyLoans';
// import loans from './screens/Loans';
// import store from './redux/store';
// import { Provider } from 'react-redux';
// const Stack = createStackNavigator<RootStackParamList>();
// const SplashScreen = ({ navigation }) => {
//   const [animating, setAnimating] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimating(false);
//       AsyncStorage.getItem('user_id').then((value) =>
//         navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
//       );
//     }, 1000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('./images/pnf.jpeg')}
//         style={{ width: '60%', resizeMode: 'contain', margin: 30 }}
//       />
//       <ActivityIndicator
//         animating={animating}
//         color="black"
//         size="large"
//         style={styles.activityIndicator}
//       />
//     </View>
//   );
// };
// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen
//             name="Splash"
//             component={SplashScreen}
//             options={{ headerShown: false }}
//           />
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="MyLoans" component={MyLoans} options={{ headerShown: false }} />
//         <Stack.Screen name="loans" component={loans} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   activityIndicator: {
//     alignItems: 'center',
//     height: 80,
//   },
// });
import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from './types';
import ProfileScreen from './screens/ProfileScreen';
import MyLoans from './screens/MyLoans';
import loans from './screens/Loans';
import store from './redux/store';
import { Provider } from 'react-redux';
const Stack = createStackNavigator<RootStackParamList>();

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/pnf.jpeg')}
        style={{ width: '60%', resizeMode: 'contain', margin: 30 }}
      />
      <ActivityIndicator
        animating={true}
        color="black"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyLoans"
            component={MyLoans}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="loans"
            component={loans}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
