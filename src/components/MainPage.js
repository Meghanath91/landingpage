import { CssBaseline } from '@material-ui/core'
import React from 'react'
import FourthPage from './FourthPage'
import Header from './Header'
import Navbar from './Navbar'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
// import ThankYou from './ThankYou'

export default function MainPage() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Header />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      {/* <ThankYou /> */}
    </div>
  )
}
