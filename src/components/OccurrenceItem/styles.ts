import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderColor: '#e6e6f0',
        marginBottom: 3,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        flex:2,
        flexDirection:"row",
        justifyContent:'space-between', 
    },
    itemTitle: {
        marginBottom: 10,
        padding: 10,
        color: '#222222'
    }, 
    itemTitleTitle: {
        color: '#222222',
        fontSize: 21,
    },
    itemTitleSub: {
        flex:1,
        flexDirection:"row",
    },
    itemTitleSubTitle: {
        color: '#9DADB8',
        fontSize: 15,
        marginTop: 5
    },
    itemTitleIcon: {
        color: '#9DADB8',
        fontSize: 15,
        marginTop: 5,
        marginRight: 10
    },
    itemPrice: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 10,
        padding: 10,
        flexDirection:"row",
    },
    itemPriceValue: {
        color: '#222222',
        fontWeight: 'bold',
        fontSize: 19
    },
    itemPriceDisabled: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 19
    },
    textLineThrough: {
        textDecorationLine: 'line-through'
    },
    itemPriceIcon: {
        marginRight: 10,
    }
   
});

export default styles;
