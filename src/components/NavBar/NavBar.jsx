import CartWidget from "../CartWidget/CartWidget"
import  "../NavBar/NavBar.css"

export default function NavBar() {
    return (


        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img style={{ width: "50px" }} src="../img/yesport_logo.jpg" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Remeras
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Musculosas</a></li>
                                <li><a className="dropdown-item" href="#">Manga Cortas</a></li>
                                <li><a className="dropdown-item" href="#">Manga Largas</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Calzas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Abrigos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trajes de Baño</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Guia de Talles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">+Info</a>
                        </li>
                    </ul>
                   
                </div>
                <form className="d-flex" role="Buscar">
                        <input className="form-control md" type="Buscar" placeholder="Buscar..." aria-label="Buscar" />
                        <button className="btn btn-outline-info " type="submit">Buscar</button>
                    </form>
                    <CartWidget />
            </div>
        </nav>

    );
}


