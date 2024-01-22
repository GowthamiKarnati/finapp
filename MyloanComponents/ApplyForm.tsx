// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const ApplyForm = () => {
//   const [selectedBrand, setSelectedBrand] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Apply for Tire Loan</Text>
//       <View style={styles.formContainer}>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Number of Tires Required</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="phone-pad"
//             placeholder="Enter the number of tires"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Brand of Tire</Text>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={selectedBrand}
//               onValueChange={(itemValue) => setSelectedBrand(itemValue)}
//               style={styles.picker}
//             >
//               <Picker.Item label="Select the brand" value="" />
//               <Picker.Item label="Bridgestone" value="bridgestone" />
//               <Picker.Item label="Goodyear" value="goodyear" />
//               <Picker.Item label="Continental" value="continental" />
              
//             </Picker>
//           </View>
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Loan Amount</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="phone-pad"
//             placeholder="Enter the loan amount"
//             autoCapitalize="none"
//           />
//         </View>
//         <TouchableOpacity style={styles.loginButton}>
//             <Text style={styles.loginButtonText}>Submit Application</Text>
//           </TouchableOpacity>
//       </View>
//       <View style={styles.bottom}>
//         <Text style={styles.bottomText}>Need help? Contact our support team at support@example.com</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 40,
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
//     color: '#cccccc',
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     borderRadius: 8,
//     marginBottom: 8,
//     overflow: 'hidden',
//     padding: 0,   
//   },
//   picker: { 
//     color: 'black',
//   },
//   loginButton: {
//     backgroundColor: '#3c82f6',
//     borderRadius: 8,
//     paddingVertical: 16,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//     marginTop: 16,
//     width:'70%',
//     height:55
//   },
//   loginButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   bottom:{
//     marginTop:40,
//   },
//   bottomText:{
//     fontSize:18
//   }
// });

// export default ApplyForm;
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';

// const ApplyForm = () => {
//   const [numberOfTires, setNumberOfTires] = useState('');
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');

//   const handleSubmit = async() => {
//     try {
      
//       const response = await axios.post(`https://backendforpnf.vercel.app/create`, {
//         numberOfTires,
//         selectedBrand,
//         loanAmount,
//       });

//       // Handle the response as needed
//       console.log('Server response:', response.data);
//     } catch (error) {
//       console.error('Error submitting application:', error);
//     }
//     console.log('Number of Tires:', numberOfTires);
//     console.log('Brand of Tire:', selectedBrand);
//     console.log('Loan Amount:', loanAmount);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Apply for Tire Loan</Text>
//       <View style={styles.formContainer}>
//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Number of Tires Required</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="phone-pad"
//             placeholder="Enter the number of tires"
//             autoCapitalize="none"
//             value={numberOfTires}
//             onChangeText={(text) => setNumberOfTires(text)}
//           />
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Brand of Tire</Text>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={selectedBrand}
//               onValueChange={(itemValue) => setSelectedBrand(itemValue)}
//               style={styles.picker}
//             >
//               <Picker.Item label="Select the brand" value="" />
//               <Picker.Item label="Bridgestone" value="bridgestone" />
//               <Picker.Item label="Goodyear" value="goodyear" />
//               <Picker.Item label="Continental" value="continental" />
//             </Picker>
//           </View>
//         </View>

//         <View style={styles.formGroup}>
//           <Text style={styles.label}>Loan Amount</Text>
//           <TextInput
//             style={styles.input}
//             keyboardType="phone-pad"
//             placeholder="Enter the loan amount"
//             autoCapitalize="none"
//             value={loanAmount}
//             onChangeText={(text) => setLoanAmount(text)}
//           />
//         </View>
//         <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
//           <Text style={styles.loginButtonText}>Submit Application</Text>
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
//     marginTop: 40,
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
//     color: 'black',
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     borderRadius: 8,
//     marginBottom: 8,
//     overflow: 'hidden',
//     padding: 0,   
//   },
//   picker: { 
//     color: 'black',
//   },
//   loginButton: {
//     backgroundColor: '#3c82f6',
//     borderRadius: 8,
//     paddingVertical: 16,
//     paddingHorizontal: 10,
//     alignItems: 'center',
//     marginTop: 16,
//     width:'70%',
//     height:55
//   },
//   loginButtonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   bottom:{
//     marginTop:40,
//   },
//   bottomText:{
//     fontSize:18,
//     color:'gray'
//   }
// });

// export default ApplyForm;
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,  Alert } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux';

const ApplyForm = () => {
  const mobileNumber = useSelector((state:any) => state.user.mobileNumber);
  const [numberOfTires, setNumberOfTires] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [submissionResult, setSubmissionResult] = useState('');
  const [customerData, setCustomerData] = useState(null);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`https://backendforpnf.vercel.app/create`, {
        numberOfTires,
        selectedBrand,
        loanAmount,
        name: customerData ? customerData[0].name : null,
        pan: customerData ? customerData[0].pan : null,
        mobilenumber: mobileNumber,
        alternatemobile: customerData ? customerData[0]['alternate mobile number'] : null,
      });

      
      // Handle the response as needed
      console.log('Server response:', response.data);
      setSubmissionResult('successfully!');
    } catch (error) {
      setSubmissionResult('Error submitting application. Please try again.');
      console.error('Error submitting application:', error);
    } 
  };

  const displayAlert = () => {
    Alert.alert(
      'Application Submission',
      submissionResult,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };
  useEffect(() => {
    // Fetch customer data when mobileNumber changes
    fetchCustomerData();
  }, [mobileNumber]);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get(`https://backendforpnf.vercel.app/customers?criteria=sheet_95100183.column_87%20LIKE%22%25${encodeURIComponent(mobileNumber)}%22`);

      console.log('Response from backend:', response.data.data);

      // Set the customer data to the local state
      setCustomerData(response.data.data);
    } catch (error) {
      console.error('Error fetching customer data:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for Tire Loan</Text>
      <View style={styles.formContainer}>
      {/* <Text >{mobileNumber}</Text>
      {customerData && customerData.length > 0 && (
  <View>
    <Text>Name: {customerData[0].name}</Text>
    <Text>PAN Card: {customerData[0].pan}</Text>
    <Text>{customerData[0]['alternate mobile number']}</Text>
  </View>
)} */}
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Number of Tires Required</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter the number of tires"
            autoCapitalize="none"
            value={numberOfTires}
            onChangeText={(text) => setNumberOfTires(text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Brand of Tire</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedBrand}
              onValueChange={(itemValue) => setSelectedBrand(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select the brand" value="" />
              <Picker.Item label="Bridgestone" value="bridgestone" />
              <Picker.Item label="Goodyear" value="goodyear" />
              <Picker.Item label="Continental" value="continental" />
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Loan Amount</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter the loan amount"
            autoCapitalize="none"
            value={loanAmount}
            onChangeText={(text) => setLoanAmount(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            handleSubmit();
            displayAlert();
          }}
          
        >
          <Text style={styles.loginButtonText}>Submit Application</Text>
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
    marginTop: 40,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 18,
    color: 'black',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden',
    padding: 0,
  },
  picker: {
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#3c82f6',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 16,
    width: '70%',
    height: 55,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
  },
  bottom: {
    marginTop: 40,
  },
  bottomText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default ApplyForm;
