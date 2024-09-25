
import axios from "axios";
export default async function Deletesink(id) {
    try {
      const response = await axios.delete('http://127.0.0.1:8000/api/admin/sink/'+id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }