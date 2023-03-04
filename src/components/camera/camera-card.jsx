import './camera-card.scss'
import { CameraIcon, Comnat } from "assets/icons/icons"
const CameraCard = () => {
    return (
        <>
            <div className="camera-card">
                <div className="title">
                    <h2>Мой офис</h2>
                </div>
                <div className="status">
                    <div className="status-item">
                        <Comnat />
                        <h3>Количество комнат:</h3>
                        <span>3</span>
                    </div>
                    <div className="status-item">
                        <CameraIcon />
                        <h3>Количество камер:</h3>
                        <span>3</span>
                    </div>
                    <div className="status-item offline">
                        <h3>Офлайн:</h3>
                        <span>3</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CameraCard