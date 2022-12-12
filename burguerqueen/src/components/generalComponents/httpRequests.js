import axios from "axios";

const api = 'https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/';
// también se puede hacer con una función

export const createOrder = (order) => {
   return axios.post(`${api}orders`, order)
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
      return error
    });
}

