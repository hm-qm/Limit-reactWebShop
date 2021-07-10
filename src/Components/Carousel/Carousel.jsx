import { useState, useEffect } from "react";
import styles from "./Carousel.module.scss"

const Carousel = () => {

    const imageArray = [
        "https://images.unsplash.com/photo-1594035795072-3fcd236b7d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ]

    const [imageState, setImageState] = useState(0)

    const handleClickRight = () => {
        setImageState(imageState + 1);
    }

    const handleClickLeft = () => {
        setImageState(imageState - 1);
    }



    useEffect(() => {
        if (imageState >= imageArray.length){
            setImageState(0);
        };
        if (imageState < 0){
            setImageState(2);
        }; 
        console.log(imageState);
    },[imageState])


    return (
        <div className={styles.Carousel}>
            <div className={styles.Carousel_display}>
                <button  className={styles.Carousel_display__button} onClick={handleClickLeft}><i class="fas fa-chevron-left"></i></button>
                <img className={styles.Carousel_display__image} src={imageArray[imageState]} alt="" />
                <button  className={styles.Carousel_display__button} onClick={handleClickRight}><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default Carousel
