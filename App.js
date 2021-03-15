import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Modal from './src/screens/Modal'
import Modal2 from './src/screens/Modal2'
import Welcome from './src/screens/Welcome'
import Page1 from './src/screens/Page1'
import Page2 from './src/screens/Page2'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Page1"
      animationEnabled={true}
      swipeEnabled={true}
      options={{ headerShown: false }}
    >
      <Tab.Screen name="Page1" component={Page1} />
      <Tab.Screen name="Page2" component={Page2} />
    </Tab.Navigator>
  )
}

const MainStack = () => (
  <Drawer.Navigator initialRouteName={'Welcome'}>
    <Drawer.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Drawer.Screen name="Tab" component={TabNav} options={{ headerShown: false }} />
  </Drawer.Navigator>
)

const ModalStack = () => (
  <Stack.Navigator
    mode="modal"
    options={{
      headerShown: false,
    }}
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <Stack.Screen name="Modal1" component={Modal} />
    <Stack.Screen name="Modal2" component={Modal2} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      >
        <Stack.Screen name="Main" component={MainStack} />
        <Stack.Screen name="Modal" component={ModalStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
