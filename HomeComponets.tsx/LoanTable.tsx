// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import { Table, Row } from 'react-native-table-component';
// // import { useSelector } from 'react-redux';
// // interface LoanData {
// //   amount: string;
// //   emiDate: string;
// //   paymentStatus: string;
// //   statusColor: string; // New property for status color
// // }

// // const LoanTable = () => {
// //   const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
// //   const tableHead = ['Amount', 'EMI Date', 'EMI Payment Status'];
// //   const tableData: LoanData[] = [
// //     { amount: '$10,000', emiDate: '2023-12-01', paymentStatus: 'Paid', statusColor: 'green' },
// //     { amount: '$12,000', emiDate: '2023-12-15', paymentStatus: 'Unpaid', statusColor: 'red' },
// //     // Add more rows as needed
// //   ];
// //   const flexArr = [2, 2.1, 3];
// //   const fontsize = 18;

// //   return (
// //     <View style={styles.container}>
// //       <Text>Mobile Number: {mobileNumber}</Text>
// //       <Table borderStyle={{ borderWidth: 1, borderColor: '#e5e7eb' }}>
// //         <Row data={tableHead} style={styles.head} textStyle={styles.headText} flexArr={flexArr} />

// //         {tableData.map((rowData, index) => (
// //   <Row
// //     key={index}
// //     data={[
// //       rowData.amount,
// //       rowData.emiDate,
// //       <Text key={index} style={{ ...styles.text, color: rowData.statusColor, fontSize: fontsize, fontWeight: '400', margin: 6, padding: 10 }}>
// //         {rowData.paymentStatus}
// //       </Text>,
// //     ]}
// //     style={styles.row}
// //     textStyle={styles.text}  
// //     flexArr={flexArr}
// //   />
// // ))}
// //       </Table>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     marginTop: 3,
// //     marginBottom: 5,
// //   },
// //   head: { 
// //     height: 60, 
// //     backgroundColor: '#e5e7eb',
// //     paddingTop: 18
// //    },
// //   text: { 
// //     margin: 6, 
// //     padding: 10, 
// //     color:'black', 
// //     fontWeight:'500' 
// //   },
// //   headText: {
// //     margin: 6,
// //     textAlign: 'center',
// //     color: 'black',
// //     fontWeight: 'bold',
// //     height: 70,
// //     padding: 10,
// //     paddingTop: 15,
// //     fontSize: 15,
// //   },
// //   row: { flexDirection: 'row', height: 70 },
// // });

// // export default LoanTable;
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Table, Row } from 'react-native-table-component';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// interface LoanData {
//   amount: string;
//   emiDate: string;
//   paymentStatus: string;
//   statusColor: string;
// }

// const LoanTable = () => {
//   const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
//   const [tableData, setTableData] = useState<LoanData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://10.0.2.2:5002/emi?criteria=sheet_26521917.column_35.column_87=${mobileNumber}`);
//         const apiTableData = response.data.data.map((loan: any) => ({
//           amount: loan.amount,
//           emiDate: loan['emi date'],
//           paymentStatus: loan.status,
//           statusColor: loan.status === 'Paid' ? 'green' : 'red',
//         }));
//         setTableData(apiTableData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [mobileNumber]);

//   const tableHead = ['Amount', 'EMI Date', 'EMI Payment Status'];
//   const flexArr = [2, 2.1, 3];
//   const fontsize = 18;

//   return (
//     <View style={styles.container}>
//       <Text>Mobile Number: {mobileNumber}</Text>
//       <Table borderStyle={{ borderWidth: 1, borderColor: '#e5e7eb' }}>
//         <Row data={tableHead} style={styles.head} textStyle={styles.headText} flexArr={flexArr} />

//         {tableData.map((rowData, index) => (
//           <Row
//             key={index}
//             data={[
//               rowData.amount,
//               rowData.emiDate,
//               <Text key={index} style={{ ...styles.text, color: rowData.statusColor, fontSize: fontsize, fontWeight: '400', margin: 6, padding: 10 }}>
//                 {rowData.paymentStatus}
//               </Text>,
//             ]}
//             style={styles.row}
//             textStyle={styles.text}
//             flexArr={flexArr}
//           />
//         ))}
//       </Table>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 3,
//     marginBottom: 5,
//   },
//   head: {
//     height: 60,
//     backgroundColor: '#e5e7eb',
//     paddingTop: 18,
//   },
//   text: {
//     margin: 6,
//     padding: 10,
//     color: 'black',
//     fontWeight: '500',
//   },
//   headText: {
//     margin: 6,
//     textAlign: 'center',
//     color: 'black',
//     fontWeight: 'bold',
//     height: 70,
//     padding: 10,
//     paddingTop: 15,
//     fontSize: 15,
//   },
//   row: { flexDirection: 'row', height: 70 },
// });

// export default LoanTable;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { useSelector } from 'react-redux';
import axios from 'axios';

interface LoanData {
  amount: string;
  emiDate: string;
  paymentStatus: string;
  statusColor: string;
  loanId: string;
}

const LoanTable = () => {
  const mobileNumber = useSelector((state: any) => state.user.mobileNumber);
  const [loanTables, setLoanTables] = useState<Record<string, LoanData[]>>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log(mobileNumber)
        //const response = await axios.get(`https://backendforpnf.vercel.app/emi?criteria=sheet_26521917.column_35.column_87=${mobileNumber}`);
        //..console.log(response);
        //const response = await axios.get(`https://backendforpnf.vercel.app/emi?criteria=sheet_26521917.column_35.column_87%20LIKE%20%22%25"${encodeURIComponent(mobileNumber)}"`);
        const modifiedMobileNumber = mobileNumber.length > 10 ? mobileNumber.slice(-10) : mobileNumber;
        console.log(modifiedMobileNumber)
        const response = await axios.get(`https://backendforpnf.vercel.app/emi?criteria=sheet_26521917.column_35.column_87%20LIKE%20%22%25${encodeURIComponent(modifiedMobileNumber)}%22`);
        console.log(response.data.data)
        const apiTableData: LoanData[] = response.data.data.map((loan: any) => ({
          amount: loan.amount,
          emiDate: loan['emi date'],
          paymentStatus: loan.status,
          statusColor: loan.status.toLowerCase() === 'paid' ? 'green' : 'red', 
          loanId: loan['loan id'], 
        }));

        // Group data by loan ID
        const groupedTables: Record<string, LoanData[]> = {};
        apiTableData.forEach((row) => {
          const loanID = row.loanId;
          if (!groupedTables[loanID]) {
            groupedTables[loanID] = [];
          }
          groupedTables[loanID].push(row);
        });

        setLoanTables(groupedTables);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        if (error.response) {
          console.error('Server responded with status code:', error.response.status);
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received from the server');
        } else {
          console.error('Error setting up the request:', error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mobileNumber]);

  const flexArr = [2, 2.1, 3];
  const fontsize = 18;

  return (
    <View style={styles.container}>
      {loading && <Text style={{color:'black', fontSize: 24}}>Loading...</Text>}
      {!loading && loanTables && Object.entries(loanTables).map(([loanID, tableData]) => (
        <View key={loanID}>
    
          <Text style={styles.loanIdText}>Loan ID: {loanID}</Text>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#e5e7eb' }}>
            <Row
              data={['Amount', 'EMI Date', 'EMI Payment Status']}
              style={styles.head}
              textStyle={styles.headText}
              flexArr={flexArr}
            />

            {tableData.map((rowData, index) => (
              <Row
                key={index}
                data={[
                  `₹ ${rowData.amount}`,
                  rowData.emiDate.split(' ')[0],
                  <Text
                    key={index}
                    style={{
                      ...styles.text,
                      color: rowData.statusColor === 'green' ? 'green' : 'red',
                      fontSize: fontsize,
                      fontWeight: '400',
                      margin: 6,
                      padding: 10,
                    }}
                  >
                    {rowData.paymentStatus}
                  </Text>,
                ]}
                style={styles.row}
                textStyle={styles.text}
                flexArr={flexArr}
              />
            ))}
          </Table>
        </View>
      ))}
      {!loading && !loanTables && <Text>No EMIs for loans.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    marginBottom: 5,
  },
  head: {
    height: 60,
    backgroundColor: '#e5e7eb',
    paddingTop: 18,
  },
  text: {
    margin: 6,
    padding: 10,
    color: 'black',
    fontWeight: '500',
  },
  headText: {
    margin: 6,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    height: 70,
    padding: 10,
    paddingTop: 15,
    fontSize: 15,
  },
  row: { flexDirection: 'row', height: 70 },
  loanIdText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color:'black'
  },
});

export default LoanTable;
