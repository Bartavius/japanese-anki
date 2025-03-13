import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { useNavigate } from 'react-router'

export function Template() {
  const [alterLogo, setAlterLogo] = useState(false)
  const nav = useNavigate();

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(!alterLogo)
  }, [alterLogo])

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo' bindtap={onTap}>
            {alterLogo
              ? <image src={reactLynxLogo} className='Logo--react' />
              : <image src={lynxLogo} className='Logo--lynx' />}
          </view>
          <text className='Title'>React</text>
          <text className='Subtitle'>on Lynx</text>
        </view>
        <view className='Content'>
          <image src={arrow} className='Arrow' />
          <text className='Description'>Tap the logo and have fun!</text>
          <text className='Hint'>
            Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
            to see updates!
          </text>
          <view>
      <text bindtap={() => nav('/home')}>Navigate to Home</text>
      <text bindtap={() => nav('/profile')}>Navigate to Profile</text>
      <text bindtap={() => nav('/')}>Navigate to Menu (this page)</text>
      <text bindtap={() => nav('/template')}>Navigate to Template</text>
    </view>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  )
}
