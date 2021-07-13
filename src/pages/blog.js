import React, { useState, useEffect } from "react"
import Navbar from '../components/Navbar/Navbar'
import { PostMasonry, PostGrid, Popup } from '../components/common/'
import { RegularPosts } from '../mock/data'
import { OtherPosts } from '../mock/data'
import '../components/css/_base.scss'


import Footer from '../components/Footer/Footer';
import { footerData } from '../mock/data';
import { PortfolioProvider } from '../context/context';
import SkeletonButton from "antd/lib/skeleton/Button"


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
const recentPosts = [...OtherPosts, ...RegularPosts]


mergeStyles(RegularPosts, regularPostsConfig)
mergeStyles(OtherPosts, otherPostsCOnfig)

// const lastRegularPost = RegularPosts.pop()


export default function blog() {

    const [footer, setFooter] = useState({});
    useEffect(() => {
        setFooter({ ...footerData });
    }, []);
    const [popupState, setPopupState] = useState(false);
    const [popupAllMeesage, setPopupAllmessage] = useState([])


    return (
        // <About />
        <main>
            <Navbar />
            <Popup trigger={popupState} setTrigger={setPopupState} arrayMessage={popupAllMeesage}>
            </Popup>
            <section className='container home'>
                <div className='row'>
                    <h1 className='bulletin' style={{ color: 'red' }}> If you are revisiting this website, please clear your browser's cache or use Incognito mode to see the latest update. </h1>

                    <section className='regular-posts-container'>
                        <h1>Diary</h1>
                        <PostMasonry setPopupAllmessage={setPopupAllmessage} setTrigger={setPopupState} posts={RegularPosts} columns={3} tagsOnTop={true} />
                        <hr class="dashed"></hr>
                        <section>
                            <div>
                                <PostGrid setPopupAllmessage={setPopupAllmessage} setTrigger={setPopupState} posts={recentPosts} />
                            </div>
                        </section>
                        <hr class="dashed"></hr>
                        <PostMasonry setPopupAllmessage={setPopupAllmessage} setTrigger={setPopupState} posts={OtherPosts} columns={3} />
                    </section>
                </div>
            </section>

            <PortfolioProvider value={{ footer }}>
                <Footer />
            </PortfolioProvider>
        </main>
    )
}