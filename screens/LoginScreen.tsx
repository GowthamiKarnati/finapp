// LoginScreen.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Adjust the import path accordingly
import AppBar from '../LoginComponents/AppBar';
import LoginForm from '../LoginComponents/LoginForm';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
      <AppBar />
      <LoginForm onLogin={handleLogin} />
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
export default LoginScreen;
