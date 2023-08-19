import '../styles/globals.css'
import ChatProvider from "../context/chatContext"
function MyApp({ Component, pageProps }) {
  return (
    <ChatProvider>
    <Component {...pageProps} />
    </ChatProvider>

  )
}

export default MyApp
