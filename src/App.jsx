import './styles/App.css'
import { Display } from './components/Display.jsx'
import { Keys } from './pages/Keys.jsx'
export const App = () => {
  return (
    <div className="app">
      < Display />
      < Keys />
    </div>
  )
}