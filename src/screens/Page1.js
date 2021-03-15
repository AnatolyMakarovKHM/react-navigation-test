import React from 'react'
import { View, Button, Text } from 'react-native'

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 40, marginVertical: 30 }}>Page 1</Text>
    <Button title="Open Modal" onPress={() => navigation.navigate('Modal', { screen: 'Modal1' })} />
    <Button title="Open Alert" onPress={() => alert('todo!')} />
  </View>
)
