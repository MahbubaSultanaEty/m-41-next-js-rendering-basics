import React from 'react';
import Image from 'next/image';

const FoodDetailPage = async({ params }) => {

    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();
    const food = data.data;
    console.log( foodId);
    return (
        <div className=" mx-auto  flex flex-col md:flex-row gap-6 m-6 p-12 bg-white">
      
            
                 {/* Image */}
                <div className="rounded-2xl w-full md:w-1/2 overflow-hidden shadow-lg flex justify-center items-center">
                <Image
                    src={food.image_link}
                width={400} height={400} alt={food.dish_name}>
                    
                </Image >
                </div>
           
     
      
            <div className='w-full md:w-1/2 p-12 text-black'>
                 {/* Title + Category */}
      <div className="mt-6">
        <h1 className="text-3xl  font-bold">{food.dish_name}</h1>
        <p className="text-gray-700 mt-1 capitalize">{food.category}</p>
      </div>

      {/* Rating + Price */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-yellow-700 font-semibold">
          ⭐ {food.rating} / 5
        </p>
        <p className="text-xl font-bold text-green-600">
          ৳ {food.price}
        </p>
      </div>

      {/* Alternative Names */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Alternative Names</h2>
        <ul className="list-disc list-inside text-gray-900">
          {food.alternative_names.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>

      {/* Ingredients */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Main Ingredients</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-700">
          {food.main_ingredients.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* Nutrition */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Nutrition (per serving)</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-900">
          <p>Calories: {food.approximate_nutrition_per_serving.calories}</p>
          <p>Protein: {food.approximate_nutrition_per_serving.protein}</p>
          <p>Carbs: {food.approximate_nutrition_per_serving.carbohydrates}</p>
          <p>Fat: {food.approximate_nutrition_per_serving.fat}</p>
          <p>Fiber: {food.approximate_nutrition_per_serving.fiber}</p>
        </div>
      </div>

      {/* Price in Dhaka */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Price in Dhaka</h2>
        <ul className="text-gray-900">
          <li>Home: {food.possible_price_in_dhaka.home_cooked}</li>
          <li>Street: {food.possible_price_in_dhaka.street_food_or_small_restaurant}</li>
          <li>Cafe: {food.possible_price_in_dhaka.cafe_or_healthy_eatery}</li>
        </ul>
      </div>

      {/* Cuisine */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Cuisine</h2>
        <p className="text-gray-900">{food.cuisine}</p>
      </div>

      {/* Origin */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Origin & Popularity</h2>
        <p className="text-gray-900">{food.origin_and_popularity}</p>
      </div>

      {/* Cooking Steps */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Cooking Steps</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-900">
          {food.cooking_steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
 </div>
     
    </div>
    );
};

export default FoodDetailPage;