import React from 'react'
import { View, Button, Text } from 'react-native'

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 40, marginVertical: 30 }}>Welcome</Text>
    <Button
      title="Page1 Tab Navigator"
      onPress={() => navigation.navigate('Tab', { screen: 'Page1' })}
    />
  </View>
)
