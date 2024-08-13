import SubscriptionCard from './Subscription/Subscription';
import './CategoriesContainer.css'

import { useState, useEffect } from 'react';

const subData = [
    {
        id: 1,
        title: 'sports',
        new: 2
    },
    {
        id: 2,
        title: 'art & design',
        new: 4
    },
    {
        id: 3,
        title: 'space & time',
        new: 6
    },
    {
        id: 4,
        title: 'Biology',
        new: 4
    },
    {
        id: 5,
        title: 'Tech',
        new: 16
    },
    {
        id: 6,
        title: 'art & design',
        new: 4
    },
    {
        id: 7,
        title: 'space & time',
        new: 6
    },
    {
        id: 8,
        title: 'Biology',
        new: 4
    },
    {
        id: 9,
        title: 'Tech',
        new: 16
    },
    {
        id: 10,
        title: 'art & design',
        new: 4
    },
    {
        id: 11,
        title: 'space & time',
        new: 6
    },
    {
        id: 12,
        title: 'Biology',
        new: 4
    },
    {
        id: 13,
        title: 'Tech',
        new: 16
    },
    {
        id: 14,
        title: 'art & design',
        new: 4
    },
    {
        id: 15,
        title: 'space & time',
        new: 6
    },
    {
        id: 16,
        title: 'Biology',
        new: 4
    },
    {
        id: 17,
        title: 'Tech',
        new: 165
    },
    {
        id: 18,
        title: 'Tech',
        new: 5
    },
    {
        id: 19,
        title: 'Tech',
        new: 16
    },
    {
        id: 20,
        title: 'art & design',
        new: 4
    },
    {
        id: 21,
        title: 'space & time',
        new: 6
    },
    {
        id: 22,
        title: 'Biology',
        new: 4
    },
    {
        id: 23,
        title: 'Tech',
        new: 165
    },
    {
        id: 24,
        title: 'Tech',
        new: 5
    }
]

const unreadCount = subData.reduce((prev, current) => {
    prev = current.new ? (prev + current.new) : prev;
}, 0)



const CategoriesContainer = () => {
    let [subscriptions, setSubscriptions] = useState(subData);

    // useEffect(() => {

    // }, [])


    return (
        <div className="categoriesContainer">
            <div className="filtersConatiner">
                <p>Your Feeds</p> 
                <SubscriptionCard title='Unread' unreadCount={unreadCount} iconName='circle' />
                <SubscriptionCard title='Today' unreadCount='2' iconName='today' />
            </div>
            <div className="catTitle">
                <p>SUBSCRIPTIONS</p>
                <hr />
            </div>
            <div className="subscriptionsConatiner">
                {
                    subscriptions.map((sub) => {
                        return <SubscriptionCard title={sub.title} unreadCount={sub.new} key={sub.id} iconName='folder' />
                    })
                }
            </div>
        </div>
    );
}

export default CategoriesContainer;