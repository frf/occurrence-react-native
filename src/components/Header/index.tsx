import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({title, children, headerRight}) => {

    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate('OccurrencePage');
    }

    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    );
}

export default Header;