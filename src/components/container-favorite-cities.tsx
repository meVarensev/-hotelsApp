import React from 'react';




function ContainerFavoriteCities(){
    return (
        <div
            className="scrollbar-thin  scrollbar-thumb-[#41522E]  scrollbar-track-[#E7E7E7] overflow-y-scroll h-[350px] pr-[8px]">

            <p>sss</p>
        </div>
    );
}

export {ContainerFavoriteCities};


// {cities.map(({cityName, id, rating, price, count, date}: IFavoriteCity) => {
//     return <div className="border-b-2" key={id}>
//         <City
//             cityName={cityName}
//             rating={rating}
//             date={date}
//             count={count}
//             price={price}/>
//
//     </div>
// })}
