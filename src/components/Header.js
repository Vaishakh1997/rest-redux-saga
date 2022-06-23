import '../assets/css/App.css'

function Header() {
    
    return ( 
         <header className="header" id="header">
                <h1>Where in the world?</h1>
                <div className="dark">
                    <h5 id="mode">Redux Saga</h5>
                </div>
            </header>
     );
}

export default Header;