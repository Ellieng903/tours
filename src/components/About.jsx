import React from 'react'
import about from "../images/beach_vector.jpeg"
import Title from './Title'

function About() {
  return (
    <section className="section" id="about">
    <div className="section-title">
    <Title main_title='About' sub_title='us'/>
    </div>
    <div className="section-center about-center">
        <div className="about-img">
            <img src={about} className="about-photo" alt="awesome landscape"/>
        </div>
        <article className="about-info">
            <h3>Explore the difference</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium suscipit, ut aperiam
                maiores magni non vero quam consectetur minima reiciendis, ipsa velit. Ipsa, corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium suscipit, ut aperiam
                maiores magni non vero quam consectetur minima reiciendis, ipsa velit. Ipsa, corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laudantium suscipit, ut aperiam
                maiores magni non vero quam consectetur minima reiciendis, ipsa velit. Ipsa, corporis.</p>
            <a href="#home" className="btn">read more</a>
        </article>
    </div>
</section>
  )
}

export default About