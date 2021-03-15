import { Dimensions, PixelRatio } from 'react-native'
import { defaultDimensions } from './constants'

const themeDeviceWidth = defaultDimensions.width
const deviceWidth = Dimensions.get('window').width

// main adaptive helper
export const adjustToWidth = (x, defaultWidth = themeDeviceWidth) =>
  PixelRatio.roundToNearestPixel((x * deviceWidth) / defaultWidth)

export const getPercentSize = (value) => {
  const res = value / deviceWidth
  return Number(res.toFixed(4))
}

export const percentToValue = (percent) => {
  return deviceWidth * percent
}

// default fonts min = 10, due to UI tips from google
export const scaleMin = (x1, min, scale) => (x1 * scale > min ? x1 * scale : min)
// adjust fonts to some custom scale like Signup checkboxes
export const scaleFont = (x, scale) => scaleMin(x, 8, scale)
// adjust fonts to screen width
export const adjustFont = (x, defaultWidth = themeDeviceWidth) =>
  scaleFont(x, deviceWidth / defaultWidth)

// use it wisely because there is roundToNearestPixel what can cause graphic artifacts
export const adjustToWidthPrecisely = (x, defaultWidth = themeDeviceWidth) =>
  (x * deviceWidth) / defaultWidth
