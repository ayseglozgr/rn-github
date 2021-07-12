import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from './Components/Profile/Profile'
import UsersScreen from './Components/Users/Users'
import SettingsScreen from './Components/Settings/Settings'

import ProfileIcon from './Assets/profile.png'
import SettingsIcon from './Assets/settings.png'
import UsersIcon from './Assets/users.png'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <Image source={ProfileIcon} style={{ width: 25, height: 25, }} />
          }}
        />
        <Tab.Screen
          name="Users"
          component={UsersScreen}
          options={{
            tabBarIcon: () => <Image source={UsersIcon} style={{ width: 25, height: 25 }} />
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: () => <Image source={SettingsIcon} style={{ width: 25, height: 25 }} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App