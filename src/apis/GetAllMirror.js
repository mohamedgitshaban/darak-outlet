import axios from "axios";
export default async function GetAllMirror() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin/Mirrors/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }