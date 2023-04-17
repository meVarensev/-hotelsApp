import React from 'react';
import {SortButton} from "./sort-button";
import {ContainerFavoriteCities} from "./container-favorite-cities";




function FavoritesForm() {
    return (
        <div className="min-w-[360px] max-h-[472px] bg-[#FFFFFF] drop-shadow-xl p-[32px] rounded-[16px]">
            <div className="mb-[10px]">
                <p className="text-xl font-medium not-italic">Избранное</p>
                <div className="flex mt-[18px]">
                    <SortButton name="Рейтинг"/>
                    <SortButton name="Цена"/>
                </div>
            </div>

            <ContainerFavoriteCities/>

        </div>
    );
}

export {FavoritesForm};
