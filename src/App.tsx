import { useState } from 'react'
import Comp1 from "@/components/comp1";
import {Outlet} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Top Component
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
