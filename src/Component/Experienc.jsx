import React from 'react'
import { motion } from "motion/react"
import './Experience.css'
function Experienc() {
    const transition = {
        duration: 0.8,
        opacity: 0,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return (
        // <div className='Mybd'>
        //     <div class="E1">
        //         <section class="'E2'">
        //             <div class="S3">
        //                 <img src="//cdn-imgs.dora.run/design/UXwJWCFFRsIn7xTzxLILU.webp/w/4096/h/4096/format/webp?" alt="Man in blue suit at a corporate event" />
        //             </div>
        //             <div class="E5">
        //                 <h1 class="E4">Experience the Future of</h1>
        //                 <p class="E6">Immerse yourself in the cutting-edge world of 3D filmmaking. Our state-of-the-art technology and innovative storytelling techniques transport you</p>
        //                 <a href="#" class="Ebtn">Discover Now</a>
        //             </div>
        //         </section>

        //         <section class="E7">
        //             <div class="E8">
        //                 <img src="//cdn-imgs.dora.run/design/BA4DgReEla1F8O8Bm04G9l.webp/w/4096/h/4096/format/webp?" alt="Woman with glasses in professional setting" />
        //             </div>
        //             <div class="E9">
        //                 <h2 class="E10">Upcoming 3D Releases</h2>
        //                 <p class="releases-description">Stay ahead of the curve and be the first to know about the most anticipated 3D movie premieres. From sci-fi adventures to fantasy epics</p>
        //                 <a href="#" class="Ebtn">Learn More</a>
        //             </div>
        //         </section>
        //     </div>
        // </div>
        <>

            <div className="slidE1223">

                <div class="container">
                    <motion.div animate={{ y: -10 }}
                        transition={transition} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <section class="hero-section">
                            <div class="hero-image">
                                <img src="//cdn-imgs.dora.run/design/UXwJWCFFRsIn7xTzxLILU.webp/w/4096/h/4096/format/webp?" alt="Man in blue suit at a corporate event" />
                            </div>
                            <div class="hero-content">
                                <h1 class="hero-title">Experience the Future of</h1>
                                <p class="hero-description">Immerse yourself in the cutting-edge world of 3D filmmaking. Our state-of-the-art technology and innovative storytelling techniques transport you</p>
                                <a href="#" class="Ebtn">Discover Now</a>
                            </div>
                        </section>
                    </motion.div>

                    <motion.div animate={{ y: -10 }}
                        transition={transition} initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <section class="releases-section">
                            <div class="releases-image">
                                <img src="//cdn-imgs.dora.run/design/BA4DgReEla1F8O8Bm04G9l.webp/w/4096/h/4096/format/webp?" />
                            </div>
                            <div class="releases-content">
                                <h2 class="releases-title">Upcoming 3D Releases</h2>
                                <p class="releases-description">Stay ahead of the curve and be the first to know about the most anticipated 3D movie premieres. From sci-fi adventures to fantasy epics</p>
                                <a href="#" class="Ebtn">Learn More</a>
                            </div>
                        </section>

                    </motion.div>
                </div>
            </div >

        </>
    )
}

export default Experienc
