
import axios from "axios";
export default async function GetVanitis() {
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/Vanities');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
