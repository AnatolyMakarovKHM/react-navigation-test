import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import theme from '../theme'
import { adjustToWidth } from '../utils/styleHelpers'

export const Section = ({ title, style, children, extraMargin, isVisible = true }) =>
  isVisible ? (
    <View style={[cs.section, style]}>
      {title && <Text style={extraMargin ? cs.titleMargin : cs.sectionTitle}>{title}</Text>}
      {children}
    </View>
  ) : null

export const Divider = ({ style }) => <View style={[cs.divider, style]} />

class Layout extends Component {
  static Section = Section
  static Divider = Divider

  render() {
    const { background, backgroundImage, edges, children } = this.props
    const backgroundStyle = {
      backgroundColor: background,
    }

    if (backgroundImage) {
      return (
        <ImageBackground style={theme.helpers.flex1} resizeMode="cover" source={backgroundImage}>
          <SafeAreaView style={[theme.helpers.flex1]} edges={edges}>
            {children}
          </SafeAreaView>
        </ImageBackground>
      )
    }

    return (
      <SafeAreaView style={[theme.helpers.flex1, backgroundStyle]} edges={edges}>
        <KeyboardAvoidingView
          style={theme.helpers.flex1}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

Layout.propTypes = {
  background: PropTypes.string,
  backgroundImage: PropTypes.any,
  edges: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
}

Layout.defaultProps = {
  background: theme.colors.white,
  backgroundImage: undefined,
  edges: theme.safeAreaEdges.both,
}

const cs = StyleSheet.create({
  section: {
    paddingHorizontal: adjustToWidth(16),
    paddingTop: adjustToWidth(8),
    paddingBottom: adjustToWidth(16),
  },
  sectionTitle: {
    ...theme.textStyles.subHeadline,
    marginBottom: adjustToWidth(5),
  },
  titleMargin: {
    ...theme.textStyles.subHeadline,
    marginBottom: adjustToWidth(15),
  },
  divider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.greyLighten,
  },
})

export default Layout
