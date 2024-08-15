import Card from './Card/Card';
import './CardsContainer.css'

const data = [
    {
        id: 1,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 2,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: true,
        tags: ['art', 'music'],
        source: 'CNBC',
        time: '03-12-2023'
    },
    {
        id: 3,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: true,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 4,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 5,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 6,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 7,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 8,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 9,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 10,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 11,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 12,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 13,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 14,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 15,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    },
    {
        id: 16,
        title: 'Google Fonts makes it easy to bring personality and ...',
        imageURL: 'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg',
        isRead: false,
        tags: ['tech', 'research', 'science'],
        source: 'NDTV',
        time: '03-12-2023'
    }
]

const CardsContainer = ({ handleClick }) => {
    return (
        <div className="cardsContainer">
            {data.map(item => <Card {...item} key={item.id} updateContent={handleClick} />)}
        </div>
    );
}

export default CardsContainer;