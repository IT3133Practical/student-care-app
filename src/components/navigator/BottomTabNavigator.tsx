import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, StyleSheet } from 'react-native'
import Courses from '../../screen/course/Course'
import Profile from '../../screen/profile/Profile'
import Subject from '../../screen/subject/Subject'

type BottomTabParamList = {
  Profile: { user: any }
  Courses: { user: any }
  Subjects: { user: any }
}

const Tab = createBottomTabNavigator<BottomTabParamList>()

type BottomTabNavigatorProps = {
  route: { params: { user: any } }
}

export default function BottomTabNavigator({ route }: BottomTabNavigatorProps) {
  const { user } = route.params

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource

          if (route.name === 'Profile') {
            iconSource = require('../../assets/icons/profile.png')
          } else if (route.name === 'Courses') {
            iconSource = require('../../assets/icons/course.png')
          } else if (route.name === 'Subjects') {
            iconSource = require('../../assets/icons/subjects.png')
          }

          return (
            <Image
              source={iconSource}
              style={[styles.icon, { tintColor: focused ? '#4b0150' : '#aaa' }]}
            />
          )
        },
        tabBarActiveTintColor: '#4b0150',
        tabBarInactiveTintColor: '#aaa',
      })}
    >
      <Tab.Screen name="Profile" component={Profile} initialParams={{ user }} />
      <Tab.Screen name="Courses" component={Courses} initialParams={{ user }} />
      <Tab.Screen name="Subjects" component={Subject} initialParams={{ user }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})
