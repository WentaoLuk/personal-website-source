import React, { useState, useEffect } from "react"
import Navbar from '../components/Navbar/Navbar'
import { PostMasonry, PostGrid } from '../components/common/'
import { RegularPosts } from '../mock/data'
import { OtherPosts } from '../mock/data'
import '../components/css/_base.scss'


import Footer from '../components/Footer/Footer';
import { footerData } from '../mock/data';
import { PortfolioProvider } from '../context/context';


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
        post.author = 'Wentao Lu'
        post.discription = "This is the post discription."
    })
}

// The extra post aggregation will be displayed in the second page
const recentPosts = [...OtherPosts, ...RegularPosts, ...RegularPosts]


mergeStyles(RegularPosts, regularPostsConfig)
mergeStyles(OtherPosts, otherPostsCOnfig)

// const lastRegularPost = RegularPosts.pop()


export default function blog() {

    const [footer, setFooter] = useState({});
    useEffect(() => {
        setFooter({ ...footerData });
    }, []);

    return (
        // <About />
        <main>


            <Navbar />
            <section className='container home'>
                <div className='row'>
                    <h1 style={{ fontSize: '20px' }}>[Uptade: 2015-05-16]Please notice that the blog function is still under construction and will be finished in 3 days~ Thank you for stopping by!</h1>
                    <section className='regular-posts-container'>
                        <PostMasonry posts={RegularPosts} columns={3} tagsOnTop={true} />
                        <section>
                            <div>
                                <PostGrid posts={recentPosts} />
                            </div>
                        </section>
                        <PostMasonry posts={OtherPosts} columns={3} />




                    </section>
                </div>
            </section>

            <PortfolioProvider value={{ footer }}>
                <Footer />
            </PortfolioProvider>


        </main>
    )
}