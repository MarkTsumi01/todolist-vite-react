
import './App.css'
import Header from './components/Header'
import { IconA, IconB } from './components/Icon'
import Image from './components/Image'

function App() {

  return (
    <>
      <Header />
      Hello Mark
      <IconA />
      <IconB />
      <Image  imageUrl='https://fastly.picsum.photos/id/1068/200/300.jpg?hmac=ICIwYXRGTpDxBPZAI7V8YxGtBBanV8Dfbe_DLNKtYcE' />
    </>
  )
}

export default App
