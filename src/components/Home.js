import { Fragment, useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'reactstrap';
import { fetchCountriesRequest } from "../actions/home";
import { useNavigate } from "react-router-dom";
import '../assets/App.css'


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
        // history.push(`/${a}`);
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
                    {loading === true? <div className="country-layout-list">Loading...</div> :
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