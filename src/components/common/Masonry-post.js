import React, { useState } from 'react'
import { TagRow } from './'
import { popupState } from '../../pages/blog'

/**
 * This component is the post title unit.
 * @param {*} param0 
 * @returns 
 */
const MasonryPost = ({ post, setTrigger, setPopupAllmessage, tagsOnTop }) => {
    const imageBackground = {
        // backgroundColor: 'red',
        // backgroundImage: `url(../BlogImage/${post.image})`//This will only get the first image.
        backgroundImage: `url("${require(`../BlogImage/${post.image}`)}")`//This will get the image from the STATIC
    }

    // style merging. The post.style includes the CSS we created in blog.js configure function
    const style = { ...imageBackground, ...post.style }
    return (


        <div className="masonry-post "
            style={style}
            href={post.link}
            onClick={() => {
                setPopupAllmessage([
                    {
                        title: post.title,
                        categories: post.categories,
                        image: post.image,
                        description: post.description,
                        detail: post.detail
                    }
                ]);
                setTrigger(true);
            }}>
            <div className='overlay'>
                <TagRow tags={post.categories} />
                <div className='image-text' style={{ justifyContent: 'flex-end' }}>
                    <h2 className='image-title'>{post.title}</h2>
                    <span className='image-date'>{post.date}</span>
                </div>
            </div>
        </div>
    )
}
export default MasonryPost



