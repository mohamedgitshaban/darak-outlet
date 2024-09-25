import axios from "axios";
export default async function GetAllVanities() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin/Vanities/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }