import axios from "axios";
export default async function Getall(id) {
    
    
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/accessories');  
          console.log(response);
    } catch (error) {
      console.error(error);
    }
  }