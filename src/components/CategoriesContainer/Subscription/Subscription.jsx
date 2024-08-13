import { useState } from 'react';
import './Subscription.css'

const SubscriptionCard = ({ title, unreadCount, iconName }) => {

    let [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    }

    return (
        <div className={isSelected ? "subscriptionContainer selected" : "subscriptionContainer"} onClick={handleClick}>
            <span className="material-symbols-rounded folderIcon">
                {(iconName == 'folder' && (isSelected ? 'folder_open' : 'folder'))}
                {(iconName != 'folder' && iconName)}
            </span>
            <p className='subscriptionTitle'>{title}</p>
            <p className='subscriptionUnreadCount'>{unreadCount}</p>
        </div>
    );
}

export default SubscriptionCard;