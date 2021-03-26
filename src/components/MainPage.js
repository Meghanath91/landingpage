import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import SecondPage from './SecondPage'
// import ThankYou from './ThankYou'

export default function MainPage() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Header />
      <SecondPage />
      {/* <ThankYou /> */}
    </div>
  )
}
