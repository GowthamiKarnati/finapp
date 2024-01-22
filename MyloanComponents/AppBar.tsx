import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type StackParamList = {
  Home: undefined;
  MyLoans: undefined; // Add 'MyLoans' to the StackParamList
};

type AppBarProps = {
  navigation: NavigationProp<StackParamList>;
};

const AppBar: React.FC<AppBarProps> = ({ navigation }) => {
  const navigateToMyLoans = () => {
    navigation.navigate('Home'); // Update to navigate to 'MyLoans'
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateToMyLoans}>
          <Icon name="arrow-left" size={23} color="white" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Back</Text>
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
  icon: {
    marginRight: 20, 
  },
  appBarTitle: {
    fontSize: 23,
    color: 'white',
    fontWeight: '400',
    marginLeft:8,
  },
});

export default AppBar;
