import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator'
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';

const AppState = ({children}: any) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppState>
          <Navigator />
        </AppState>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
