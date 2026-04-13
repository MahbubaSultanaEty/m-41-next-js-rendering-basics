import Image from "next/image";
import Link from "next/link";
const FoodCard = ({ food }) => {
    const { id, dish_name, image_link}= food;
    return (
        <div>
            <div className="card bg-base-100 w-96 mx-auto  shadow-sm">
  <figure className="px-10 pt-10">
                    <Image src={image_link}
                        alt={dish_name}
                        width="400"
                        height="300"
                    ></Image>
  </figure>
  <div className="card-body items-center text-center">
                    <h2 className="card-title m-2 text-lime-200">{dish_name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
                        <Link href={`/foods/${id}`}>
                            <button className="btn btn-primary">Show Details</button>
                        </Link>
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;