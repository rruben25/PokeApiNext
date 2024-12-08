//page.js
// import RandomPokemonCard from '../componentes/cards';
import './home.css'
export default  function Home() {
    return (<>
      <div>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="../pokemon/home.jsx">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="../pokemon/generaciones/gen1.jsx">
                    Generacion 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="../pokemon/generaciones/gen2.jsx">
                    Generacion 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="../pokemon/generaciones/gen3.jsx">
                    Generacion 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </>
    );
  }