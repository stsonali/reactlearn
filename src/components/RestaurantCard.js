import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor:"#f0f0f0"
}
const RestaurantCard = (props)=>{
    const {resData} = props;
    return <div className="m-4 p-4 w-80" style={styleCard}>
        <img alt="res-log" className="rounded-lg" src={CDN_URL+ resData.info.cloudinaryImageId}></img>
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(', ')}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo}</h4>
    </div>
}


export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <lable className="absolute bg-black text-white rounded-lg m-2 px-2"> Promoted</lable>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;