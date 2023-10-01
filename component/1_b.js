import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

function Cau1b() {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.imgWrapper}>
                <Image style={styles.imgLock} source={require('../assets/lock.png')} />
            </View>
            <Text style={styles.title}>FORGET<br />PASSWORD</Text>
            <Text style={styles.txt}>Provide your account’s email for which you <br /> want to reset your password</Text>
            <View style={styles.btnMailWrapper}>
                <Image style={styles.mailIcon} source={require('../assets/mail.png')} />
                <TextInput style={styles.input} placeholder="Email"/>
            </View>
            <View style={styles.btnNextWrapper}>
                <TouchableOpacity style={styles.btnNext}>   
                    <Text style={styles.nextTxt}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Cau1b;

const styles = StyleSheet.create({
    wrapper: {
        backgroundImage: 'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
        width: '100%',
    },
    imgWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
    },
    imgLock: {
        width: '100px',
        height: '110px',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '25px',
        marginTop: '50px',
    },
    txt: {
        textAlign: 'center',
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '15px',
        marginTop: '50px',
    },
    btnMailWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 30,
    },
    btnMail: {
        width: '80%',
        height: 50,
        backgroundColor: '#c4c4c4',
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#c4c4c4',
        width: 270,
        height: 50,
        fontSize: 18,
        fontWeight: 300,
        fontFamily: 'Roboto',
    },
    mailIcon: {
        width: 50,
        height: 50,
    },
    mailTxt: {
        fontFamily: 'Roboto', 
        fontWeight: 400,
        fontSize: '15px',
        paddingTop: 16,
    },
    btnNextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50
    },
    btnNext: {
        width: '80%',
        height: 50,
        backgroundColor: '#E3C000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nextTxt: {
        fontFamily: 'Roboto', 
        fontWeight: 700,
        fontSize: '15px',
        paddingTop: 16,
    },
})