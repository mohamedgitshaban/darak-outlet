
import axios from "axios";

export default async function GetAccessories() {
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/accessories/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
