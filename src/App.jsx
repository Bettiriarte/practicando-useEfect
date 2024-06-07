import { useState } from 'react'
import { useFetch } from './hooks/useFetch';

console.log("fuera del app")
// const fecthData = async (setUser) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await res.json();
//   setUser(data);
// }

const App = () => {
  const [count, setCount] = useState(0);
  // const [user, setUser] = useState(null);

  console.log("app")

  const { data } = useFetch("https://jsonplaceholder.typicode.com/users")

  if (!data) return <div>cargando...</div>

  return (
    <>
      <h1>hola</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count: {count}
      </button>
      <ul>
        {
          data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </>
  );
};

export default App
