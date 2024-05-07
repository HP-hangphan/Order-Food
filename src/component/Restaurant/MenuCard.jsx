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

const MenuCard = () => {
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
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">Burger</p>
                <p>39.000đ</p>
                <p className="text-gray-500">nice food</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {demo.map((item) => (
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredient.map((item) => (
                      <FormControlLabel control={<Checkbox onChange={() => handleCheckboxChange(item)}/>} label={item} />
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
