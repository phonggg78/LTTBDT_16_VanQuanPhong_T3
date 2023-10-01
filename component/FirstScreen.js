import { View, Image, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
function FirstScreen() {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.circleWrapper}>
                <svg style={styles.circle} width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="71" cy="71" r="63.5" stroke="black" stroke-width="15"/>
                </svg>
            </View>
            <Text style={styles.title}>GROW<br /> YOUR BUSINESS</Text>
            <Text style={styles.description}>We will help you to grow your business using <br /> online server</Text>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default FirstScreen;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#00CCF9',
        width: '100%',
    },
    circleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
        marginTop: '50px',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '25px',
        marginTop: '50px',
    },
    description: {
        fontSize: '15px',
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontWeight: 700,
        marginTop: '50px',
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '50px',
    },
    btn: {
        backgroundColor: '#E3C000',
        color: '#000',
        width: '40%',
        padding: '10px',
        borderRadius: 15,
    },
    text: {
        fontWeight: 700,
        fontSize: '25px',
        textAlign: 'center',   
    },
})
