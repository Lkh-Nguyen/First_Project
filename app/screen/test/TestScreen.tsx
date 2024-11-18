import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import VccLoading from '../../components/loading/VccLoading';

const App = () => {  
    
  const [loading, setLoading] = useState(false);
  const handleLoading = () =>{
    setLoading(state => !state)
  }
    return (
    <LinearGradient
      colors={['#4c669f', '#3b5998']}
      style={styles.linearGradient}
    >
      {!loading && <Button title="Click" onPress={handleLoading}/>}
      {loading && <VccLoading />}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
