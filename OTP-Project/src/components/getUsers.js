import axios from "axios";

export const getUser = () => {
  let request = axios.get(
    "https://6376d05f81a568fc25067c85.mockapi.io/api/bq6/users"
  );
  let validateLinkObject = request
    .then((response) => {
      // Obtenemos los datos
      return response.data;
    })
    .catch((e) => {
      // Capturamos los errores
      console.log(e);
    });

  return new Promise((resolve, reject) => {
    resolve(validateLinkObject);
    reject("error");
  });
};
