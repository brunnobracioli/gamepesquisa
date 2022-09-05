import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import PlatformCard from './PlatformCard';
import { GamePlatform, Game } from './types';
import RNPickerSelect from 'react-native-picker-select'
import { Picker,   } from '@react-native-picker/picker'
import { Value } from 'react-native-reanimated';
import axios from 'axios';


const placeholder = {
  label: 'Selecione o game',
  value: null,
}

const BASE_URL = 'http://192.168.15.10:8080'

const mapSelectValues = (games: Game[]) => {
  return games.map(game => ({
    ...game,
    label: game.title,
    value: game.id,
  }))
}


function CreateRecord(){

  const [platform, setPlatform] = useState<GamePlatform>();
  const [selectedGame, setSelectedGame] = useState('');
  const [allGames, setAllGames] = useState<Game[]>([]);

  const handleChangePlatform = (selectedPlatform: GamePlatform) => {
    setPlatform(selectedPlatform);
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/games`)
    .then(response => {
      const selectValue = mapSelectValues(response.data)
      setAllGames(selectValue);
    })


  },[]);


    return(
       <>
        <Header/>
        <View style={styles.container}>

          <TextInput
          placeholderTextColor={'#9E9E9E'}
          placeholder='Nome' 
          style ={styles.inputText}/>

          <TextInput
          keyboardType='numeric'
          maxLength={2}
          placeholderTextColor={'#9E9E9E'}
          placeholder='Idade'
          style ={styles.inputText}/>

          <View style={styles.platformContainer}>
            <PlatformCard platform='PC' icon="laptop" onChange={handleChangePlatform} activePlatform={platform}/>
            <PlatformCard platform='XBOX'icon="xbox" onChange={handleChangePlatform} activePlatform={platform}/>
            <PlatformCard platform='PLAYSTATION' icon="playstation" onChange={handleChangePlatform} activePlatform={platform}/>      
          </View> 
           {/*<RNPickerSelect
          onValueChange={value => {setSelectedGame(value)}} 
          placeholder={placeholder}
          items={[
            {label: 'football', value: 'football' },
            {label: 'baseball', value: 'baseball' },
            {label: 'hockey', value: 'hockey' }
          ]} 
          style={pickerSelectStyles}
          >

          </RNPickerSelect>
        */}
        
        <Picker
        selectedValue={selectedGame}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedGame(itemValue)
        
        }>
        <Picker.Item label={allGames} />
        </Picker>

        </View>
        
       </>

    );  
}

const pickerSelectStyles = StyleSheet.create(
  {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: '#FFF',
      borderRadius: 10,
      color: '#ED7947',
      paddingRight: 30,
      fontFamily: "Play_700Bold",
      height: 50
    },
    inputAndroid: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: '#FFF',
      borderRadius: 10,
      color: '#ED7947',
      paddingRight: 30,
      fontFamily: "Play_700Bold",
      height: 50
    },
    placeholder: {
      color: '#9E9E9E',
      fontSize: 16,
      fontFamily: "Play_700Bold",
    },
    iconContainer: {
      top: 10,
      right: 12,
    }
  }
)

const styles = StyleSheet.create(
  {
    container: {
      marginTop: '15%',
      paddingRight: '5%',
      paddingLeft: '5%',
      paddingBottom: 50
    },
    inputText: {
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 10,
      color: '#ED7947',
      fontFamily: "Play_700Bold",
      fontSize: 16,
      paddingLeft: 20,
      marginBottom: 21
    },
    platformContainer: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    footer: {
      marginTop: '15%',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 10,
      height: 60,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontFamily: "Play_700Bold",
      fontWeight: 'bold',
      fontSize: 18,
      color: '#0B1F34',
    }
  }
)


export default CreateRecord;