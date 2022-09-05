import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Play_400Regular, Play_700Bold } from '@expo-google-fonts/play';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react'
import Routes from './src/routes'

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
      <StatusBar style="light" />
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  } 
});


