import { Chip, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
      <div>
        <img
          className="w-[5rem] h-[5rem] object-cover"
          src="https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D"
          alt=""
        ></img>
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
        <div className="space-y-1 lg:space-y-3 w-full">
        
            <p>Biryani</p>
            <div className="flex justify-between items-center">
                <div className='flex items-center space-x-1'>
                    <IconButton>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <div className="w-5 h-5 text-xs flex items-center justify-center">
                            {5}
                    </div>
                    <IconButton>
                   <AddCircleOutlineIcon/>
                </IconButton>

                </div>
            </div>

        </div>
            <p>39.000d</p>
      </div>
      </div>
      <div className="pt-3 space-x-2">
      {[1,1,1,1].map((item) => 
        <Chip label={"bread"}/>
      )}

      </div>
    </div>
  );
};

export default CartItem;
