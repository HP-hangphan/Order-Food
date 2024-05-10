import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from '@mui/material/Button';
import { categorizeIngredients } from "../State/Utils/categoryIngredients";

// const ingredients = [
//     {
//         category: "Nuts & Seeds",
//         ingredient: "Cashews"
//     },
//     {
//         category: "Protein",
//         ingredient: "Ground beef"
//     },
//     {
//         category: "Protein",
//         ingredient: "Bacon Strips"
//     },
// ];

const demo = [
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashews"],
  },
  {
    category: "Protein",
    ingredient: ["Ground beef", "Bacon Strips"],
  },
];

const MenuCard = ({item}) => {
    const handleCheckboxChange = (value) => {
        console.log(value)
    }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images}
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{item.name}</p>
                <p>{item.price}.000d</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                <div>
                  <p>{category}</p>
                  <FormGroup>
                    {categorizeIngredients(item.ingredients)[category].map((item) => (
                      <FormControlLabel key = {item.name} control={<Checkbox onChange={() => handleCheckboxChange(item)}/>} label={item.name} />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <Button variant="contained" disabled={false} type="submit">
                {true ? "Add to cart" : "Out of stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
