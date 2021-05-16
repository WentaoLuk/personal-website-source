import React from "react"
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'

import { MasonryPost, PostMasonry } from '../components/common/'
import OtherPosts from '../mock/other-posts'
import RegularPosts from '../mock/regular-posts'

import '../components/css/_base.scss'

const regularPostsConfig = {
    0: {
        gridArea: '1/1/span 2/span 2',
        height: '300px'
    },
    1: {
        gridArea: '1/3/span 3/span 1',
    },
    2: {
        height: '200px'
    },
}

// Post layout configure
const otherPostsCOnfig = {
    1: {
        gridArea: '1/2/3/3'
    }
}

/**
 * This funcion will merge ths styles with the post object coming from the backend.
 * @param {*} posts all the post titles
 * @param {*} config the configure style and layout for the post titles
 */
const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(RegularPosts, regularPostsConfig)
mergeStyles(OtherPosts, otherPostsCOnfig)

// const lastRegularPost = RegularPosts.pop()

export default function blog() {
    return (

        // <About />

        <section className='container home'>
            <div className='row'>
                <h1>Blog</h1>
                <section className='regular-posts-container'>
                    <PostMasonry posts={RegularPosts} columns={3} tagsOnTop={true} />
                    {/* <MasonryPost post={lastRegularPost} tagsOnTop={true} /> */}
                </section>

                <h1>Personal Life</h1>
                {/* Passing the post from Other posts */}
                <PostMasonry posts={OtherPosts} columns={3} />


            </div>
        </section>

    )
}