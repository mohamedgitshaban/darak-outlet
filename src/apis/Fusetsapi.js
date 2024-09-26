
import axios from "axios";

export default async function GetFusets() {
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/faucets/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
