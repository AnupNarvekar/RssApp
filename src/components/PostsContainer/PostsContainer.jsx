import './PostsContainer.css'
import emptyImage from '../../assets/empty.svg'
import { useState } from 'react'

const PostsContainer = ({ data }) => {

    return (
        <div className="postsContainer">
            {
                data ?
                    <div className="selection">
                        <h1>{data.title}</h1>
                        <div className="details">
                            {data.source && <p>{data.source}</p>}
                            {data.time && <p>{data.time}</p>}
                        </div>
                        {data.imageURL && <img src={data.imageURL} alt="content image" />}
                        {data.credit && <p className='imageCredit'>{data.credit}</p>}
                        <p className="content">{data.content}</p>
                    </div>
                    :
                    <div className="noSelection">
                        <img src={emptyImage} alt="" />
                    </div>
            }
        </div>
    );
}

export default PostsContainer;