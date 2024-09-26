
import axios from "axios";

export default async function GetMirrors() {
    try {
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/Mirrors/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
