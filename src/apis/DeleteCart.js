import axios from "axios";
export default async function DeleteCart(id) {    
    try {
      const response = await axios.delete('https://darakapi.darakoutlet.com/api/v1/users/deletecart/'+id);  
          return response;
    } catch (error) {
      console.error(error);
    }
  }