
import axios from "axios";
export default async function DeleteAccessory(id) {
    try {
      const response = await axios.delete('http://127.0.0.1:8000/api/admin/accessories/'+id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }