import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
const {data} = await axios.get((url), {
headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'd37643d468msh1f1a3e7dcfe4578p1785adjsn74cff320651d'
  }
})
return data;
}