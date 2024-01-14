import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const onlineStatus = useOnlineStatus();
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8498481&lng=77.6544856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata  = await data.json();
        setlistOfRestaurants(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(!listOfRestaurants?.length) return <h1>Loading...</h1>
    if(!onlineStatus) return <h1>Looks like you are offline</h1>

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
            <button className="px-4 py-2 bg-blue-500  m-4 rounded-lg" onClick={()=>{
                const filteredList = listOfRestaurants.filter((el)=>el.info.name.toLowerCase().includes(searchText));
                setFilteredRestaurants(filteredList);
            }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-400 m-4 rounded-lg"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter((el)=>el.info.avgRating>4.2);
            setlistOfRestaurants(filteredlist);
          }}
        >
          Top rated restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((res) => (
          <Link to={"/restaurant/"+res.info.id} key={res.info.id}>
            {
              res.info.avgRating>4.2? <RestaurantCardPromoted resData={res}/>:<RestaurantCard  resData={res} />
            }
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
