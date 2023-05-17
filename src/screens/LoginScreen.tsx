import React, { useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { 
    Alert, 
    Keyboard, 
    KeyboardAvoidingView, 
    Platform, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyle } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any>{}

const LoginScreen = ({navigation}: Props) => {

    const {signIn, errorMessage, removeError} = useContext(AuthContext)

    const {
        email,
        password,
        onChange
    } = useForm({
        email: '',
        password: ''
    })

    useEffect(() => {
        if(errorMessage.length === 0) return;

        Alert.alert(
            'Login incorrecto', 
            errorMessage,
            [
                {
                    text: 'Ok',
                    onPress: removeError
                }
            ]
            )

    }, [errorMessage])
    

    const onLogin = () => {
        console.log({email, password})
        Keyboard.dismiss()
        signIn({correo: email, password})
    }

  return (
    <>
        <Background />
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding':'height'}
        >
            <View style={loginStyle.formContainer}>
                <WhiteLogo />
                <Text style={loginStyle.title}>Iniciar sesión</Text>

                <Text style={loginStyle.label}>Correo</Text>
                <TextInput 
                    placeholder='Ingrese su correo'
                    placeholderTextColor="rgba(000,000,000,0.4)"
                    keyboardType='email-address'
                    style={loginStyle.inputField}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(value) => onChange(value, 'email')}
                    value={email}
                />

                <Text style={loginStyle.label}>Contraseña</Text>
                <TextInput 
                    placeholder='*******'
                    secureTextEntry={true}
                    placeholderTextColor="rgba(000,000,000,0.4)"
                    style={loginStyle.inputField}
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='password'
                    onChangeText={(value) => onChange(value, 'password')}
                    value={password}
                />

                <View style={loginStyle.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyle.button}
                        onPress={onLogin}
                    >
                        <Text style={loginStyle.textButton}>INGRESAR</Text>
                    </TouchableOpacity>
                </View>

                <View style={loginStyle.or}>
                    <Text style={loginStyle.orText}>O</Text>
                </View>

                <View style={loginStyle.registerContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('RegisterScreen')}
                    >
                        <Text style={loginStyle.registerText}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    </>
  )
}

export default LoginScreen