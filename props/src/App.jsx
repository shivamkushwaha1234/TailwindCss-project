import './App.css'
import Box from './Box.jsx'
function App(props) {
  console.log(props)
  return (
    <>
      <Box name="Ankush" profession="Software Engineer"/>
      <Box name="Virtual Code" profession="Web Developer"/>
    </>
  )
}

export default App
