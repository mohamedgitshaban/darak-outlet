import axios from "axios";

export default async function GetSinks() {
    
      const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/sink');
      return response;

  }
