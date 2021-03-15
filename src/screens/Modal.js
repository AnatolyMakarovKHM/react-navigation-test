import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'

export default ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Modal', { screen: 'Modal2' }), 1000)
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pressable
        style={{ ...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: '#0f2', opacity: 0.2 }}
        onPress={() => navigation.goBack()}
      />
      <Text>Modal 1 content</Text>
      <TouchableOpacity style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Modal</Text>
      </TouchableOpacity>
    </View>
  )
}
