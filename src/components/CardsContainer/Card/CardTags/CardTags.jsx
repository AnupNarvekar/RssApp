import './CardTags.css'

const CardTags = ({ tags }) => {
    return (
        <ul className="cardTags">
            {tags && tags.length && tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    );
}

export default CardTags
