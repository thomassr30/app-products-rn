import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyle } from '../theme/loginTheme'

const LoginScreen = () => {
  return (
    <>
        <Background />
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
        />

        <Text style={loginStyle.label}>Contraseña</Text>
        <TextInput 
            placeholder='*******'
            placeholderTextColor="rgba(000,000,000,0.4)"
            keyboardType='email-address'
            style={loginStyle.inputField}
            autoCapitalize='none'
            autoCorrect={false}
        />

        <View style={loginStyle.buttonContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={loginStyle.button}
            >
                <Text style={loginStyle.textButton}>INGRESAR</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default LoginScreen