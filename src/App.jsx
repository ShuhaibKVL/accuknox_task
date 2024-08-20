import { useState } from 'react'
import './App.css'
import Navbar from './layout/Navbar'
import Body from './layout/Body'
import ErrorBoundary from './lib/ErrorBoundary'
import { ToastProvider } from '@radix-ui/react-toast'
import { Toaster } from './components/ui/toaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
      <Navbar></Navbar>
      <ToastProvider />
      <Toaster />
      <div className='px-5 xl:px-16 bg-[#dcf2ff]'>
        <Body></Body>
      </div>
    </ErrorBoundary>
  )
}

export default App
