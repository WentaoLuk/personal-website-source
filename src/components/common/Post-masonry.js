import React from 'react'
import { MasonryPost } from '.'
// import from the common folder index.js (as default)

/**
 * This component will format the post navigation title and picture, then pass the props to MasonryPost component
 * to build the actual post masonry.
 * @param {*}  
 * @returns 
 */
const PostMasonry = ({ posts, columns, tagsOnTop, setTrigger, setPopupAllmessage }) => {
    return (
        // setting up the grid columns
        <section className='masonry' style={{ gridTemplateColumns: `repeat(${columns},minmax(275px, 1fr))` }}>
            {posts.map(
                (post, index) =>
                    <MasonryPost {...{ post, index, tagsOnTop, key: index }} setTrigger={setTrigger} setPopupAllmessage={setPopupAllmessage} />
            )
            }

        </section >
    )
}
export default PostMasonry