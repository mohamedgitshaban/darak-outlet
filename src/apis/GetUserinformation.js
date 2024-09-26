import axios from "axios";
export default async function GetUserinformation(id) {
    
    
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/users/'+id);  
          return response;
    } catch (error) {
      console.error(error);
    }
  }