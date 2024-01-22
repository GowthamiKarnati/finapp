// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux'; 
// const MainContent = () => {
//   const dispatch = useDispatch();
//   const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
//   const trucksData = ['Truck Number 1', 'Truck Number 2'];

//   return (
//     <FlatList
//       style={styles.container}
//       data={['data']}
//       keyExtractor={() => 'key'}
//       renderItem={() => (
//         <View>
//           <Text>{mobileNumber}</Text>
//           <Text style={styles.title}>User Profile</Text>
//           <View style={styles.card}>
//             <View style={{ marginBottom: 20 }}>
//               <Text style={styles.top}>Name</Text>
//               <Text style={styles.bottom}>John Doe</Text>
//             </View>
//             <View style={{ marginBottom: 20 }}>
//               <Text style={styles.top}>PAN Card</Text>
//               <Text style={styles.bottom}>ABCDE1234F</Text>
//             </View>
//             <View style={{ marginBottom: 20 }}>
//               <Text style={styles.top}>Date of Birth</Text>
//               <Text style={styles.bottom}>01-Jan-1990</Text>
//             </View>
//             <View style={{ marginBottom: 20 }}>
//               <Text style={styles.top}>Mobile Number</Text>
//               <Text style={styles.bottom}>9876543210</Text>
//             </View>
//             <View style={{ marginBottom: 20 }}>
//               <Text style={styles.top}>Alternate Mobile Number</Text>
//               <Text style={styles.bottom}>8765432109</Text>
//             </View>
//             <View style={{ marginBottom: 16 }}>
//               <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>Trucks</Text>
//               <FlatList
//                 data={trucksData}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                   <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
//                     <Text style={{ fontSize: 30, color: 'black' }}>{'\u2022'}</Text>
//                     <Text style={{ marginLeft: 8, fontSize: 21, fontWeight: '400', color: 'black' }}>{item}</Text>
//                   </View>
//                 )}
//               />
//             </View>
//             <View style={{ marginBottom: 20 }}>
//               <Text style={styles.top}>Dealer Name</Text>
//               <Text style={styles.bottom}>Mulla Tyres</Text>
//             </View>
//           </View>
//           <View style={styles.bottom2}>
//             <Text style={styles.bottomText}>Need help? Contact our support team at support@example.com</Text>
//           </View>
//         </View>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//     marginHorizontal: 20,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '700',
//     marginBottom: 18,
//     color: 'black',
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 8,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     marginBottom: 16,
//     elevation: 2.5,
//   },
//   top: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'gray',
//   },
//   bottom: {
//     fontSize: 23,
//     fontWeight: '600',
//     color: 'black',
//   },
//   bottom2: {
//     marginTop: 13,
//   },
//   bottomText: {
//     fontSize: 18,
//   },
// });

// export default MainContent;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

// const MainContent = () => {
//   const dispatch = useDispatch();
//   const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
//   const trucksData = ['Truck Number 1', 'Truck Number 2'];

//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // Replace 'YOUR_BACKEND_URL' with the actual backend URL
//         const backendUrl = 'https://backendforpnf.vercel.app/customers';
//         const modifiedMobileNumber = encodeURIComponent(mobileNumber);

//         const response = await axios.get(`${backendUrl}?criteria=sheet_95100183.column_87%20LIKE%22%25${modifiedMobileNumber}%22`);
        
//         // Assuming the backend response is an object with user data
//         setUserData(response.data);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchUserData();
//   }, [mobileNumber]);

//   // Render loading state while data is being fetched
//   if (!userData) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       style={styles.container}
//       data={['data']}
//       keyExtractor={() => 'key'}
//       renderItem={() => (
//         <View>
//           <Text style={styles.mobileNumber}>{mobileNumber}</Text>
//           <Text style={styles.title}>User Profile</Text>
//           <View style={styles.card}>
//             <View style={styles.infoContainer}>
//               <Text style={styles.label}>Name</Text>
//               <Text style={styles.value}>{userData.name}</Text>
//             </View>
//             <View style={styles.infoContainer}>
//               <Text style={styles.label}>PAN Card</Text>
//               <Text style={styles.value}>{userData.pan}</Text>
//             </View>
//             {/* ... (rest of your component code) ... */}
//           </View>
//           {/* ... (rest of your component code) ... */}
//         </View>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     marginTop: 40,
//     marginHorizontal: 20,
//   },
//   mobileNumber: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 10,
//     color: 'black',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '700',
//     marginBottom: 18,
//     color: 'black',
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 8,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     marginBottom: 16,
//     elevation: 2.5,
//   },
//   infoContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'gray',
//   },
//   value: {
//     fontSize: 23,
//     fontWeight: '600',
//     color: 'black',
//   },
//   bottom2: {
//     marginTop: 13,
//   },
//   bottomText: {
//     fontSize: 18,
//   },
// });

// export default MainContent;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const MainContent = () => {
  const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
  const trucksData = ['Truck Number 1', 'Truck Number 2'];

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const backendUrl = 'https://backendforpnf.vercel.app/customers';
        const modifiedMobileNumber = encodeURIComponent(mobileNumber);

        console.log('Fetching data from:', `${backendUrl}?criteria=sheet_95100183.column_87%20LIKE%22%25${modifiedMobileNumber}%22`);

        const response = await axios.get(`${backendUrl}?criteria=sheet_95100183.column_87%20LIKE%22%25${modifiedMobileNumber}%22`);

        console.log('Response from backend:', response.data.data);

        // Assuming the backend response is an object with user data
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchUserData();
  }, [mobileNumber]);

  // Render loading state while data is being fetched
  if (!userData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{color:'black', fontSize:24}}>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={['data']}
      keyExtractor={() => 'key'}
      renderItem={() => (
        <View>
         {/* // <Text style={styles.mobileNumber}>{mobileNumber}</Text> */}
          <Text style={styles.title}>User Profile</Text>
          <View style={styles.card}>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{userData[0].name}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>PAN Card</Text>
              <Text style={styles.value}>{userData[0].pan}</Text>
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Mobile Number</Text>
              <Text style={styles.value}>{mobileNumber}</Text>
            </View>
            {userData[0]['alternate mobile number'] && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Alternate Mobile Number</Text>
                <Text style={styles.value}>{userData[0]['alternate mobile number']}</Text>
              </View>
            )}
            {userData[0]['DEALER'] && (
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Dealer</Text>
                <Text style={styles.value}>{userData[0]['DEALER']}</Text>
              </View>
            )}
          </View>
          

          {/* ... (rest of your component code) ... */}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
    color:'black'
  },
  mobileNumber: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 18,
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 16,
    elevation: 2.5,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  bottom2: {
    marginTop: 13,
  },
  bottomText: {
    fontSize: 18,
  },
});

export default MainContent;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

// const MainContent = () => {
//   const dispatch = useDispatch();
//   const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
//   const trucksData = ['Truck Number 1', 'Truck Number 2'];

//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const backendUrl = 'https://backendforpnf.vercel.app/customers';
//         const modifiedMobileNumber = encodeURIComponent(mobileNumber);

//         console.log('Fetching data from:', `${backendUrl}?criteria=sheet_95100183.column_87%20LIKE%22%25${modifiedMobileNumber}%22`);

//         const response = await axios.get(`${backendUrl}?criteria=sheet_95100183.column_87%20LIKE%22%25${modifiedMobileNumber}%22`);

//         console.log('Response from backend:', response.data.data);

//         // Assuming the backend response is an object with user data
//         setUserData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchUserData();
//   }, [mobileNumber]);

//   if (!userData) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text style={{ color: 'black', fontSize: 24 }}>Loading...</Text>
//       </View>
//     );
//   }

//   // Check if userData array is not empty
//   if (!userData.length) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text style={{ color: 'black', fontSize: 24 }}>No data available</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text style={styles.title}>User Profile</Text>
//       <View style={styles.card}>
//         <View style={styles.infoContainer}>
//           <Text style={styles.label}>Name</Text>
//           <Text style={styles.value}>{userData[0].name}</Text>
//         </View>
//         <View style={styles.infoContainer}>
//           <Text style={styles.label}>PAN Card</Text>
//           <Text style={styles.value}>{userData[0].pan}</Text>
//         </View>

//         <View style={styles.infoContainer}>
//           <Text style={styles.label}>Mobile Number</Text>
//           <Text style={styles.value}>{mobileNumber}</Text>
//         </View>
//         {userData[0]['alternate mobile number'] && (
//           <View style={styles.infoContainer}>
//             <Text style={styles.label}>Alternate Mobile Number</Text>
//             <Text style={styles.value}>{userData[0]['alternate mobile number']}</Text>
//           </View>
//         )}
//         {userData[0]['DEALER'] && (
//           <View style={styles.infoContainer}>
//             <Text style={styles.label}>Dealer</Text>
//             <Text style={styles.value}>{userData[0]['DEALER']}</Text>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       container: {
//         flex: 1,
//         marginTop: 40,
//         marginHorizontal: 20,
//         color:'black'
//       },
//       mobileNumber: {
//         fontSize: 20,
//         fontWeight: '600',
//         marginBottom: 10,
//         color: 'black',
//       },
//       title: {
//         fontSize: 30,
//         fontWeight: '700',
//         marginBottom: 18,
//         color: 'black',
//       },
//       card: {
//         backgroundColor: 'white',
//         padding: 25,
//         borderRadius: 8,
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         marginBottom: 16,
//         elevation: 2.5,
//       },
//       infoContainer: {
//         marginBottom: 20,
//       },
//       label: {
//         fontSize: 18,
//         fontWeight: '600',
//         color: 'gray',
//       },
//       value: {
//         fontSize: 20,
//         fontWeight: '600',
//         color: 'black',
//       },
//       bottom2: {
//         marginTop: 13,
//       },
//       bottomText: {
//         fontSize: 18,
//       },
//     });

// export default MainContent;
