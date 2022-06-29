import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryDetailRequest } from "../actions/detail";
import { useNavigate, useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";
import '../assets/css/App.css'

function Detail() {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    let params = useParams()
    
    useEffect(() =>{
       dispatch(fetchCountryDetailRequest(params))
    },[dispatch, params])
    
    const loading = useSelector(store => store.detailReducer.loading);
    const countryDetail = useSelector(store => store.detailReducer.countryDetail);

    const goBack = () =>{
        navigate(`/`)
    }

    return ( 
        <>
        <section className="details">
        {loading === true? 
         <ContentLoader
         width="100%"
         height="auto"
         viewBox="0 0 700 300"
         backgroundColor="#f5f5f5"
         foregroundColor="#dbdbdb"
       >
         <rect  width="7" height="288" />
         <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
         <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
         <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
         <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
         <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
         <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
         <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
         <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
         <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
         <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
         <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
         <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
       </ContentLoader>
        :
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