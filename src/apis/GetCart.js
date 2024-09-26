import axios from "axios";
export default async function GetCart(id) {
    
    
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/users/cart/'+id);  
          return response;
    } catch (error) {
      console.error(error);
    }
  }