import featured from "../../mock/featured"
import React from 'react'


const MasonryPost = ({ post, tagsOnTop }) => {
    const style = {
        // backgroundColor: 'red',
        // backgroundImage: `url(../BlogImage/${post.image})`//This will only get the first image.
        backgroundImage: `url("${require(`../BlogImage/${post.image}`)}")`//This will get the image from the STATIC
    }


    return (
        <a className="mansory-post overlay" style={style} href={post.link}>
            <div className='image-text'>
                <h2 className='image-title'>{post.title}</h2>
            </div>

        </a>
    )
}
export default MasonryPost



