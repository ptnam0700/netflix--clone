import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video 
            className="video" 
            autoPlay = {false}
            progress 
            controls
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210314115545/sample-video.mp4" ></video>
        </div>
    )
}

export default Watch
