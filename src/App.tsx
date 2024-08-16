import Nav from "./Nav"

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="bg-gray-300">
      <Nav />
      <div className="flex col-span-2 gap-1 m-1">
        <aside className="bg-gray-400 p-6">Side</aside>
        <div className="bg-white rounded-lg m-0">
gg
        </div>
        <main className="flex-grow bg-gray-500 p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2 m-2">
            {numbers.map(number => (
              <div
                className={number % 2 !== 0 ? "bg-blue-500 p-6 rounded-lg md:col-span-2" : "bg-purple-500 p-6 rounded-lg md:col-span-1"}
              >{number}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
