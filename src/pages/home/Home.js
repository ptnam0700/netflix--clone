import "./home.scss"
import Navbar from "../../components/navbar/Navbar.js"
import Featured from "../../components/featured/Featured.js"
import List from "../../components/list/List"

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Featured type="movie"/>
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home


