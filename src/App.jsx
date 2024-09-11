import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './Users';
function App() {
  function handleClick()
  {
    alert('Button Clicked')
  }
  function handleClick2()
  {
    alert('Button Clicked 2')
  }
  function addToFive(num)
  {
    alert(num+5);
  }
  return (
    <>
      <h3>React Core Concept 2</h3>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>      
      <button onClick={()=>{alert('Button Click 3')}}>Click 3</button>
      {/* This is tough for apply */}
      <button onClick={()=>{addToFive(4)}}>Click 4</button>
      <Counter></Counter>
      <Team></Team>
      <User></User>
      <Friends></Friends>
    </>
  )
}

export default App
