import axios from "axios";
export default async function Signup(data) {
    console.log(data);
    
    try {
      const response = await axios.post('https://darakapi.darakoutlet.com/api/v1/users/signup/', data);  
          return response;
    } catch (error) {
      console.error(error);
    }
  }