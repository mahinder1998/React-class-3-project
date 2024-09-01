import { useState } from "react";
import "./App.css";
import data from "./data";
import Tours from "./components/Tours";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !==id);
    setTours(newTours);
  }
  

  if(tours.length ===0){
    return(
      <div className="refresh h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">No Tours Left</h1>
        <button className="btn-white
          bg-red-200
          w-[100px]
          mx-auto
          inline-block
          p-2
          rounded-md
          text-sm
          font-bold
          border
          border-red-300
          transition-all
          hover:bg-[#040419]
          hover:text-white
        " onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
   <div className="app">
        <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  );
}

export default App;
