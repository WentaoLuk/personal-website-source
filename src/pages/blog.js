import React from "react"
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'

import { PostMasonry } from '../components/common/'
import OtherPosts from '../mock/other-posts'
import '../components/css/_base.scss'




export default function blog() {
    return (

        // <About />

        <section className='container home'>
            <div className='row'>
                <h2>Trending Posts</h2>

                {/* we can set up the cloumns manually in here */}
                <PostMasonry posts={OtherPosts} columns={3} />


            </div>
        </section>

    )
}