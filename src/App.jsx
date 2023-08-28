import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import WebDevPage from "./pages/WebDevPage"
import MentoringPage from "./pages/MentoringPage"
import MusicPage from "./pages/MusicPage"
import { Provider } from "react-redux"
import { persistor, store } from "./store/store"
import { PersistGate } from "redux-persist/integration/react"

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/webdev" element={<WebDevPage />} />
              <Route path="/mentor" element={<MentoringPage />} />
              <Route path="/music" element={<MusicPage />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
