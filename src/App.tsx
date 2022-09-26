import React,  { FC } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppRoutes } from './setup/AppRoutes'

import './App.css'

const App: FC = () => {

  return (
    <div className="App">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
