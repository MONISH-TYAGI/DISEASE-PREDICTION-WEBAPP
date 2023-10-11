import React from 'react';
import './App.css'; // You need to import your CSS files here
import './App2.css';
import logo from './images/logo.png';
import hamMenuIcon from './images/ham-menu-icon.png';
import closeIcon from './images/close-icon.png';
import searchIconDark from './images/search-icon-dark.png';
import headerImage from './images/Header.png';
import aboutImg from './images/about-img.png';
import dotsImage from './images/4-dots.png';
import serviceIcon1 from './images/service-icon-1.png';
import serviceIcon2 from './images/service-icon-2.png';
import serviceIcon3 from './images/service-icon-3.png';
import serviceIcon4 from './images/service-icon-4.png';
import banner2 from './images/banner-2-img.png';
import doctor1 from './images/s_02.png';
import doctor2 from './images/s_01.png';
import doctor3 from './images/s_03.png';
import post1 from './images/post-1.jpg';
import post2 from './images/post-2.jpg';
import post3 from './images/post-3.jpg';
import Header from './Header';
function Home() {
  return (
    <div>
      {/* header */}
      <header className="header "style={{background:"#1AACAC"}}>
      <Header></Header>
    <div className="header-inner text-white text-center">
      <div className="container grid">
        <div className="header-inner-left">
          <h1><br /><span><br />Brain Tumor<br /> Detection </span></h1>
          <p className="text text-md">
            &nbsp;
            <h3>A brain tumor diagnosis can be a daunting experience. That's why we're here to provide you with accurate information and the resources you need to make informed decisions about your health.</h3>
          </p>
          <div className="btn-group">
            <br /><br /><br /><br /><a href="#" className="btn btn-white">Learn More</a>
          </div>
        </div>
        <div className="header-inner-right">
          <img src={headerImage} alt="header image" />
        </div>
      </div>
    </div>
  </header>

 {/* main */}
 <main>
        {/* about section */}
        <section id="about" className="about py">
          {/* ... (About section content) ... */}
          <div class = "about-inner">
                <div class = "container grid">
                    <div class = "about-left text-center">
                        <div class = "section-head">
                            <h2>About Us</h2>
                            <div class = "border-line"></div>
                        </div>
                        <p class = "text text-lg">Our team of experts is committed to staying at the forefront of brain tumor detection and prevention, using the latest technologies and techniques to provide you with the most accurate and reliable information possible.</p>
                        <a href = "#" class = "btn btn-white">Learn More</a>
                    </div>
                    <div class = "about-right flex">
                        <div class = "img">
                            <img src = {aboutImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* banner one */}
        <section id="banner-one" className="banner-one text-center">
          {/* ... (Banner one content) ... */}
          <div class = "container text-white flex justify-center">
                <blockquote class = "lead"><i class = "fas fa-quote-left"></i> Early detection is key in treating brain tumors. If you have any symptoms, don't wait. See a doctor as soon as possible <i class = "fas fa-quote-right"></i></blockquote>
                
            </div>
        </section>

        {/* services section */}
        <section id="services" className="services py">
          {/* ... (Services section content) ... */}
          <div class = "container">
                <div class = "section-head text-center">
                    <h2 class = "lead">The Best Doctor gives the least medicines</h2>
                    <p class = "text text-lg">And Provides you With the best result</p>
                    <div class = "line-art flex">
                        <div></div>
                        <img src = {dotsImage}/>
                        <div></div>
                    </div>
                </div>
                <div class = "services-inner text-center grid">
                <article className="service-item">
            <div className="icon flex justify-center items-center">
                <div className="circle" style={{ backgroundColor: "#1aacac", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <i className="fa-solid fa-lungs fa-3x" style={{ color: "white" }}></i>
                </div>
            </div>
            <h3 className='text-3xl font-bold'>Cardio Monitoring</h3>
            <p className="text text-sm leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!</p>
        </article>

        <article className="service-item">
            <div className="icon flex justify-center items-center">
                <div className="circle" style={{ backgroundColor: "#1aacac", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <i class="fa-solid fa-microscope fa-3x "style={{ color: "white" }} ></i> */}
                    <i className="fa-solid fa-microscope fa-3x" style={{ color: "white" }}></i>
                </div>
            </div>
            <h3 className='text-3xl font-bold'>Medical Treatment</h3>
            <p className="text text-sm leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!
</p>
        </article>
        <article className="service-item">
            <div className="icon flex justify-center items-center">
                <div className="circle" style={{ backgroundColor: "#1aacac", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <i class="fa-solid fa-microscope fa-3x "style={{ color: "white" }} ></i> */}
                <i class="fa-solid fa-heart-pulse fa-3x" style={{ color: "white" }}></i>
            
                </div>
            </div>
            <h3 className='text-3xl font-bold'>Emergency Help</h3>
            <p className="text text-sm leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!
</p>
        </article>
        <article className="service-item">
            <div className="icon flex justify-center items-center">
                <div className="circle" style={{ backgroundColor: "#1aacac", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <i class="fa-solid fa-microscope fa-3x "style={{ color: "white" }} ></i> */}
                <i class="fa-solid fa-user-doctor fa-3x" style={{ color: "white" }}></i>
            
                </div>
            </div>
            <h3 className='text-3xl font-bold'>First Aid</h3>
            <p className="text text-sm leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus doloribus facilis velit, assumenda tempora quas mollitia quos voluptatibus consequatur!
</p>
        </article>

               

                </div>
            </div>
        </section>

        {/* banner two section */}
        <section id="banner-two" className="banner-two text-center">
          {/* ... (Banner two content) ... */}
          <div class = "container grid">
                <div class = "banner-two-left">
                    <img src = {banner2}/>
                </div>
                <div class = "banner-two-right">
                    <p class = "lead text-white">"Don't let fear or denial keep you from getting a brain tumor screening. Early detection can save your life."</p>
                    <div class = "btn-group">
                        <a href = "#" class = "btn btn-white">Learn More</a>
                   </div>
                </div>
            </div>
        </section>

        {/* doctors section */}
        <section id="doc-panel" className="doc-panel py">
          {/* ... (Doctors section content) ... */}
          <div class = "container">
                <div class = "section-head">
                    <h2>Our Doctor Panel</h2>
                </div>

                <div class = "doc-panel-inner grid">
                    <div class = "doc-panel-item">
                        <div class = "img flex">
                            <img src = {doctor1} alt = "doctor image"/>
                            <div class = "info text-center bg-blue text-white flex">
                                <a href="https://www.medibuddy.in/doctors/pune/profile/15023-Dr-Ronak-Bhanushali"><p class = "lead">Dr. Ronak Bhanushali</p></a>
                                <p class = "text-lg">Neurologist</p>
                            </div>
                        </div>
                    </div>

                    <div class = "doc-panel-item">
                        <div class = "img flex">
                            <img src = {doctor2} alt = "doctor image"/>
                            <div class = "info text-center bg-blue text-white flex">
                                <a href="https://www.medibuddy.in/doctors/pune/profile/15023-Dr-Ronak-Bhanushali"><p class = "lead">Dr. Girija Raheja</p></a>
                                <p class = "text-lg">Cardiology</p>
                            </div>
                        </div>
                    </div>

                    <div class = "doc-panel-item">
                        <div class = "img flex">
                            <img src = {doctor3} alt = "doctor image"/>
                            <div class = "info text-center bg-blue text-white flex">
                                <a href="https://www.medibuddy.in/doctors/pune/profile/15023-Dr-Ronak-Bhanushali"><p class = "lead">Dr. Ashwin More</p></a>
                                <p class = "text-lg">Oncologist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* package services section */}
        <section id="package-service" className="package-service py text-center">
          {/* ... (Package services section content) ... */}
          <div className="container">
  <div className="package-service-head text-white">
    <h2>Precaution To Be Taken</h2>
    <p className="text text-lg">Follow The instructions and stay safe</p>
  </div>
  <div className="package-service-inner grid">
    <div className="package-service-item bg-white">
      <div className="icon flex justify-center">
        <i className="fas fa-phone fa-2x "></i>
      </div>
      <h3 className='text-3xl font-bold'>Regular Case</h3>
      <a href="#" className="btn btn-blue">Precaution</a>
      <p className="text text-sm leading-9">
        <b>
          1. Get regular check-ups<br />
          2. Wear protective gear<br />
          3. Avoid exposure to radiation<br />
          4. Exercise regularly<br />
          5. Manage stress<br />
          6. Know the warning signs
        </b>
      </p>
    </div>

    <div className="package-service-item bg-white">
      <div className="icon flex justify-center">
        <i className="fas fa-calendar-alt fa-2x"></i>
      </div>
      <h3 className='text-3xl font-bold'>Serious Case</h3>
      <a href="#" className="btn btn-blue">Precaution</a>
      <p className="text text-sm leading-9">
        <b>
          1. Work with a team of specialists<br />
          2. Follow your treatment plan<br />
          3. Manage side effects<br />
          4. Practice self-care<br />
          5. Seek Support<br />
          6. Monitor your symptoms<br />
          7. Consider clinical trials
        </b>
      </p>
    </div>

    <div className="package-service-item bg-white">
      <div className="icon flex justify-center">
        <i className="fas fa-comments fa-2x"></i>
      </div>
      <h3 className='text-3xl font-bold'>Emergency Case</h3>
      <a href="#" className="btn btn-blue">Precaution</a>
      <p className="text text-sm leading-9">
        <b>
          1. Call 911<br />
          2. Stay calm<br />
          3. Provide information<br />
          4. Bring medical records<br />
          5. Follow medical advice<br />
          6. Monitor your symptoms<br />
          7. Seek support
        </b>
      </p>
    </div>
  </div>
</div>

        </section>

        {/* posts section */}
        <section id="posts" className="posts py">
          {/* ... (Posts section content) ... */}
          <div class = "container">
                <div class = "section-head">
                    <h2>Latest Post</h2>
                </div>
                <div class = "posts-inner grid">
                    <article class = "post-item bg-white">
                        <div class = "img">
                            <img src = {post1}/>
                        </div>
                        <div class = "content">
                            <h4>Inspiring stories of person and family centered care during a global pandemic.</h4>
                            <p class = "text text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptas eius recusandae sunt obcaecati esse facere cumque. Aliquid, cupiditate debitis.</p>
                            <p class = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia ipsam, quis iure sed nulla.</p>
                            <div class = "info flex">
                                <small class = "text text-sm"><i class = "fas fa-clock"></i> October 27, 2021</small>
                                <small class = "text text-sm"><i class = "fas fa-comment"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>

                    <article class = "post-item bg-white">
                        <div class = "img">
                            <img src = {post2}/>
                        </div>
                        <div class = "content">
                            <h4>Inspiring stories of person and family centered care during a global pandemic.</h4>
                            <p class = "text text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptas eius recusandae sunt obcaecati esse facere cumque. Aliquid, cupiditate debitis.</p>
                            <p class = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia ipsam, quis iure sed nulla.</p>
                            <div class = "info flex">
                                <small class = "text text-sm"><i class = "fas fa-clock"></i> October 27, 2021</small>
                                <small class = "text text-sm"><i class = "fas fa-comment"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>

                    <article class = "post-item bg-white">
                        <div class = "img">
                            <img src = {post3}/>
                        </div>
                        <div class = "content">
                            <h4>Inspiring stories of person and family centered care during a global pandemic.</h4>
                            <p class = "text text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptas eius recusandae sunt obcaecati esse facere cumque. Aliquid, cupiditate debitis.</p>
                            <p class = "text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia ipsam, quis iure sed nulla.</p>
                            <div class = "info flex">
                                <small class = "text text-sm"><i class = "fas fa-clock"></i> October 27, 2021</small>
                                <small class = "text text-sm"><i class = "fas fa-comment"></i> 5 comments</small>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        {/* contact section */}
        <section id="contact" className="contact py">
          {/* ... (Contact section content) ... */}
        </section>
      </main>

      {/* footer */}
      <footer id="footer" className="footer text-center">
          <div class = "container">
            <div class = "footer-inner text-white py grid">
                <div class = "footer-item">
                    <h3 class = "footer-head">about us</h3>
                    <div class = "icon">
                        <img src = {logo}/>
                    </div>
                    <p class = "text text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis saepe incidunt fugiat optio corporis ea!</p>
                    <address>
                        Medic Clinic <br/>
                        69 Deerpark Rd, Mount Merrion <br/>
                        Co. Dublin, A94 E9D3 <br/>
                        Ireland
                    </address>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">tags</h3>
                    <ul class = "tags-list flex">
                        <li>medical care</li>
                        <a href="https://in.kompass.com/a/ambulance-services/75100/"><li>Emergency <br/>(Ambulance Service)</li></a>
                        <li>therapy</li>
                        <li>surgery</li>
                        <li>medication</li>
                        <li>nurse</li>
                    </ul>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">Quick Links</h3>
                    <ul>
                        <li><a href = "#" class = "text-white">Our Services</a></li>
                        <li><a href = "#" class = "text-white">Our Plan</a></li>
                        <li><a href = "#" class = "text-white">Privacy Policy</a></li>
                        <li><a href = "#" class = "text-white">Appointment Schedule</a></li>
                    </ul>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">make an appointment</h3>
                    <p class = "text text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, omnis.</p>
                    <ul class = "appointment-info">
                        <li>8:00 AM - 11:00 AM</li>
                        <li>2:00 PM - 05:00 PM</li>
                        <li>8:00 PM - 11:00 PM</li>
                        <li>
                            <i class = "fas fa-envelope"></i>
                            <span>revomedic@gmail.com</span>
                        </li>
                        <li>
                            <i class = "fas fa-phone"></i>
                            <span>+003 478 2834(00)</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class = "footer-links">
                <ul class = "flex justify-center">
                    <li><a href = "#" class = "text-white flex justify-center"> <i class = "fab fa-facebook-f"></i></a></li>
                    <li><a href = "#" class = "text-white flex justify-center"> <i class = "fab fa-twitter"></i></a></li>
                    <li><a href = "#" class = "text-white flex justify-center"> <i class = "fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        
      </footer>
      {/* ... rest of your JSX ... */}
    </div>
  )
}

export default Home
