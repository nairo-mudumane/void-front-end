import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Header } from "./components";
import { Home } from './pages';

export function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  )
}
