import React from 'react';
import Container from "@mui/material/Container";
import {SearchForm} from "./search-form";
import {FavoritesForm} from "./favorites-form";
import {Content} from "./content";
function MainContainer() {
    return (
        <div>
            <Container className="max-h-[902px] ">
                <div className="flex gap-[24px]">
                    <div>
                        <SearchForm/>
                        <FavoritesForm/>
                    </div>
                   <Content/>
                </div>
            </Container>
        </div>
    );
}

export {MainContainer};
