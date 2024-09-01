import Card from "./Card";

function Tours({tours, removeTour}){
    return(
        <div className="container">
           <div className="text-center flex justify-center my-10">
                <h2 className="title text-3xl font-bold  border-dotted border-[#000080] border-4
                py-2 px-[60px] rounded-xl 
                w-max
                ">Plan with love</h2>
           </div>
           <div className="cards
            max-w-[1140px]
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            py-4
           ">
               {
                tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
               }
           </div>
        </div>
    )
}


export default Tours;