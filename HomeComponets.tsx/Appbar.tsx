import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type AppbarProps = {
  navigation: NavigationProp<any>; 
};

const Appbar: React.FC<AppbarProps> = ({ navigation }) => {
  const navigateToProfileScreen = () => {
    navigation.navigate('Profile'); // Replace 'Profile' with your actual route name
  };

  return (
    <View style={styles.topbar}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={navigateToProfileScreen}>
          <FontAwesomeIcon name="user-circle" style={styles.icon} size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>PNF Finance</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    height: 67,
    backgroundColor: '#12b981',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginLeft: 0,
    fontSize: 25,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Appbar;
