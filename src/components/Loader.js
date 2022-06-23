import loaderGif from '../assets/img/loading.gif'
function Loader() {
    return ( 
        <div className='loader-container'>
            <img src={loaderGif} width='100px' alt="loader" />
        </div>
     );
}

export default Loader;