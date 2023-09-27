import About from "./components/About"
import Home from "./components/Home"

function App() {

  const Ob={
    title: "Aktarujjaman",
    num:100,
    isArray: [1,2,3,4,5,6]
  }
  const Ob2={
    title: "Aktarujjaman Himu",
    num:200,
    isArray: [1,2,3,4,5,6,7,8,9]
  }
  return (
    <>
      <Home></Home>
      <About val={Ob}></About>
      <About val={Ob2}></About>
    </>
  )
}
export default App
