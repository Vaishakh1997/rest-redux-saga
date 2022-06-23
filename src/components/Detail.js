import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryDetailRequest } from "../actions/detail";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import '../assets/css/App.css'

function Detail() {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    let params = useParams()
    
    useEffect(() =>{
       dispatch(fetchCountryDetailRequest(params))
    },[])
    
    const loading = useSelector(store => store.detailReducer.loading);
    const countryDetail = useSelector(store => store.detailReducer.countryDetail);

    const goBack = () =>{
        navigate(`/`)
    }

    return ( 
        <>
        <section className="details">
        {loading === true? <Loader/> :
            <section className="details" id="details">
                <button style={{border:'1px solid #D3D3D3'}} type="button" className="back-button" id="back-button" onClick={goBack}>Back</button>

                {countryDetail && countryDetail.map(detail=>{
                    return(
                        <div key={detail.name} className="details-view">
                    <div className="details-flag">
                        <img style={{width:'100%',height:'100%',}} src={detail.flag} alt=""></img>
                    </div>
                    <div className="details-details">
                        <h2>{detail.name}</h2>
                        <div className="flag-info">
                            <div className="info-left">
                                <p><b>Native Name : </b>{detail.nativeName}</p>
                                <p><b>Population : </b>{detail.population}</p>
                                <p><b>Region : </b>{detail.region}</p>
                                <p><b>Sub Region : </b>{detail.subregion}</p>
                                <p><b>Capital : </b>{detail.capital}</p>

                            </div>
                            <div className="info-right">
                                {detail && detail.topLevelDomain ?
                                <p><b>Top Level Domain : </b>{detail.topLevelDomain[0]}</p>:
                                <p><b>Top Level Domain : </b>NA</p>}
                                {detail && detail.currencies ?
                                <p><b>Currencies : </b>{detail.currencies[0].name}</p>:
                                <p><b>Currencies : </b>NA</p>}
                            </div>
                        </div>
                        <div className="borders">
                            <div className="borders-left">
                                <p><b>Border Countries : </b></p>
                            </div>
                            <div className="borders-right">
                                {countryDetail[0].borders && countryDetail[0].borders.map(name=>{
                                    console.log(name)
                                return <button key={name} type="button" className="border-button">{name}</button>
                                })}                                
                            </div>
                        </div>
                    </div>
                </div> 
                    )
                })}
                
            </section>
        }
        </section>
        </>
     );
}

export default Detail;