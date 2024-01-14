import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import useRestaurantMenu  from "../utils/useRestaurantMenu"

const RestaurantMenu = ()=>{

    
    const { resId} = useParams();
    const resInfo  = useRestaurantMenu(resId);
      
    if(!resInfo){
        return <div>No Data Found</div>
    }
    // const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    
    return (
        <div className="menu">
            {/* <h1>{name}</h1> */}
            <h2>Menu</h2>
            <ul>
               {resInfo.map(el=><li key={el.card.info.id}>{el.card.info.name}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu