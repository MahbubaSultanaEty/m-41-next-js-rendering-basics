import React from 'react';

const Header = () => {
    console.log("server side rendering");
    return (
        <div>
            <h2 className="text-4xl font-bold text-center m-6">My Header</h2>
        </div>
    );
};

export default Header;