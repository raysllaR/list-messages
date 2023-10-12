import { CardContent } from './style'
import ChatHeader from './components/header'
import ChatBody from './components/body'
import { ArrayMessages } from './data/index'

function App() {
  return (
    <>
      <CardContent>
        <ChatHeader />
        <ChatBody messages={ArrayMessages} />
      </CardContent>
    </>
  )
}

export default App
