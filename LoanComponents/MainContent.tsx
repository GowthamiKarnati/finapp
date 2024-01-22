// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import { useSelector } from 'react-redux';
// const MainContent = () => {
//   const mobileNumber = useSelector((state) => state.user.mobileNumber);
//   return (
//     <View style={styles.container}>
//       <View>
//       <Text style={styles.info}>Mobile Number: {mobileNumber}</Text>
//         <Text style={styles.title}>my debts</Text>
//         <View style={styles.card}>
//         <View style={styles.row}>
//         <View style={styles.rowItem}>
//           <Text style={styles.headerText}>Loan ID: 123456</Text>
//         </View>
//         <View style={styles.rowItem}>
//           <Text style={styles.status}>
//             Status: <Text style={styles.greenText}>Payment done</Text>
//           </Text>
//         </View>
//       </View>
//             <Text style={styles.info}>Amount: $10,000</Text>
//             <Text style={styles.info}>Loan Date: 2023-12-01</Text>
//             <Text style={styles.info}>Scheduled Payment Date: 2024-01-01</Text>
//         </View>
//         <View style={styles.card}>
//         <View style={styles.row}>
//         <View style={styles.rowItem}>
//           <Text style={styles.headerText}>Loan ID: 789012</Text>
//         </View>
//         <View style={styles.rowItem}>
//           <Text style={styles.status}>
//             Status: <Text style={styles.redText}>Not Paid</Text>
//           </Text>
//         </View>
//       </View>
//             <Text style={styles.info}>Amount: $15,000</Text>
//             <Text style={styles.info}>Loan Date: 2023-11-15</Text>
//             <Text style={styles.info}>Scheduled Payment Date: 2024-01-01</Text>
//         </View>
//       </View>
//       <View style={styles.bottom}>
//         <Text style={styles.bottomText}>Need help? Contact our support team at support@example.com</Text>
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     container:{
//         marginTop:60,
//         marginHorizontal:20,
        
//     },
//     title: {
//         fontSize: 30,
//         fontWeight: '700',
//         marginBottom: 18,
//         color: 'black',
//       },
//       card:{
//         backgroundColor: 'white',
//         padding: 20,
//         borderRadius: 8,
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         marginBottom: 20,
//       }, 
//       row: {
//         flexDirection: 'row',
//         flexWrap: 'wrap', // Allow items to wrap to the next line
//       },
//       rowItem: {
//         flex: 1, // Each item takes equal space
//         marginBottom: 20, // Add some spacing between rows
//       },
//       header:{
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 30,

//       },
//       headerText: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         marginRight:18,
//         color:'black',
//         flexWrap:'nowrap'

//       },
//       status: {
//         fontSize: 19,
//         color: 'gray',
//       },
//       greenText: {
//         color: 'green',
//       },
//       redText:{
//         color:'red'
//       },
//       info: {
//         marginBottom: 15,
//         fontSize:20,
//         color:'black',
//         fontWeight:'500',
//         width: '100%',
//       },
//       bottom:{
    
//         marginTop:13,
//       },
//       bottomText:{
//         fontSize:18
//       },
//       fullWidthInfo: {
//         fontSize: 20,
//         color: 'black',
//         fontWeight: '400',
//         width:'100%'
//       },
// });
// export default MainContent
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const MainContent = () => {
//   const mobileNumber = useSelector((state) => state.user.mobileNumber);
//   const [loanData, setLoanData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         //const response = await axios.get(`https://backendforpnf.vercel.app/cdloans?criteria=sheet_23049202.column_56.column_87=${mobileNumber}`);
//         //const response = await axios.get(`https://backendforpnf.vercel.app/cdloans?criteria=sheet_23049202.column_56.column_87%20LIKE%20"${encodeURIComponent(mobileNumber)}"`);
//         const modifiedMobileNumber = mobileNumber.length > 10 ? mobileNumber.slice(-10) : mobileNumber;
//         const response = await axios.get(`https://backendforpnf.vercel.app/cdloans?criteria=sheet_23049202.column_56.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
//         console.log(response.data.data);
//         setLoanData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching loan data:', error);
//       }
//       finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [mobileNumber]);

//   return (
//     <View style={styles.container}>
//       <View>
//         {/* <Text style={styles.info}>Mobile Number: {mobileNumber}</Text> */}
//         <Text style={styles.title}>My Debts</Text>
//         {loading && <Text style={{color:'black', fontSize: 24}}>Loading...</Text>}
//         {loanData.length === 0 && !loading && <Text style={{ color: 'black', fontSize: 24 }}>No loans found.</Text>}
//         {loanData.map((loan, index) => (
//           <View key={index} style={styles.card}>
//             <View style={styles.row}>
//               <View style={styles.rowItem}>
//                 <Text style={styles.headerText}>Loan ID: {loan['account number']}</Text>
//               </View>
//               <View style={styles.rowItem}>
//                 <Text style={styles.status}>
//                   Status: <Text style={loan['loan status'] === 'closed' ? styles.greenText : styles.redText}>{loan['loan status']}</Text>
//                 </Text>
//               </View>
//             </View>
//             <Text style={styles.info}>Amount: ${parseFloat(loan['loan amount']).toFixed(2)}</Text>
//             <Text style={styles.info}>Loan Date: {loan['loan date'].split(' ')[0]}</Text>
//             <Text style={styles.info}>Scheduled Payment Date: {loan['next int date'].split(' ')[0]}</Text>
//           </View>
//         ))}
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
//   card: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   rowItem: {
//     flex: 1,
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginRight: 18,
//     color: 'black',
//     flexWrap: 'nowrap',
//   },
//   status: {
//     fontSize: 19,
//     color: 'gray',
//   },
//   greenText: {
//     color: 'green',
//   },
//   redText: {
//     color: 'red',
//   },
//   info: {
//     marginBottom: 15,
//     fontSize: 20,
//     color: 'black',
//     fontWeight: '500',
//     width: '100%',
//   },
//   bottom: {
//     marginTop: 13,
//   },
//   bottomText: {
//     fontSize: 18,
//     color:'black'
//   },
// });

// export default MainContent;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const MainContent = () => {
  const mobileNumber = useSelector((state:any) => state.user.mobileNumber);
  const [loanData, setLoanData] = useState([]);
  const [tyreLoanData, setTyreLoanData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       // Fetch data for My Debts
  //       const modifiedMobileNumber = mobileNumber.length > 10 ? mobileNumber.slice(-10) : mobileNumber;
  //       const responseDebts = await axios.get(`https://backendforpnf.vercel.app/cdloans?criteria=sheet_23049202.column_56.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
  //       setLoanData(responseDebts.data.data);

  //       // Fetch data for My Tyre Loans
  //       //const responseTyreLoans = await axios.get(`https://backendforpnf.vercel.app/tyreloans?criteria=sheet_50460895.column_25.column_87=${mobileNumber}`);
  //       const responseTyreLoans= await axios.get(`https://backendforpnf.vercel.app/tyreloans?criteria=sheet_50460895.column_25.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
  //       setTyreLoanData(responseTyreLoans.data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [mobileNumber]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch data for My Debts
        const modifiedMobileNumber = mobileNumber.length > 10 ? mobileNumber.slice(-10) : mobileNumber;
        const responseDebts = await axios.get(`https://backendforpnf.vercel.app/cdloans?criteria=sheet_23049202.column_56.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
        const sortedLoanData = responseDebts.data.data.sort((a, b) => {
          // Sort in descending order based on loan date
          return new Date(b['loan date']) - new Date(a['loan date']);
        });
        setLoanData(sortedLoanData);

        // Fetch data for My Tyre Loans
        const responseTyreLoans = await axios.get(`https://backendforpnf.vercel.app/tyreloans?criteria=sheet_50460895.column_25.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
        const sortedTyreLoanData = responseTyreLoans.data.data.sort((a, b) => {
          // Sort in descending order based on loan date
          return new Date(b['loan date']) - new Date(a['loan date']);
        });
        setTyreLoanData(sortedTyreLoanData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mobileNumber]);

  return (
    <View style={styles.container}>
      {/* My Debts Section */}
      <View>
        
        <Text style={styles.tyreTitle}>My cd Loans</Text>
        {loading && <Text style={styles.loadingText}>Loading...</Text>}
        {loanData.length === 0 && !loading && <Text style={styles.noDataText}>No loans found.</Text>}
        {loanData.map((loan, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.rowItem}>
                <Text style={styles.headerText}>Loan ID: {loan['account number']}</Text>
              </View>
              <View style={styles.rowItem}>
                <Text style={styles.status}>
                  Status: <Text style={loan['loan status'] === 'closed' ? styles.greenText : styles.redText}>{loan['loan status']}</Text>
                </Text>
              </View>
            </View>
            <Text style={styles.info}>Amount: ₹ {parseFloat(loan['loan amount']).toFixed(2)}</Text>
            <Text style={styles.info}>Loan Date: {loan['loan date'].split(' ')[0]}</Text>
            <Text style={styles.info}>Scheduled Payment Date: {loan['next int date'].split(' ')[0]}</Text>
          </View>
        ))}
      </View>

      {/* My Tyre Loans Section */}
      <View>
        <Text style={styles.tyreTitle}>My Tyre Loans</Text>
        
        {tyreLoanData.length === 0 && !loading && <Text style={styles.noDataText}>No tyre loans found.</Text>}
        {tyreLoanData.map((loan, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.rowItem}>
              <Text style={styles.headerText}> Loan ID: {loan['acc number']}</Text>
              </View>
              <View style={styles.rowItem}>
              <Text style={styles.status}>
              Status: <Text style={loan['Status'] === 'Closed' ? styles.greenText : styles.redText}>{loan['Status']}</Text>
        </Text>
              </View>
            </View>
            {/* <Text style={styles.tyreInfo}>Amount: ${parseFloat(loan['loan amount']).toFixed(2)}</Text>
            <Text style={styles.tyreInfo}>Loan Date: {loan['loan date'].split(' ')[0]}</Text>
            <Text style={styles.info}>Scheduled Payment Date: {loan['scheduled payment date'].split(' ')[0]}</Text> */}
            <Text style={styles.info}>Amount: ₹ {parseFloat(loan['loan amount']).toFixed(2)}</Text>
            <Text style={styles.info}>Loan Date: {loan['loan date'] ? loan['loan date'].split(' ')[0] : 'N/A'}</Text>
            <Text style={styles.info}>Scheduled Payment Date: {loan['temp date'] ? loan['temp date'].split(' ')[0] : 'N/A'}</Text>

          </View>
        ))}
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Need help? Contact our support team at support@example.com</Text>
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
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowItem: {
    flex: 1,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 20,
    color: 'black',
    flexWrap: 'nowrap',
  },
  status: {
    fontSize: 19,
    color: 'gray',
    marginLeft: 40, 
  },
  greenText: {
    color: 'green',
  },
  redText: {
    color: 'red',
  },
  info: {
    marginBottom: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    width: '100%',
  },
  tyreTitle: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 18,
    color: 'black',
  },
  tyreInfo: {
    marginBottom: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    width: '100%',
  },
  tyreStatus: {
    fontSize: 19,
    color: 'gray',
  },
  tyreGreenText: {
    color: 'green',
  },
  tyreRedText: {
    color: 'red',
  },
  loadingText: {
    fontSize: 24,
    color: 'black',
  },
  noDataText: {
    fontSize: 24,
    color: 'black',
  },
  bottom: {
    marginTop: 13,
  },
  bottomText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default MainContent;
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const MainContent = () => {
//   const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
//   const [loanData, setLoanData] = useState([]);
//   const [tyreLoanData, setTyreLoanData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Fetch data for My Debts
//         const modifiedMobileNumber = mobileNumber.length > 10 ? mobileNumber.slice(-10) : mobileNumber;
//         const responseDebts = await axios.get(`https://backendforpnf.vercel.app/cdloans?criteria=sheet_23049202.column_56.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
//         const sortedLoanData = responseDebts.data.data.sort((a, b) => {
//           // Sort in descending order based on loan date
//           return new Date(b['loan date']) - new Date(a['loan date']);
//         });
//         setLoanData(sortedLoanData);

//         // Fetch data for My Tyre Loans
//         const responseTyreLoans = await axios.get(`https://backendforpnf.vercel.app/tyreloans?criteria=sheet_50460895.column_25.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
//        // setTyreLoanData(responseTyreLoans.data.data);
//        const sortedTyreLoanData = responseTyreLoans.data.data.sort((a, b) => {
//         // Sort in descending order based on loan date
//         return new Date(b['loan date']) - new Date(a['loan date']);
//       });
//       setTyreLoanData(sortedTyreLoanData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [mobileNumber]);

//   return (
//     <View style={styles.container}>
//       {/* My Debts Section */}
//       <View>
//         <Text style={styles.tyreTitle}>My CD Loans</Text>
//         {loading && <Text style={styles.loadingText}>Loading...</Text>}
//         {loanData.length === 0 && !loading && <Text style={styles.noDataText}>No loans found.</Text>}
//         {loanData.map((loan, index) => (
//           <View key={index} style={styles.card}>
//             <View style={styles.row}>
//               <View style={styles.rowItem}>
//                 <Text style={styles.headerText}>Loan ID: {loan['account number']}</Text>
//               </View>
//               <View style={styles.rowItem}>
//                 <Text style={styles.status}>
//                   Status: <Text style={loan['loan status'] === 'closed' ? styles.greenText : styles.redText}>{loan['loan status']}</Text>
//                 </Text>
//               </View>
//             </View>
//             <Text style={styles.info}>Amount: ₹{parseFloat(loan['loan amount']).toFixed(2)}</Text>
//             <Text style={styles.info}>Loan Date: {loan['loan date'].split(' ')[0]}</Text>
//             <Text style={styles.info}>Scheduled Payment Date: {loan['next int date'].split(' ')[0]}</Text>
//           </View>
//         ))}
//       </View>

//       {/* My Tyre Loans Section */}
//       <View>
//         <Text style={styles.tyreTitle}>My Tyre Loans</Text>
//         {tyreLoanData.length === 0 && !loading && <Text style={styles.noDataText}>No tyre loans found.</Text>}
//         {tyreLoanData.map((loan, index) => (
//           <View key={index} style={styles.card}>
//             <View style={styles.row}>
//               <View style={styles.rowItem}>
//                 <Text style={styles.headerText}>Loan ID: {loan['acc number']}</Text>
//               </View>
//               <View style={styles.rowItem}>
//                 <Text style={styles.status}>
//                   Status: <Text style={loan['Status'] === 'Closed' ? styles.greenText : styles.redText}>{loan['Status']}</Text>
//                 </Text>
//               </View>
//             </View>
//             <Text style={styles.info}>Amount: ₹{parseFloat(loan['loan amount']).toFixed(2)}</Text>
//             <Text style={styles.info}>Loan Date: {loan['loan date'] ? loan['loan date'].split(' ')[0] : 'N/A'}</Text>
//             <Text style={styles.info}>Scheduled Payment Date: {loan['temp date'] ? loan['temp date'].split(' ')[0] : 'N/A'}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.bottom}>
//         <Text style={styles.bottomText}>Need help? Contact our support team at support@example.com</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   tyreTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   loadingText: {
//     fontSize: 16,
//     fontStyle: 'italic',
//     color: 'gray',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   noDataText: {
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 2,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   rowItem: {
//     flex: 1,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   status: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   greenText: {
//     color: 'green',
//     fontWeight: 'bold',
//   },
//   redText: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
//   info: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   bottom: {
//     marginTop: 20,
//     borderTopWidth: 1,
//     borderColor: 'gray',
//     paddingVertical: 10,
//   },
//   bottomText: {
//     fontSize: 14,
//     color: 'blue',
//     textAlign: 'center',
//   },
// });

// export default MainContent;
