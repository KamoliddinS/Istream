import { Link } from "react-router-dom"
import './navigation.scss'
const Navigation = ({ oldpageLink, oldpageText, curruntpageText, currentText }) => {
    return (
        <>
            <div className="navigation">
                <div className="navigation-navbar">
                    <Link className="old-page" to={oldpageLink}>{oldpageText}</Link>
                    <p className="current-text">{currentText}</p>
                </div>
                <div className="back">
                    <Link className="back-link" to={oldpageLink}>Назад</Link>
                    <p className="current-component">{curruntpageText}</p>
                </div>
            </div >
        </>
    )
}
export default Navigation