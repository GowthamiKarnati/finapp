import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoanTable from './LoanTable'

const BottomContainer = () => {
  return (
    <View style={styles.container}>
      
      <LoanTable />
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        marginHorizontal:15,
    },
    loantitle:{
        fontSize:23,
        fontWeight:'bold',
        color:'black',
        marginBottom:15,
    }
});

export default BottomContainer