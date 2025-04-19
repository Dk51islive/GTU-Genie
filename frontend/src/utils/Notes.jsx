import { useEffect } from 'react'
import { disableScreenshot, disableRightClick } from '../utils/contentProtection'

useEffect(() => {
  disableScreenshot()
  disableRightClick()
}, [])
