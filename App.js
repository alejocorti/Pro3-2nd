import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './src/components/navegacion';
import Login from './src/screens/login';
import Register from './src/screens/register';

export default function App() {
  return (
<Register></Register>  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
