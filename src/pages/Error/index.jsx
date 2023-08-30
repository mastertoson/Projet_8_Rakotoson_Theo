import { Link } from "react-router-dom";
function Error() {
    return (
        <div className="error_container">
            <p className="error_404">404</p>
			<p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error_to_home">Retourner sur la page d’accueil</Link>
        </div>
    )
}
    
export default Error