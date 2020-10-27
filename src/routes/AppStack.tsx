import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OccurrencePage from '../pages/OccurrencePage';
import OccurrenceDetailPage from '../pages/OccurrenceDetailPage';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="OccurrencePage" component={OccurrencePage}></Screen>
                <Screen name="OccurrenceDetailPage" component={OccurrenceDetailPage}></Screen>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;

