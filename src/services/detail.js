import axios from 'axios'


export const loadCountryDetailApi = async (params) => {
    return axios.get(`https://restcountries.com/v2/name/${params.payload.name}?fullText=true`);
  };

 