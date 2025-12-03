import Navbar from './navbar/Navbar'
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react'
import Herosection from './components/herosection/Herosection'
import Form from './components/Form'
import Statistics from './components/Statistics'
import Footer from './navbar/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <SignedIn>
        <Herosection/>
        <Form/>
        <Statistics/>
      </SignedIn>
      <SignedOut>
        <div className='flex justify-center items-center h-[80vh]'>
          <SignIn/>
        </div>
      </SignedOut>
      <Footer/>
    </>
  )
}

export default App