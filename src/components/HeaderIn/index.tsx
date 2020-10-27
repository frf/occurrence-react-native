import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

interface HeaderInProps {
}

const HeaderIn: React.FC<HeaderInProps> = () => {

    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate('OccurrencePage');
    }

    return (
        <View style={styles.container} >
           <View style={styles.topBar} >
                <BorderlessButton style={styles.back} onPress={handleGoBack}>
                    <Feather name="arrow-left" size={25} color="#566475" />
                </BorderlessButton>
                <BorderlessButton style={styles.back} onPress={handleGoBack}>
                    <Feather name="edit-2" size={25} color="#566475" />
                </BorderlessButton>
           </View>
        </View>
    );
}

export default HeaderIn;