export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-24 border-b-2 border-gray-300">
      <div className="m-5">
        <h1>Pain Management</h1>
      </div>
      <div>
        <button className="m-5 p-3 bg-gray-300 rounded-lg">About</button>
        <button className="m-5 p-3 bg-gray-300 rounded-lg">Login</button>
      </div>
    </header>
  )
}