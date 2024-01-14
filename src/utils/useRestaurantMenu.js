import {useState, useEffect} from "react";
import { MENU_URL } from './constants';

const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(MENU_URL+resId);
        const res = await data.json();
        
        if(res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards){
            setResInfo(res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }

        else setResInfo(res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories?.itemCards);
    
    }
    console.log(resInfo); 

    return resInfo;
}

export default useRestaurantMenu