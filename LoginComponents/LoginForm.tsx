// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { TextInput, TouchableOpacity } from 'react-native';
// interface LoginFormProps {
//   onLogin: () => void;
// }
// const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//   const [mobileNumber, setMobileNumber] = useState(7020525836);
//   const [userData, setUserData] = useState('');

  
//   useEffect(() => {
//     if (mobileNumber === null || mobileNumber.length === 0) return;
//     else fetchUserData();
//   }, [mobileNumber]);

//   const fetchUserData = async () => {
//     try {
//       let url = `http://10.0.2.2:5000/cdloans?criteria=sheet_23049202.column_56.column_87=${mobileNumber}`;
//       const res = await axios.get(url);
//       setUserData(res.data.data);
//       console.log(res.data.data);
//     } catch (err) {
//       console.error('Error fetching data: ', err.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.title}>Login</Text>
//         <View style={styles.formContainer}>
//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Mobile Number</Text>
//             <TextInput
//               style={styles.input}
//               keyboardType="phone-pad"
//               placeholder="Enter your mobile number"
//               autoCapitalize="none"
//               onChangeText={(text) => setMobileNumber(text)}
      
//             />
//           </View>

//           <View style={styles.formGroup}>
//             <Text style={styles.label}>OTP</Text>
//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               placeholder="Enter OTP"
//               secureTextEntry={true}
//               autoCapitalize="none"
//             />
//           </View>

//           <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
//             <Text style={styles.loginButtonText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.bottom}>
//         <Text style={styles.bottomText}>Need help? Contact our support team at support@example.com</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 60,
//     marginHorizontal: 20,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '700',
//     marginBottom: 18,
//     color: 'black',
//   },
//   formContainer: {
//     width: '100%', 
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     padding: 30,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//   },
//   formGroup: {
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: '#333333',
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 18,
//     color:'#cccccc'
//   },
//   loginButton: {
//     backgroundColor: '#3c82f6',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 22,
//     alignItems: 'center',
//     marginTop: 16,
//     width:'35%'
//   },
//   loginButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   bottom:{
    
//     marginTop:45,
//   },
//   bottomText:{
//     fontSize:18
//   }
// });

// export default LoginForm;
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// interface LoginFormProps {
//   onLogin: () => void;
// }

// export default function LoginForm({ onLogin }: LoginFormProps) {
//   const navigation = useNavigation();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [userData, setUserData] = useState('');

//   useEffect(() => {
//     if (mobileNumber === null || mobileNumber.length === 0) return;
//     else fetchUserData();
//   }, [mobileNumber]);

//   const fetchUserData = async () => {
//     try {
//       let url = `http://10.0.2.2:5002/emi?criteria=sheet_26521917.column_35.column_87=${mobileNumber}`;
//       const res = await axios.get(url);
//       console.log('API Response:', res);
//       setUserData(res.data.data);
//       console.log('Array',res.data.data);
//     } catch (err) {
//       console.error('Error fetching data: ', err);
//     }
//   };

//   const handlePress = async () => {
//     await fetchUserData();
//     console.log(userData);
//     onLogin();
//   };

//   return (
//     <View>
//     <View style={{  flex: 1 }}>
//     <Text style={styles.title}>Login</Text>
//       <View style={styles.FormContainer}>
        
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Mobile Number</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="phone-pad"
//             placeholder="Enter your mobile number"
//             autoCapitalize="none"
//             value={mobileNumber}
//             onChangeText={(text) => setMobileNumber(text)}
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>OTP</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="Enter OTP"
//             secureTextEntry={true}
//             autoCapitalize="none"
//             value={otp}
//             onChangeText={(text) => setOtp(text)}
//           />
//         </View>

//         <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>

      
//     </View>
//     <View style={styles.bottom}>
//     <Text style={styles.bottomText}>Need help? Contact our support team at support@example.com</Text>
//   </View>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   FormContainer: {
//     backgroundColor: '#ffffff',
//     marginHorizontal: 22,
//     borderRadius: 8,
//     padding: 24,
//     elevation: 8,
//     marginLeft: 20,
//     marginRight: 20,
//     flex: 1
//   },
//   formGroup: {
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '700',
//     marginBottom: 18,
//     color: 'black',
//     marginTop:60,
//     marginHorizontal:20
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: 'black',
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 18,
//     color: '#cccccc',
//   },
//   loginButton: {
//     backgroundColor: '#3c82f6',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 22,
//     alignItems: 'center',
//     marginTop: 16,
//     width: '35%',
//   },
//   loginButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   bottom: {
//     marginTop: 45,
//     marginHorizontal:20
//   },
//   bottomText: {
//     fontSize: 18,
//   }
// });
// components/LoginForm.tsx

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { userActions } from '../redux/user/userActions';
// interface LoginFormProps {
//     onLogin: () => void;
//   }
  
//   const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//   const dispatch = useDispatch();
//   const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
//   const [otp, setOtp] = useState('');

//   const handlePress = async () => {
//     console.log(`Mobile Number: ${mobileNumber}, OTP: ${otp}`);
//     dispatch(userActions.setMobileNumber(mobileNumber));
//     onLogin();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <View style={styles.formContainer}>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Mobile Number</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="phone-pad"
//             placeholder="Enter your mobile number"
//             autoCapitalize="none"
//             value={mobileNumber}
//             onChangeText={(text) => dispatch(userActions.setMobileNumber(text))}
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>OTP</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="Enter OTP"
//             secureTextEntry={true}
//             autoCapitalize="none"
//             value={otp}
//             onChangeText={(text) => setOtp(text)}
//           />
//         </View>

//         <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.bottom}>
//         <Text style={styles.bottomText}>
//           Need help? Contact our support team at support@example.com
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 60,
//     marginHorizontal: 20,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '700',
//     marginBottom: 18,
//     color: 'black',
//   },
//   formContainer: {
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     padding: 24,
//     elevation: 8,
//   },
//   formGroup: {
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: 'black',
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     borderRadius: 8,
//     padding: 10,
//     fontSize: 18,
//     color: 'black',
//   },
//   loginButton: {
//     backgroundColor: '#3c82f6',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 22,
//     alignItems: 'center',
//     marginTop: 16,
//     width: '35%',
//   },
//   loginButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   bottom: {
//     marginTop: 45,
//   },
//   bottomText: {
//     fontSize: 18,
//   },
// });

// export default LoginForm;
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/user/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Import the function to fetch loan information


interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const dispatch = useDispatch();
  const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handlePress = async () => {
    console.log(`Mobile Number: ${mobileNumber}, OTP: ${otp}`);

    // Save user session to AsyncStorage
    await AsyncStorage.setItem('userLoggedIn', 'true');
    await AsyncStorage.setItem('userMobileNumber', mobileNumber);

    // Dispatch an action to update the Redux store with the user's mobile number
    dispatch(userActions.setMobileNumber(mobileNumber));

    // Fetch loan information based on the user's mobile number
    

    onLogin();
  };

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
      if (userLoggedIn === 'true') {
        const userMobileNumber = await AsyncStorage.getItem('userMobileNumber') || '';

        // Dispatch an action to update the Redux store with the user's mobile number
        dispatch(userActions.setMobileNumber(userMobileNumber));

        // Fetch loan information based on the user's mobile number
        

        // Restore the session or perform any other necessary actions
        navigation.navigate('Home');
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter your mobile number"
            autoCapitalize="none"
            value={mobileNumber}
            onChangeText={(text) => dispatch(userActions.setMobileNumber(text))}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>OTP</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter OTP"
            secureTextEntry={true}
            autoCapitalize="none"
            value={otp}
            onChangeText={(text) => setOtp(text)}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          Need help? Contact our support team at support@example.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 18,
    color: 'black',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 24,
    elevation: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginBottom: 8,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#3c82f6',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 22,
    alignItems: 'center',
    marginTop: 16,
    width: '35%',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  bottom: {
    marginTop: 45,
  },
  bottomText: {
    fontSize: 18,
    color:'gray'
  },
});

export default LoginForm;
