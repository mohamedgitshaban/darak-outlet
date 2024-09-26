import axios from "axios";

export default async function GetsingleFaucet(id) {
    
    const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/faucets/'+id);
    return response;

}