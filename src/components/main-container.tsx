import React from 'react';
import Container from "@mui/material/Container";
import {SearchForm} from "./search-form";

function MainContainer() {
    return (
        <div>
            <Container >
                <div className="flex gap-[24px]">
                    <div>
                        <SearchForm/>
                        <div
                            className="min-w-[360px] min-h-[472px] bg-[#FFFFFF] drop-shadow-xl p-[32px] rounded-[16px]">
                            <p>2</p>
                        </div>
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
