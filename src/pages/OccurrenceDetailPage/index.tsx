import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import HeaderIn from '../../components/HeaderIn';
import { Feather } from '@expo/vector-icons';
import TicketImg from '../../assets/images/ticket.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';

function OccurrenceDetailPage({ route, navigation }) {

    const { navigate } = useNavigation();
    const { id } = route.params;
    const [occurrence, setOccurrence] = useState({});
    
    useEffect(() => {
        loadData();
      }, []);

    console.log(route.params, id)

    const loadData = async () => {
        // api.get('api/spendings/show?id=' + id)
        // .then(response => {
        //     console.log(response.data)
        //     setSpendin(response.data);
        // }).catch((error) => {
        //     console.log(error)
        // })
    }

    return ( 
        <View style={styles.container} >
            <HeaderIn />

            <View style={styles.containerLine} >
                <View  >
                    <Feather name="calendar" size={30} color="#9DADB8" />
                </View>
                <View style={styles.titleLine}>
                    <Text style={styles.dateTitleText}>XXXX</Text>
                </View>
            </View>

            <View style={styles.containerLine} >
                <View style={styles.itemTitle} >
                    <Text style={styles.itemTitleTitle}>AAAAA</Text>    
                    <View style={styles.itemTitleSub} >
                        <Text style={styles.itemTitleIcon}>
                            <Feather name="coffee" size={23} color="#9DADB8" />
                        </Text>    
                        <Text style={styles.itemTitleSubTitle}>BBB</Text>    
                    </View>
                </View>
            </View>

            <View style={styles.containerLineBox} >
                <View style={styles.itemTitle} >
                    <View style={styles.itemTitleSub} >
                        <Text style={styles.itemIconBox}>
                            <Feather name="calendar" size={33} color="#9DADB8" />
                        </Text> 
                        <View style={{flexDirection: 'column'}} >
                            <Text style={[styles.itemTitleSubTitle,styles.itemTitleSubTitleOverride]}>aaaa</Text>    
                            <Text style={styles.itemSubTitleIcon}>vvv</Text>    
                        </View>   
                    </View>
                </View>
            </View>

            <View style={styles.containerLineImage} >
                <View>
                    <Image style={styles.image} source={TicketImg}/>
                </View>
            </View>
        </View>
    );
}

export default OccurrenceDetailPage;