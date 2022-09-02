import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Play_400Regular, Play_700Bold } from '@expo-google-fonts/play';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts ({
    Play_400Regular, Play_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.container} onLayout ={onLayoutRootView}>
      <Text style={styles.text}>Hello World!+w</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 50,
  },
  
});
