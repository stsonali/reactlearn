import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor:"#f0f0f0"
}
const RestaurantCard = (props)=>{
    const {resData} = props;
    return <div className="res-card" style={styleCard}>
        <img alt="res-log" className="res-logo" src={CDN_URL+ resData.info.cloudinaryImageId}></img>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(', ')}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo}</h4>
    </div>
}

export default RestaurantCard;