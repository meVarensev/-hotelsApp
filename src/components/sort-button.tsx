import React from 'react';
import Button from "@mui/material/Button";

interface ISortButton {
    name: string
}
function SortButton({name}:ISortButton) {
    return (
       <div className="mr-[8px]">
           <Button className="text-xl font-medium not-italic h-[32px] p-[4px] m-[8px]" style={{color: "#41522E" , border: "1px solid #41522E"}} variant="outlined"
                   endIcon={
                       <div className="flex flex-col p-0 m-0 ">
                           <img src="/img/select.svg" alt=""/>
                           <img src="/img/select2.svg" alt=""/>
                       </div>
                   }>
               {name}
           </Button>
       </div>
    );
}

export {SortButton};
