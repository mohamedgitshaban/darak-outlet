import axios from "axios";
export default async function AddFusets(data) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/admin/Faucets/',data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }