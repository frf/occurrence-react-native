import React, { useState } from 'react';
import { View, Image, Text, Linking, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export interface IOccurrence {
    address?: string;
    clientName?: string;
    operatorName?: string;
    typeOrder: string;
    uuid?: string;
    id: number;
}

interface OccurrenceProps {
    occurrence: IOccurrence;
}

const OccurrenceItem: React.FC<OccurrenceProps> = ({occurrence, children}) => {
    const { navigate } = useNavigation();

    function handleNavigateToOccurrences(id: number) {
        navigate('OccurrenceDetailPage', {id});
    }

    return ( 
        <View style={styles.container} >
                <TouchableOpacity onPress={() => { handleNavigateToOccurrences(occurrence.id) }}>
                    <View style={styles.container} >
                        <View style={styles.itemTitle} >
                            <Text style={[styles.itemTitleTitle]}>{occurrence.typeOrder} </Text>    
                            <View style={styles.itemTitleSub} >
                                <Text style={styles.itemTitleIcon}>
                                    <Feather name="map" size={20} color="#9DADB8" />
                                </Text>    
                                <Text style={styles.itemTitleSubTitle}>{occurrence.address} </Text>    
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
        </View>
    );
}

export default OccurrenceItem;