import EmptyCard from 'components/camera/empty-card'
import './camera.scss'
import CameraCard from "components/camera/camera-card"
const Camera = () => {
    return (
        <>
            <div className="dashboard camera">
                <CameraCard />
                <EmptyCard />
            </div>
        </>
    )
}
export default Camera