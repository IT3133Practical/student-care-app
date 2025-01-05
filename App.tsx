import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/components/navigator/BottomTabNavigator'
import Login from './src/screen/login/Login'

type RootStackParamList = {
  Login: undefined
  BottomTabs: { user: any }
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  const [user, setUser] = useState<any>(null)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTintColor: 'white',
          headerTitle: 'UoV Student Care',
          headerStyle: {
            backgroundColor: '#4b0150',
          },
        }}
      >
        <Stack.Screen name="Login">
          {props => <Login {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} initialParams={{ user }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
