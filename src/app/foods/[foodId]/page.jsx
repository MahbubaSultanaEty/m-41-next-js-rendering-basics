import React from 'react';

const FoodDetailPage = async({ params }) => {

    const { foodId } = await params;
    console.log(params, foodId);
    return (
        <div>
            <h2>Showing Details of : {foodId}</h2>
        </div>
    );
};

export default FoodDetailPage;