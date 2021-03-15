import React from 'react'
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'

export default ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Pressable
      style={{ ...StyleSheet.absoluteFillObject, flex: 1, backgroundColor: '#f00', opacity: 0.2 }}
      onPress={() => navigation.goBack()}
    />
    <TouchableOpacity style={{ backgroundColor: 'white', padding: 20 }}>
      <Text>Modal 2</Text>
    </TouchableOpacity>
  </View>
)
