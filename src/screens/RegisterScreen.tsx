import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyle } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { Background } from '../components/Background'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any>{}

const RegisterScreen = ({navigation}: Props) => {

    const {signUp, errorMessage, removeError} = useContext(AuthContext)

    useEffect(() => {
        if(errorMessage.length === 0) return;

        Alert.alert(
            'Rgistro incorrecto', 
            errorMessage,
            [
                {
                    text: 'Ok',
                    onPress: removeError
                }
            ]
            )

    }, [errorMessage])

  const {
    nombre,
    correo,
    password,
    onChange
} = useForm({
    nombre: '',
    correo: '',
    password: ''
})

const onRegister = () => {
    console.log({correo, password, nombre})
    Keyboard.dismiss()
    signUp({
        nombre,
        password, 
        correo
    })
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
                <Text style={loginStyle.title}>Registrarme</Text>

                <Text style={loginStyle.label}>Nombre</Text>
                <TextInput 
                    placeholder='Ingrese su nombre'
                    placeholderTextColor="rgba(000,000,000,0.4)"
                    keyboardType='email-address'
                    style={loginStyle.inputField}
                    autoCapitalize='words'
                    autoCorrect={false}
                    onChangeText={(value) => onChange(value, 'nombre')}
                    value={nombre}
                />

                <Text style={loginStyle.label}>Correo</Text>
                <TextInput 
                    placeholder='Ingrese su correo'
                    placeholderTextColor="rgba(000,000,000,0.4)"
                    keyboardType='email-address'
                    style={loginStyle.inputField}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(value) => onChange(value, 'correo')}
                    value={correo}
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
                        onPress={onRegister}
                    >
                        <Text style={loginStyle.textButton}>REGISTRARME</Text>
                    </TouchableOpacity>
                </View>

                <View style={loginStyle.or}>
                    <Text style={loginStyle.orText}>O</Text>
                </View>

                <View style={loginStyle.registerContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('LoginScreen')}
                    >
                        <Text style={loginStyle.registerText}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    </>
  )
}

export default RegisterScreen