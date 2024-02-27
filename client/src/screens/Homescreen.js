// import React from "react";
// import  from "../Fooddata.js";
// function Homescreen() {
//   return (
//     <div>
//       <div className="row">
//         {food.map((food) => {
//           return (
//             <div className="col-md-4">
//               <div>
//                 <Food food={food} />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Homescreen;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Food from "../components/Food";
import foodas from "../Fooddata.js";
import { getAllFoodas } from "../actions/foodAction";

export default function Homescreen() {
  const dispatch = useDispatch();

  // by this variable i will dispatch the action
  useEffect(() => {
    dispatch(getAllFoodas());
  }, []);
  return (
    <div>
      <div className="row">
        {foodas.map((food) => {
          return (
            <div className="col-md-4">
              <div>
                <Food food={food}></Food>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
