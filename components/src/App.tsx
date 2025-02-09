import './App.css'
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/accordion"}>Accordion</Link>
          </li>
          <li>
            <Link to={"/analogclock"}>AnalogClock</Link>
          </li>
          <li>
            <Link to={"/counter"}>Simple Counter</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
