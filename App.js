import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Prime from './src/Telas/Prime';

export default function App() {
  return (
    <ScrollView>
      <Prime />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

