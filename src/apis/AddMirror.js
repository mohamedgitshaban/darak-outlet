import axios from "axios";
export default async function AddMirror(data) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/admin/Mirrors/',data);
      return response;
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  }