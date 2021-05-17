import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'gatsby';
import { Pagination } from 'antd'
import { TagRow } from './'



/**
 * This function will display the paginated posts. And whenever the pagesize or current changes, the page will render again.
 * @param {*} param0 
 * @returns only return the current slice of page.
 */
const PostGrid = ({ posts, setTrigger, setPopupAllmessage }) => {
    // only 9 records at a time

    const [pageSize, setPageSize] = useState(9)
    const [current, setCurrent] = useState(1)

    //For example. If every page shows 9 results, and now we are in the third page, then
    //the funcion will only display posts 19 - 27
    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize, posts]
    )
    // Everytime when the page changes, it will scroll up for the user.In other words, the dependencies will be[current, pageSize]
    // useEffect(() => {
    //     window.scroll({
    //         top: 500,
    //         left: 0,
    //         behavior: 'smooth'
    //     })
    // })


    return (

        <section className='grid-pagination-section'>
            <section className='post-grid container'>

                {/* //pagenated posts: */}
                {paginatedPosts.map((post, index) => (
                    <div className='post-container'>
                        <figure>
                            <img src={require(`../BlogImage/${post.image}`)} alt={post.image}
                                onClick={() => {
                                    setPopupAllmessage([
                                        {
                                            title: post.title,
                                            categories: post.categories,
                                            imageLink: post.image,
                                            description: post.description,
                                            detail: post.detail
                                        }
                                    ]);
                                    setTrigger(true);
                                }}
                            />
                            <TagRow tags={post.categories} />
                            <h2>{post.title}</h2>
                            <p className='author-text'>
                                <span>
                                    By:
                            <Link to={``}>
                                        {post.author}
                                    </Link>
                                </span>
                                <span>
                                    - {post.date}
                                </span>
                            </p>
                            <p className='description-text'>
                                {post.description}
                            </p>
                            <div className='read-more' onClick={() => {
                                setPopupAllmessage([
                                    {
                                        title: post.title,
                                        categories: post.categories,
                                        imageLink: post.image,
                                        description: post.description,
                                        detail: post.detail
                                    }
                                ]);
                                setTrigger(true);
                            }}>Read More...</div>
                        </figure>
                    </div>
                ))}

            </section>
            <div className='grid-row'>
                <Pagination simple
                    showSizeChanger
                    onShowSizeChange={setPageSize}
                    pageSize={pageSize}
                    total={posts.length}
                    defaultCurrent={current}
                    onChange={setCurrent}
                />

            </div>
        </section >
    )
}
export default PostGrid
