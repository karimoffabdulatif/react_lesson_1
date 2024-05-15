import { useState } from "react"
import logo from './assets/Ellipse 1.svg'
import content_img1 from './assets/Rectangle 30.png'
import content_img2 from './assets/Rectangle 32.png'
import content_img3 from './assets/Rectangle 34.png'
import foter_icon_1 from './assets/fb.svg'
import foter_icon_2 from './assets/insta.svg'
import foter_icon_3 from './assets/twitter.svg'
import foter_icon_4 from './assets/Linkedin.svg'
import './App.css'

function App (){
  return (
    <>

    <header class="header-link">
  <div class="container">
  <div class="link">
    <a href="#" target="_blank" class="links">Works</a>
    <a href="blog.html" target="_blank" class="links">Blog</a>
    <a href="contact.html" target="_blank" class="links">Contact</a>
  </div>


<button className="menu_sidebar">h</button>

</div>
</header>


<main>

<section class="section-1">
<div class="start">
<div class="container">
<div class="left-textes">
  <p class="tittle">Hi, I am John,
    Creative Technologist</p>

  <p class="p-two">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>  

    <div class="download-link">
      <a href="#" target="_blank" class="to-download">Downloat Resume</a>
    </div>
</div>
 
<div class="photo-men">
  <img src={logo} alt="man" />
</div>
</div>
</div>
</section>

<section class="section-2">
<div class="intro">
  <div class="container">

    <p class="intro-text-1">Recent posts</p>
    <a href="#" target="_blank" class="intro-link">view all</a>
    
    <div class="box-1">
      <p class="intro-box-1">Making a design system from scratch</p>

    <p class="date-box">12 Feb 2020 <span class="line">|</span>Design, Pattern</p>

    <p class="information-box">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
      duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>

    <div class="box-2">
      <p class="intro-box-1">Creating pixel perfect icons in Figma</p>

    <p class="date-box">12 Feb 2020 <span class="line">|</span>Figma, Icon Design</p>

    <p class="information-box">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
      duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>

  </div>
</div>
</section>


<section class="section-3">
    <div class="container">
    <p class="list3-text">Featured works</p>
      <div class="list3-box1">
      <div class="list3-image1">
        <img src={content_img1} alt="img_1" />
        
      </div>

      <div class="list3-info">

      <p class="image-text">Designing Dashboards</p>
      
      <p class="year-1">2020</p>

      <p class="dashboard">Dashboard</p>

      <p class="list3-information">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      </div>
      </div>
    </section>
      

      <section>
        <div class="container-1">
        <div class="list3-box2">
      <div class="list3-image2">
        <img src={content_img2} alt="img_2" />
        
      </div>

      <div class="list3-info">

      <p class="image-text">Vibrant Portraits of 2020</p>
      
      <p class="year-1">2018</p>

      <p class="dashboard">Illustration</p>

      <p class="list3-information">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      </div>
    
      
      <div class="list3-box3 container">
      <div class="list3-image3">
        <img src={content_img3} alt="" />
        
      </div>

      <div class="list3-info">

      <p class="image-text">36 Days of Malayalam type</p>
      
      <p class="year-1">2018</p>

      <p class="dashboard">Typography</p>

      <p class="list3-information">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      </div>
        </div>
      
  
  </section>

</main>

<hr class="hr_footer"/>

<futer>

    <div class="futer-links"> 
      <div class="link-facebook"><a href="#" target="_blank"><img src={foter_icon_1} alt="facebook"/></a></div>
      <div class="link-instagram"><a href="#" target="_blank"><img src={foter_icon_2} alt="instagram"/></a></div>
      <div class="link-twitter"><a href="#" target="_blank"><img src={foter_icon_3} alt="twitter"/></a></div>
      <div class="link-linkedin"><a href="#" target="_blank" class="link-linkeid"><img src={foter_icon_4} alt="linkedin"/></a></div>
    </div>
    <div>
    <p class="futer-end">Copyright ©2020 All rights reserved </p>
    </div>

  </futer>

    </>
    
  )


}
export default App