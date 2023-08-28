import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import WebDevPage from "./pages/WebDevPage"
import MentoringPage from "./pages/MentoringPage"
import MusicPage from "./pages/MusicPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/webdev" element={<WebDevPage />} />
          <Route path="/mentor" element={<MentoringPage />} />
          <Route path="/music" element={<MusicPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
