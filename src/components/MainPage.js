import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function MainPage() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Header />
    </div>
  )
}
