import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import { students } from '../../../assets/data/StudentsDb'
import Footer from '../../components/footer/Footer'
import Logo from '../../components/logo/Logo'
import { NavigationProp } from '@react-navigation/native'

interface LoginProps {
  navigation: NavigationProp<any>
  setUser: (user: any) => void
}

export default function Login({ navigation, setUser }: LoginProps) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const login = () => {
    const user = students.find(
      student => student.username === form.username && student.password === form.password
    )
    if (user) {
      setUser(user)
      navigation.navigate('BottomTabs', { user })
    } else {
      setShowErrorMessage(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>STUDENT LOGIN</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={form.username}
          onChangeText={text => {
            setShowErrorMessage(false)
            setForm({ ...form, username: text })
          }}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            value={form.password}
            onChangeText={text => {
              setShowErrorMessage(false)
              setForm({ ...form, password: text })
            }}
          />
          <TouchableOpacity
            style={styles.togglePassword}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {showErrorMessage && (
          <View style={styles.error}>
            <Image
              source={require('../../../assets/icons/error.png')} // Adjust path as per your structure
              style={styles.errorIcon}
            />
            <Text style={styles.errorText}>Please check your username and password</Text>
          </View>
        )}
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  footerContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  title: {
    marginTop: -50,
    paddingBottom: 40,
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 50
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10
  },
  passwordContainer: {
    width: '100%',
    position: 'relative'
  },
  togglePassword: {
    position: 'absolute',
    right: 10,
    top: 15
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4b0150',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  error: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#F3E5F5',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10
  },
  errorIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10
  },
  errorText: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1
  }
})
