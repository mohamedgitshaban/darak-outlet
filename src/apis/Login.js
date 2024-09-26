import axios from "axios";
export default async function login(data) {
    console.log(data);
    
    try {
      const response = await axios.post('https://darakapi.darakoutlet.com/api/v1/users/login/', data);  
          return response;
    } catch (error) {
      console.error(error);
    }
  }