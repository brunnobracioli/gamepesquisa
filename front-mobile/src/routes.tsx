import React from 'react';

import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CreateRecord from './pages/createRecord';
import Home from './pages/Home'



const Stack = createStackNavigator();

export type RootStackPararmList = {
    Home: undefined,
    CreateRecord: undefined 
}

function Routes () {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                cardStyle:{
                backgroundColor: '#0B1F34',
                },
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="CreateRecord" component={CreateRecord}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
