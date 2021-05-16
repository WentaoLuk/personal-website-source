import RegularPosts from "../../mock/regular-posts"
import React from 'react'
import { categoryColors } from './styles'

/**
 * This component is the post title unit.
 * @param {*} param0 
 * @returns 
 */
const MasonryPost = ({ post, tagsOnTop }) => {
    const imageBackground = {
        // backgroundColor: 'red',
        // backgroundImage: `url(../BlogImage/${post.image})`//This will only get the first image.
        backgroundImage: `url("${require(`../BlogImage/${post.image}`)}")`//This will get the image from the STATIC
    }

    // style merging. The post.style includes the CSS we created in blog.js configure function
    const style = { ...imageBackground, ...post.style }

    return (
        <a className="masonry-post " style={style} href={post.link}>
            <div className='overlay'>
                <div className='tags-container'>
                    {post.categories.map((tag, index) =>
                        <span key={index} className='tag' style={{ backgroundColor: categoryColors[tag] }}>
                            {tag.toUpperCase()}
                        </span>
                    )}
                </div>
                <div className='image-text' style={{ justifyContent: 'flex-end' }}>
                    <h2 className='image-title'>{post.title}</h2>
                    <span className='image-date'>{post.date}</span>
                </div>
            </div>
        </a>
    )
}
export default MasonryPost



