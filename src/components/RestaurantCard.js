import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] min-h-[380px] bg-white rounded-2xl shadow-md flex flex-col hover:shadow-lg transition duration-300"
    >
      <img
        className="rounded-xl w-full h-40 object-cover mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex flex-col justify-between flex-grow">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg text-gray-800 truncate">{name}</h3>
          <h4 className="text-sm text-gray-500 line-clamp-2">
            {cuisines.join(", ")}
          </h4>
          <h4 className="text-sm text-gray-500">{areaName}</h4>
          <h4 className="text-sm text-gray-500">{costForTwo}</h4>
        </div>
        <div className="flex justify-between items-center mt-3 text-sm text-gray-700 font-medium">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.151c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.954c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.954a1 1 0 00-.364-1.118L2.074 9.38c-.783-.57-.38-1.81.588-1.81h4.151a1 1 0 00.951-.69l1.285-3.954z" />
            </svg>
            {avgRating}
          </span>
          <span>{deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurantCard;
