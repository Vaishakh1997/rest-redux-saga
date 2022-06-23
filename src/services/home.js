import axios from 'axios'

// const apiUrl = `https://restcountries.com/v2/all`;

export const loadCountriesApi = async (URL) => {
    console.log(URL);
    return axios.get(URL.payload);
  };

 