import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const StartScreen = () => {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backendforpnf.vercel.app');
        setBackendData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>StartScreen</Text>
      {backendData && (
        <View>
          <Text>Data from Backend:</Text>
          <Text>{JSON.stringify(backendData)}</Text>
        </View>
      )}
    </View>
  );
};

export default StartScreen;
