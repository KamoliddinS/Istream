import { useNavigate } from "react-router"
import './camera-card.scss'
import { PlusIcon } from "assets/icons/icons"
const EmptyCard = () => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate('/camera/inner')} className="camera-card empty-card">
                <PlusIcon />
            </div>
        </>
    )
}
export default EmptyCard