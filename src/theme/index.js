import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native'

import { adjustToWidth, adjustFont, adjustToWidthPrecisely } from '../utils/styleHelpers'
import { defaultDimensions } from '../utils/constants'

const { height, width } = Dimensions.get('window')

const isIos = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'
const isSmallScreen = width / height >= 0.56

const borderRadius = {
  sm: adjustToWidth(5),
  md: adjustToWidth(8),
  lg: adjustToWidth(14),
}

const headerWrapperHeight = adjustToWidth(44)
const tabBarHeight = adjustToWidth(49)
const statusBarOffset = isAndroid ? StatusBar.currentHeight : 0
const headerDimensions = {
  tabBarHeight,
  statusBarOffset,
  height: headerWrapperHeight,
  fullHeight: headerWrapperHeight + statusBarOffset,
}

const colors = Object.freeze({
  black: '#000000',
  black30: 'rgba(0, 0, 0, 0.3)',
  black70: 'rgba(0, 0, 0, 0.7)',
  black80: 'rgba(0, 0, 0, 0.8)',
  black90: 'rgba(0, 0, 0, 0.9)',
  white: '#ffffff',
  white45: 'rgba(255, 255, 255, 0.45)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white80: 'rgba(255, 255, 255, 0.8)',
  green: '#34C759',
  theme: '#FF4680',
  theme2: '#4A80F0',
  blue: '#4a80f0',
  textBlue: '#4518DB',
  greyBg: '#F6F9FC',
  greyExtraLight: '#EDF2F4',
  greyLight: '#F1F4F8',
  greyLighten: '#C7D4E5',
  grey: '#8D99AE',
  greyDarken: '#5C6378',
  greyDark: '#2B2D42',
  dark: '#464C5D',
  text: '#2B2D42',
  textSecondary: '#B3B4BB',
  error: '#FF3B30',
  disabled: 'rgba(43, 45, 66, 0.25)',

  disabledText: 'rgba(43, 45, 66, 0.3)',
  disabledBorder: 'rgba(43, 45, 66, 0.08)',
  transparent: 'rgba(0, 0, 0, 0)',
  sheetText: '#007AFF',
  placeholder: '#e1e4e8',
})

const baseText = {
  color: colors.text,
}

const titleHuge = {
  ...baseText,
  fontSize: adjustFont(60),
  lineHeight: adjustFont(70),
  letterSpacing: adjustToWidthPrecisely(0.25),
}
const titleHugeBold = {
  ...titleHuge,
  fontWeight: '700',
}
const titleLarge = {
  ...baseText,
  fontSize: adjustFont(34),
  lineHeight: adjustFont(41),
  letterSpacing: adjustToWidthPrecisely(0.37),
}
const titleLargeBold = {
  ...titleLarge,
  fontWeight: '700',
}
const title1 = {
  ...baseText,
  fontSize: adjustFont(28),
  lineHeight: adjustFont(34),
  letterSpacing: adjustToWidthPrecisely(0.37),
}
const title1Bold = {
  ...title1,
  fontWeight: '700',
  letterSpacing: adjustToWidthPrecisely(0.87),
}
const title2 = {
  ...baseText,
  fontSize: adjustFont(22),
  lineHeight: adjustFont(28),
  letterSpacing: adjustToWidthPrecisely(0.35),
}
const title2Bold = {
  ...title2,
  fontWeight: '700',
  letterSpacing: adjustToWidthPrecisely(0.8),
}
const title3 = {
  ...baseText,
  fontSize: adjustFont(20),
  lineHeight: adjustFont(25),
  letterSpacing: adjustToWidthPrecisely(0.38),
}
const title3Bold = {
  ...title3,
  fontWeight: '600',
}
const headline = {
  ...baseText,
  fontWeight: '600',
  fontSize: adjustFont(17),
  lineHeight: adjustFont(22),
  letterSpacing: adjustToWidthPrecisely(-0.41),
}
const callout = {
  ...baseText,
  fontSize: adjustFont(16),
  lineHeight: adjustFont(21),
  letterSpacing: adjustToWidthPrecisely(-0.32),
}
const calloutBold = {
  ...callout,
  fontWeight: '600',
}
const subHeadline = {
  ...baseText,
  fontSize: adjustFont(15),
  lineHeight: adjustFont(20),
  letterSpacing: adjustToWidthPrecisely(-0.24),
}
const subHeadlineBold = {
  ...subHeadline,
  fontWeight: '600',
}
const body = {
  ...baseText,
  fontSize: adjustFont(17),
  lineHeight: adjustFont(22),
  letterSpacing: adjustToWidthPrecisely(-0.41),
}
const bodyBold = {
  ...body,
  fontWeight: '600',
}
const footnote = {
  ...baseText,
  fontSize: adjustFont(13),
  lineHeight: adjustFont(18),
  letterSpacing: adjustToWidthPrecisely(-0.08),
}
const footnoteBold = {
  ...footnote,
  fontWeight: '600',
}
const caption1 = {
  ...baseText,
  fontSize: adjustFont(12),
  lineHeight: adjustFont(16),
}
const caption1Bold = {
  ...caption1,
  fontWeight: '500',
}
const caption2 = {
  ...baseText,
  fontSize: adjustFont(11),
  lineHeight: adjustFont(13),
  letterSpacing: adjustToWidthPrecisely(0.06),
}
const caption2Bold = {
  ...caption2,
  fontWeight: '500',
}

const upperCase = {
  textTransform: 'uppercase',
}

const underline = {
  textDecorationLine: 'underline',
}

const sectionText = {
  ...subHeadline,
  color: colors.greyDarken,
}

const errorText = {
  color: colors.error,
}

const textStyles = StyleSheet.create({
  baseText,
  titleHuge,
  titleHugeBold,
  titleLarge,
  titleLargeBold,
  title1,
  title1Bold,
  title2,
  title2Bold,
  title3,
  title3Bold,
  headline,
  callout,
  calloutBold,
  subHeadline,
  subHeadlineBold,
  body,
  bodyBold,
  footnote,
  footnoteBold,
  caption1,
  caption1Bold,
  caption2,
  caption2Bold,
  upperCase,
  underline,
  sectionText,
  errorText,
})

const coloredDot = (size, color = colors.white) => ({
  width: adjustToWidth(size),
  height: adjustToWidth(size),
  borderRadius: adjustToWidth(size / 2),
  backgroundColor: color,
})

const ui = StyleSheet.create({
  colorDot: coloredDot(24),
  bullet: coloredDot(7, colors.white45),
  bulletActive: coloredDot(7, colors.white),
})

const helpers = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  safeArea: {
    flex: 1,
    paddingTop: statusBarOffset,
  },
  mt10: {
    marginTop: adjustToWidth(10),
  },
  mb10: {
    marginBottom: adjustToWidth(10),
  },
  mv10: {
    marginVertical: adjustToWidth(10),
  },
  // layout margins
  mt8: {
    marginTop: adjustToWidth(8),
  },
  mt16: {
    marginTop: adjustToWidth(16),
  },
  mb16: {
    marginBottom: adjustToWidth(16),
  },
  ml16: {
    marginLeft: adjustToWidth(16),
  },
  mr16: {
    marginRight: adjustToWidth(16),
  },
  ml28: {
    marginLeft: adjustToWidth(28),
  },
  ml59: {
    marginLeft: adjustToWidth(59),
  },
  mx16: {
    marginHorizontal: adjustToWidth(16),
  },
  mx4: {
    marginHorizontal: adjustToWidth(4),
  },
  my16: {
    marginVertical: adjustToWidth(16),
  },
  ma16: {
    margin: adjustToWidth(16),
  },
  // negative helpers
  ml16n: {
    marginLeft: adjustToWidth(-16),
  },
  mr16n: {
    marginRight: adjustToWidth(-16),
  },
  mx16n: {
    marginHorizontal: adjustToWidth(-16),
  },
  mt8n: {
    marginTop: adjustToWidth(-8),
  },
  mt16n: {
    marginTop: adjustToWidth(-16),
  },

  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.black80,
  },
  hiddenButtonWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9999,
  },
  hiddenButton: {
    width: adjustToWidth(50),
    height: adjustToWidth(50),
  },
  homeBar: {
    width: '100%',
    marginVertical: adjustToWidth(8),
  },
  flexColumnCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hitSlop: {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  },
})

const buttons = StyleSheet.create({
  headerActionWrapper: {
    height: adjustToWidth(44),
    minWidth: adjustToWidth(44),
    ...helpers.flexCenter,
  },
  sideActionWrapper: {
    height: adjustToWidth(44),
    paddingHorizontal: adjustToWidth(8),
    ...helpers.flexCenter,
  },
  headerActionText: {
    ...textStyles.body,
    color: colors.theme2,
  },
})

const safeAreaEdges = {
  top: ['top'],
  bottom: ['bottom'],
  both: ['top', 'bottom'],
}

export default {
  defaultDimensions,
  isIos,
  isAndroid,
  isSmallScreen,
  headerDimensions,
  helpers,
  colors,
  borderRadius,

  screenWidth: width,
  screenHeight: height,

  ui,
  textStyles,
  buttons,
  safeAreaEdges,
}
