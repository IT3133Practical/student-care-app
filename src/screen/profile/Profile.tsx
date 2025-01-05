import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import { Divider } from 'react-native-paper'
import Footer from '../../components/footer/Footer'
import Logo from '../../components/logo/Logo'

interface User {
  id: number
  name: string
  age: number
  gender: string
  email: string
  phone: string
  address: string
  blood_group: string
  profile_pic: any // Can be `ImageSourcePropType` if using a local image
}

interface ProfileProps {
  route: {
    params: {
      user: User
    }
  }
}

export default function Profile({ route }: ProfileProps) {
  const { user } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.card}>
          <Image source={user.profile_pic} style={styles.image} />
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.description}>
            Age: {user.age} | Gender: {user.gender}
          </Text>
          <Divider style={{ width: '80%', marginVertical: 30, backgroundColor: '#ccc' }} />
          <View style={styles.infoContainer}>
            <Text style={styles.subtitle}>Contact Information</Text>
            <Text style={styles.description}>Email : {user.email}</Text>
            <Text style={styles.description}>Phone : {user.phone}</Text>
            <Text style={styles.description}>Address : {user.address}</Text>
            <Divider style={{ width: '80%', marginVertical: 20, backgroundColor: '#ccc' }} />
            <Text style={styles.subtitle}>Biological Information</Text>
            <Text style={styles.description}>Gender : {user.gender}</Text>
            <Text style={styles.description}>Age : {user.age}</Text>
            <Text style={styles.description}>Blood Group : {user.blood_group}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 50,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    elevation: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
})
