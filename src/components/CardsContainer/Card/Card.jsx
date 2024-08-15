import { useEffect, useState } from 'react';
import './Card.css'
import CardTags from './CardTags/CardTags'
import calculateElapsedTime from '../../../utils/elapsedTimeCalculator'



const Card = ({ title, imageURL, isRead, tags, source, time, updateContent }) => {
    time = calculateElapsedTime(time);
    let [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
        updateContent();
    }

    return (
        <div className={isSelected ? "cardCcontainer selected" : "cardCcontainer"} onClick={handleClick}>
            <div className="cardUpperSection">
                <div>
                    <span className="material-symbols-rounded channelIcon">
                        app_badging
                    </span>
                    <p>{title}</p>
                </div>
                {imageURL && <div className="imageContainer">
                    <img src={imageURL} alt="card image" />
                </div>}
            </div>
            <CardTags tags={tags} />
            <div className="cardLowerSection">
                <div className={isRead ? 'read' : 'unread'}></div>
                <p>{source}</p>
                <p>{time}</p>
            </div>
        </div>
    );
}

export default Card;