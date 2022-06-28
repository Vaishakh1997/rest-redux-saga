import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'reactstrap';
import { fetchCountriesRequest } from "../actions/home";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ContentLoader from 'react-content-loader'
import '../assets/css/App.css'


function Home() {
    // const [countries, setCountries] = useState([]);

    const dispatch = useDispatch();
    let navigate = useNavigate()
    
    useEffect(() =>{
        let URL = `https://restcountries.com/v2/all`;
        dispatch(fetchCountriesRequest(URL))
    },[])
    
    const loading = useSelector(store => store.homeReducer.loading);
    const countries = useSelector(store => store.homeReducer.countries);

    const handleChangeSearch = (event) => {
        let URL = `https://restcountries.com/v2/name/${event.target.value}`
        dispatch(fetchCountriesRequest(URL))
    }

    const handleChangeFilter = (event) => {
        let URL;
        if(event.target.value === '')
            URL = 'https://restcountries.com/v2/all'
        
        else
            URL = `https://restcountries.com/v2/region/${event.target.value}`
        dispatch(fetchCountriesRequest(URL))


    }

    const detailPage = (a) =>{
        navigate(`/${a}`)
    }

    return ( 
        
        <>
             <section className="home" id="home">
                    <div className="search-and-filter">
                        <div className="search">
                        <Input name="uname" placeholder='Search for a country..' type="text" id="uname" onChange={handleChangeSearch} />
                        </div>
                        <div className="filter">
                            <Input className="filter" type="select" name="select" id="exampleSelect" onChange={handleChangeFilter}>
                            <option value="" >All</option>
                            <option value="Africa" >Africa</option>
                            <option value="Americas" >Americas</option>
                            <option value="Asia" >Asia</option>
                            <option value="Europe" >Europe</option>
                            <option value="Oceania" >Oceania</option>
                        </Input>
                        </div>
                    </div>
                    {loading === true? 
                      <ContentLoader viewBox="0 0 1360 900" height="auto" width="100%" >
                      <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
                      <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
                      <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
                      <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
                      <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
                      <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
                      <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
                      <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
                      <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
                      <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
                      <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
                      <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
                      <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
                      <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
                      <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
                      <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
                      <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
                      <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
                      <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
                      <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
                      <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
                      <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
                      <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
                      <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
                      <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
                      <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
                      <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
                      <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
                      <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
                      <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
                      <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
                      <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
                      <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
                      <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
                      <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
                      <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
                      </ContentLoader>
                     :
                    <div className="country-layout-list">

                        {countries && countries.map(country => {
                            return (
                            <div key={country.numericCode} value={country.name} className="country-layout" onClick={()=>detailPage(country.name)}>
                                <div className="country-flag">
                                    <img style={{ width: '100%', height: '100%', objectFit:'cover' }} src={country.flag} alt={country.numericCode}></img>
                                </div>
                                <div className="country-details" id="country-details">
                                    <h5>{country.name}</h5>
                                    <p><b>Population : </b>{country.population}</p>
                                    <p><b>Region : </b>{country.region}</p>
                                    <p><b>Capital : </b>{country.capital}</p>
                                </div>
                            </div>)
                        })}

                    </div>}
                </section>
        </>
     );
}

export default Home;