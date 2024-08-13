import './Subscription.css'

const SubscriptionCard = ({title, unreadCount, iconName}) => {
    return (
        <div className="subscriptionContainer">
            <span className="material-symbols-rounded folderIcon">
                {iconName}
            </span>
            <p className='subscriptionTitle'>{title}</p>
            <p className='subscriptionUnreadCount'>{unreadCount}</p>
        </div>
    );
}

export default SubscriptionCard;