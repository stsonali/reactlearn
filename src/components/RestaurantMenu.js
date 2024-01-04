import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { MENU_URL } from '../utils/constants';

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);
    const [menuList,setMenuList] = useState([]);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(MENU_URL+resId);
        const res = await data.json();
        setResInfo(res?.data);  
        if(res?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards){
            setMenuList(res?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }

        else setMenuList(res?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories?.itemCards);
         console.log(res);
    }
      
    if(!resInfo){
        return <div>No Data Found</div>
    }
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
               {menuList.map(el=><li key={el.card.info.id}>{el.card.info.name}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu