import axios from "axios";
export default async function GetActive() {
    
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/users/');  
          return response;
    } catch (error) {
      console.error(error);
    }
  }