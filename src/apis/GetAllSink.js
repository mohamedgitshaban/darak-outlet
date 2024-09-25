import axios from "axios";
export default async function GetAllSink() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/admin/sink/');
      return response;
    } catch (error) {
      console.error(error);
    }
  }