import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";

function Cau1d() {
    return ( 
        <View style={styles.wrapper}>
             <Text style={styles.title}>LOGIN</Text>
             <View style={styles.inputWrapper}>
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Password" style={[styles.input, {position: 'relative'}]} />
                <Image style={[styles.imgEye]} source={require('../assets/eye1.png')} />
             </View>
             <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnLoginTxt}>LOGIN</Text>
                </TouchableOpacity>
             </View>
            <View>
                <Text style={styles.txtOption}>When you agree to terms and conditions</Text>
                <Text style={[styles.txtOption, {color: '#5D25FA'}]}>For got your password?</Text>
                <Text style={styles.txtOption}>Or login with</Text>
            </View>
            <View style={styles.btnWrapper2}>
                <TouchableOpacity style={[styles.btnSocial, {backgroundColor: '#4267B2'}]}>
                    <Image style={styles.btnImage1} source={require('../assets/icofacebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnSocial, {backgroundColor: '#0058d9'}]}>
                    <Image style={styles.btnImage2} source={require('../assets/icozalo.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnSocial, styles.btnBorder]}>
                    <Image style={styles.btnImage2} source={require('../assets/icogoogle1.png')} />
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default Cau1d;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        textAlign: 'center',
        marginTop: 50,
    },
    inputWrapper: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#c4c4c4',
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 20,
    },
    imgEye: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 45,
        top: 100,
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },
    btnLogin: {
        backgroundColor: '#E53935',   
        width: 330,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
    },
    btnLoginTxt: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 24,
    },
    txtOption: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },
    btnWrapper2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    },
    btnSocial: {
        width: '28%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnImage1: {
        width: 35,
        height: 35,
    },
    btnImage2: {
        width: 25,
        height: 25,
    },
    btnBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0058d9',
    }
})