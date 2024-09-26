import axios from "axios";

export default async function GetSingleSink(id) {
    
    const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/sink/'+id);
    return response;

}