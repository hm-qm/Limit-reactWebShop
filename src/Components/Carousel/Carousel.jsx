import { useState, useEffect } from "react";
import styles from "./Carousel.module.scss"

const Carousel = () => {

    const photo1 = "../../Assets/Images/carousel-image1.jpg"
    const photo2 = "../../Assets/Images/carousel-image2.jpg"
    const photo3 = "../../Assets/Images/carousel-image3.jpg"

    const imageArray = [
        "https://images.unsplash.com/photo-1594035795072-3fcd236b7d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]


    // const [rightButtonState, setRightButtonState] = useState(true)
    const [imageState, setImageState] = useState(0)

    const handleClickRight = () => {
        // if (imageState < 0){
        //     setImageState(2);
        // }; 
        setImageState(imageState + 1);
    }

    const handleClickLeft = () => {
        // if (imageState < 0){
        //     setImageState(0);
        // }; 
        setImageState(imageState - 1);
    }

    useEffect(() => {
        
    },[imageState])


    return (
        <div className={styles.Carousel}>
            <div className={styles.Carousel_display}>
                <button  className={styles.Carousel_display__button} onChange={handleClickLeft}>left</button>
                <img className={styles.Carousel_display__image} src={imageArray[imageState]} alt="" />
                <button  className={styles.Carousel_display__button} onChange={handleClickRight}>right</button>
            </div>
        </div>
    )
}

export default Carousel
