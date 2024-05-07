import {
  CardMedia,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { FormControl } from "@mui/base";
import MenuCard from "./MenuCard";
import Grid from '@mui/material/Grid';


const categories = ["All", "pizza", "biryani", "burger", "chicken", "rice"];
const foodTypes = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Vegetarian only",
    value: "vegetarian",
  },
  {
    label: "Non-Vegetarian",
    value: "non-vegetarian",
  },
  {
    label: "Seasional",
    value: "seasional",
  },
];

const menu = [1, 1, 1, 1, 1, 1];
const RestaurantDetail = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/India/India fast food/2
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
               
              <CardMedia
                className="w-full h-[40vh] object-cover"
                component="img" image="https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg"
                alt=""
              ></CardMedia>
            
            </Grid>
            <Grid item xs={12} lg={6}>
              <CardMedia
                className="w-full h-[40vh] object-cover"
                component="img" image="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <CardMedia
                className="w-full h-[40vh] object-cover"
                component="img" image="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
                alt=""
              ></CardMedia>
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold"> Indian Fast Food</h1>
          <p className="text-gray-500 mt-1">
            While included here as a standalone component, the most common use
            will be in some form of input, so some of the behavior demonstrated
            here is not shown in context.
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />

              <span>India</span>
            </p>

            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />

              <span>Mon:Sun 9AM - 10PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter p-5 shadow-md">
          Filter
          <div className="box space-y-5 lg:sticky top-28 ">
          <div>
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
              Food Type
            </Typography>
            <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup
                onChange={handleFilter}
                name="food_type"
                value={foodType}
              >
                {foodTypes.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            </div>
         
          <Divider />
          <div className="box space-y-5 lg:sticky top-28 ">
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
              Food Category
            </Typography>

            <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup
                onChange={handleFilter}
                name="food_category"
                value={foodType}
              >
                {categories.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
