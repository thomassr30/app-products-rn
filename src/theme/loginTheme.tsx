import { StyleSheet } from "react-native"
import { Background } from '../components/Background';

export const loginStyle = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    label: {
        marginTop: 25,
        marginBottom: 5,
        color: 'white',
        fontWeight: 'bold',
        marginLeft:30
    },
    inputField: {
        backgroundColor: 'white',
        paddingVertical: 5,
        marginHorizontal: 25,
        borderRadius: 20,
        paddingLeft: 10,
        color: "rgba(000,000,000,0.6)",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 50,
        paddingVertical: 12,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    textButton: {
        color: '#5856D6',
        fontWeight: "bold"
    },
    or: {
        alignItems: 'center',
        marginVertical: 20
    },
    orText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    registerContainer: {
        alignItems: 'center',
    },
    registerText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20
    }

    
})