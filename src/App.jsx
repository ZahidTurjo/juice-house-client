import { useLoaderData } from "react-router-dom"
import JuiceCard from "./components/JuiceCard";


function App() {
 const juices=useLoaderData()
 console.log(juices);

  return (
    <div className="m-20">
     
      <h1>Tasty Juice:{juices.length}</h1>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
     {
        juices?.map(juice=> <JuiceCard key={juice._id} juice={juice}></JuiceCard>)
      }
     </div>
      
      
    </div>
  )
}

export default App
