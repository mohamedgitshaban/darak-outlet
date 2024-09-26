import axios from "axios";
export default async function Getprice(id) {
    
    
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/users/price/'+id);  
          return response;
    } catch (error) {
      console.error(error);
    }
  }