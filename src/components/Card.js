import { useState } from "react";

function Card({id,image,info,price,name, removeTour}){
    const [readmore, setReadmore] = useState(false);
    const description =  readmore ? info:`${info.substring(0,100)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="card p-4  shadow-lg shadow-cyan-500/50 rounded-xl">
           <div className="h-[220px] overflow-clip">
           <img src={image} alt="IMAGE" className="image"></img>
           </div>
            <div className="tour-info p-2">
                <div className="tour-details">
                    <h4 className="tour-price text-xl text-green-800 font-bold">{price}</h4>
                    <h4 className="tour-name text-xl font-bold">{name}</h4>
                </div>

                <div className="description text-sm py-2">
                    {description}
                    <span className="read-more capitalize cursor-pointer text-sky-600" onClick={readmoreHandler}>
                        {readmore ? `show less`:`read more`}
                    </span>
                </div>
            </div>
           <div className="text-center">
            <button className="btn-red
                bg-red-200
                w-[200px]
                mx-auto
                inline-block
                p-3
                rounded-md
                text-sm
                font-bold
                border
                border-red-300
                transition-all
                hover:bg-[#040419]
                hover:text-white
                " onClick={()=>removeTour(id)}>Not Interested</button>
           </div>
        </div>
    )
}

export default Card;