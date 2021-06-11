//Data from JSON
// const layera = {
//     "data": [
//         {
//             "id": 0,
//             "name": "player1",
//             "layerb": []
//         },
//         {
//             "id": 1,
//             "name": "player2",
//             "layerb": []
//         }
//     ]
// };
// const layerb = {
//     "data": [
//         {
//             "id": 0,
//             "layera": 0,
//             "layerc": []
//         },
//         {
//             "id": 1,
//             "layera": 1,
//             "layerc": []
//         }
//     ]
// };


import layera from "../public/data/a.json";
import layerb from "../public/data/a_b.json";
import layerc from "../public/data/a_b_c.json";

export const fetchLayera = () => {
  let result = {};
  layera.data.forEach((a) => (result[a.id] = a));
  return result;
};
export const fetchLayerb = () => {
  let result = {};
  layerb.data.forEach((b) => (result[b.id] = b));
  // Object.keys(result).forEach((id) => {
  //   // memory lack gc
  //   result[id].layerc.length = 0;
  // });
  return { ...result };
};

export const consistArr = () => {
  let layera = fetchLayera();
  let _layerb = fetchLayerb();
  layerc.data.forEach((c) => _layerb[c.layerb].layerc.push(c));// <= pushed here, layerb is not fresh

  const arr_data = Object.values(_layerb);

  return arr_data;
};
