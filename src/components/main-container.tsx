import React from 'react';
import Container from "@mui/material/Container";
import {SearchForm} from "./search-form";
import {FavoritesForm} from "./favorites-form";

function MainContainer() {
    return (
        <div>
            <Container >
                <div className="flex gap-[24px]">
                    <div>
                        <SearchForm/>
                        <FavoritesForm/>
                    </div>

                    <div className="min-w-[664px] min-h-[902px] bg-[#FFFFFF] drop-shadow-xl p-[32px] rounded-[16px]">
                        <p>3</p>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export {MainContainer};
