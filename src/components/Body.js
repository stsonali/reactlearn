import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8498481&lng=77.6544856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata  = await data.json();
        setlistOfRestaurants(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(!listOfRestaurants.length) return <h1>Loading...</h1>

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="searchBox" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
            <button onClick={()=>{
                const filteredList = listOfRestaurants.filter((el)=>el.info.name.toLowerCase().includes(searchText));
                setFilteredRestaurants(filteredList);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter((el)=>el.info.avgRating>4.2);
            setlistOfRestaurants(filteredlist);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <Link to={"/restaurant/"+res.info.id} key={res.info.id}><RestaurantCard  resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
