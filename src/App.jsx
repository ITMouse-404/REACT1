import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestimonialCard from './Card'
import Huyimg from './assets/myavatar.jpg';
import DHuyimg from './assets/dhuy.jpg';
import { FakeComponent, SecondComponent } from './component/SecondComponent'
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-8 p-4">
      
      <div className="flex justify-center space-x-6">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16 w-16" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-gray-800">REACT & L.G.J</h1>

      <div className="flex flex-col items-center">
        <button 
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition shadow-md"
          onClick={() => setCount((count) => count + 100)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600 font-medium">Lam Gia Huy & Lam Dinh Huy</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <TestimonialCard
          quote= "Thẻ của Gia Huy nè"
          name = "Lam Gia Huy"
          tittle = "Stu of CTU"
          avatar = {Huyimg}
          />
          <TestimonialCard
          quote= "Thẻ của Đình Huy nè"
          name = "Lam Dinh Huy"
          tittle = "Stu of CTU"
          avatar = {DHuyimg}
          />
      </div>
      <div>
        <SecondComponent />
        <FakeComponent />
      </div>
    </div>
  )
}

export default App