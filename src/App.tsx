import HumanBody from "./components/HumanBody"
import Button from "./components/Button"

export default function App() {
  return (
    <div className="bg-secondary">
      <header className="flex justify-between items-center w-full h-24 border-b-2 border-gray-300">
        <div className="m-5">
         <h1>Pain Management</h1>
        </div>
        <div>
          <button className="m-5 p-3 bg-gray-300 rounded-lg">About</button>
          <button className="m-5 p-3 bg-gray-300 rounded-lg">Login</button>
        </div>
      </header>
      <main className="flex flex-col m-10 justify-center items-center">
        <p className="text-lg text-center">
          Welcome to the Pain Management System. This is the future of pain
          management. We are here to help you.
        </p>
        <HumanBody />
        
        <Button onClick={() => console.log("Hello!")} label="Click me!" />
      </main>
      <footer className="flex justify-center items-center">
        <p>&copy; 2024 Pain Management</p>
      </footer>
    </div>
  )
}
