import axios from "axios";
export default async function GetAllAccessories() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin/accessories/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }