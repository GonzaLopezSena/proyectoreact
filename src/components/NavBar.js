import "../styles/index.css";
export default function NavBar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="prueba">Mi App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="a">Remeras</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="b">Pantalones</a>
        </li>
        </ul>
    </div>
    </div>
</nav>
)
}