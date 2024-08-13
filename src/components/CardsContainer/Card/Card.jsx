import './Card.css'
import CardTags from './CardTags/CardTags'

function timeElapsed(data) {
    const now = new Date();
    const past = new Date(data);
    const difference = now - past; // difference in milliseconds

    const minutes = Math.floor(difference / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now'; // If the difference is less than a minute
    }
}

const Card = ({ title, imageURL, isRead, tags, source, time }) => {
    time = timeElapsed(time);
    return (
        <div className={source == 'CNBC' ? "cardCcontainer selected" : "cardCcontainer"}>
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