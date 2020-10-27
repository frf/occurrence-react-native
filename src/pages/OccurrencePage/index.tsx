import React, { useState,useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import OccurrenceItem, {IOccurrence} from '../../components/OccurrenceItem';
import Header from '../../components/Header';
import api from '../../services/api';

import styles from './styles';

function OccurrencePage() {
  const [occurrences, setOccurrences] = useState([]);

  useEffect(() => {
    api.get('occurrences')
    .then(response => {
      console.log(response.data.items);
      setOccurrences(response.data.items);
    })
  }, []);

  return (
    <View style={styles.container} >
      <Header title="Occurrences" 
        headerRight={(
            <BorderlessButton >
                <Feather name="search" size={26} color="#566475" />
            </BorderlessButton>
        )}>
      </Header>
      <ScrollView>
            {
              occurrences.map((occurrence: IOccurrence) => {
                return (
                    <OccurrenceItem key={occurrence.id} occurrence={occurrence}></OccurrenceItem>
                )
              })
            }     
        </ScrollView>
    </View>
  );
}

export default OccurrencePage;