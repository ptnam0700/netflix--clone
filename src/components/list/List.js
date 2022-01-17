import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"
function List() {
    const [isMoved, setIsMoved] = useState(false)
    const [listNumber, setListNumber] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -50 

        if(direction === "left" && listNumber > 0){
            setListNumber(listNumber - 1)
            listRef.current.style.transform = `translateX(${distance + 230}px)`
        }

        if(direction === "right" && listNumber < 4){
            setListNumber(listNumber + 1)
            listRef.current.style.transform = `translateX(${distance - 230}px)`
        }
        console.log(distance)

    }

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none" }}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List