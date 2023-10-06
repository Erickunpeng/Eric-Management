import { useState } from 'react'
import Comp1 from "@/components/comp1";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        顶级组件
        <Comp1>This is Com1</Comp1>
      </div>
    </>
  )
}

export default App
