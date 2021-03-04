import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyles.module.css';
import 'bootstrap/dist/css/bootstrap.css';

class Coursify extends React.Component {
  render() {
      var bgtransparent={
        background: "white"
      };
    return(
      <div class="container-fluid nopadding">	
      <nav class="navbar navbar-expand-xl navbar-light fixed-top px-xl-2 paddingnav shadow-sm p-3 mb-5 bg-white rounded" style={bgtransparent}>
        <a class="navbar-brand"  href='http://blog.lidolearning.com/'><img src='#'/>Coursify</a>
        <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-label="toggle" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>		
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="dropdown">
              <a class="btn nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Boards </a>
              <ul class="dropdown-menu mobileviewdropdown1" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href='./youngleaders'>Young Leaders Scholarship</a></li>
                <li><a class="dropdown-item" href='./teacher-recruitment/'>Teach with us</a></li>
                <li><a class="dropdown-item" href='./meet-our-team/'>Meet our team</a></li>
                <li><a class="dropdown-item" href='http://blog.lidolearning.com/' target="_blank">Our Blog</a></li>
                <li><a class="dropdown-item" href='./faq'>FAQ</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Books </a>
              <ul class="dropdown-menu mobileviewdropdown1" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href='./coding'>Coding</a></li>
                <li><a class="dropdown-item" href='./english'>English</a></li>
                <li><a class="dropdown-item" href='./lidojr'>Lido Jr</a></li>
                <li><a class="dropdown-item" href='./maths'>Maths</a></li>
                <li><a class="dropdown-item" href='./science'>Science</a></li>
              </ul>
            </li>
            <li class="dropdown ncert-dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Exams </a>
                  <ul class="dropdown-menu mobileviewdropdown1" aria-labelledby="navbarDropdownMenuLink">       
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle">NCERT Solutions</a>
                          <ul class="dropdown-menu mobileviewdropdown2">
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 6</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./ncert-solutions-grade-6/mathematics/'>Maths</a></li>
                                      <li><a class="dropdown-item" href='./ncert-solutions-grade-6/science/'>Science</a></li>
                                  </ul>
                              </li>
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 7</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./ncert-solutions-grade-7/mathematics/'>Maths</a></li>
                                      <li><a class="dropdown-item" href='./ncert-solutions-grade-7/science/'>Science</a></li>
                                  </ul>
                              </li>
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 8</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./ncert-solutions-grade-8/mathematics/'>Maths</a></li>
                                      <li><a class="dropdown-item" href='./ncert-solutions-grade-8/science/'>Science</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle">Selina Solutions</a>
                          <ul class="dropdown-menu mobileviewdropdown2">
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 6</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-6/mathematics/'>Maths</a></li>
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-6/physics/'>Physics</a></li>
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-6/biology/'>Biology</a></li>
                                  </ul>
                              </li>
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 7</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-7/mathematics/'>Maths</a></li>
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-7/physics/'>Physics</a></li>
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-7/biology/'>Biology</a></li>
                                  </ul>
                              </li>
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 8</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-8/mathematics/'>Maths</a></li>
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-8/physics/'>Physics</a></li>
                                      <li><a class="dropdown-item" href='./selina-solutions-grade-8/biology/'>Biology</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle">Allied Solutions</a>
                          <ul class="dropdown-menu mobileviewdropdown2">
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 6</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./allied-solutions-grade-6/chemistry/'>Chemistry</a></li>
                                  </ul>
                              </li>
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 7</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./allied-solutions-grade-7/chemistry/'>Chemistry</a></li>
                                  </ul>
                              </li>
                              <li class="dropdown-item dropdown-submenu"><a data-toggle="dropdown" class="dropdown-toggle" href="#">Class 8</a>
                                  <ul class="dropdown-menu mobileviewdropdown2 mobilesubmenu" aria-labelledby="dropdownMenu3">
                                      <li><a class="dropdown-item" href='./allied-solutions-grade-8/chemistry/'>Chemistry</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li><a class="nav-link btn-navlink d-none d-lg-block" href='./pricing/'> Why Us?</a></li>
              
              <li><a class="nav-link d-block d-lg-none" href="https://student.lidolearning.com/">Sign Up</a></li>
          </ul>
      </div>
      <div>
          <div class="navbar-nav">
              <a class="nav-link btn-navlink d-none d-lg-block" href="https://student.lidolearning.com/"><button className={styles.btnstyle} aria-label="login">Sign Up</button></a>
          </div>
      </div>


    <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-label="toggle">
    <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>		
    </button>


  </nav>
    <div class="contentpane pt-xl-5 pt-2">
      <div class="row py-5 px-md-5 px-1 wow slideInUp widthlargescreen">
        <div class="col-lg-6 col-12">
            <h1 class="homehead headpoppins mt-4">Every student matters</h1>
            <p class="subtitle mt-4">Get your doubts clarified and attend LIVE classes  <br/>in the language of your choice</p>
            <div class="input-group md-form col-sm-7 pl-0 pr-0 shadow bg-white">
              <input class="form-control" type="text" placeholder="Search  your doubt here" aria-label="Search" />
              <div class="input-group-append ">
                <span class="input-group-text"><a class="decoration-none" href="#"><i class="fa fa-search"></i></a></span>
              </div>
            </div>
            <br/><br/>
            <button class="btn mt-5 freetrialbuttonclick d-none d-md-block" href="http://blog.lidolearning.com/" className={styles.btnstyle} id="youngleadersheader">Get the free app on Play Store</button>
        </div>
        <div class="col-lg-6 col-12">
            <div class="row py-3">
                <div class="modal-video-placeholder" id="tsetModal">
                    <img src="../images/video-placeholder-img.png" class="img-fluid modal-video-placeholder-img"/>
                    <img src="../images/play-button.png" class="playvideobutton" />
                </div>
                <div id="videoplaceholder" class="modal" role="dialog">
                    <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="close">&times;</button>
                        </div> 
                        <div class="modal-body">
                            <div class="embed-responsive embed-responsive-16by9">
                            <iframe
                                id="video-load"
                                loading="lazy"
                                width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-6 d-flex align-items-center nopadding">
                    <div class="px-md-2">
                        <img src="../images/classes.svg" class="img-fluid widthsmiley"/>
                    </div>
                    <div>
                        <p class="headpoppins mb-0 counttext">10,00,000+</p>
                        <p class="countdesc mb-0">video lectures</p>
                    </div>
                </div>
                <div class="col-md-6 col-6 d-flex align-items-center nopadding">
                    <div class="px-md-2">
                        <img src="../images/smiley.svg" class="img-fluid widthsmiley"/>
                    </div>
                    <div>
                        <p class="headpoppins mb-0 counttext">40,000</p>
                        <p class="countdesc mb-0">satisfied students</p>
                    </div>
                </div>
            </div>
            <div class="row d-block d-md-none text-center">
                <button class="btn btnstyle mt-5 freetrialbuttonclick" id="homepagebanner"><a href="#">Book a free class</a></button>
            </div>
        </div>
      </div>
    </div>

    <div class="contentpane pt-xl-5 pt-2">
    <div class="row px-md-4 px-3 pb-5 justify-content-center wow slideInUp widthlargescreen" data-wow-delay="1s">
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" className={styles.cardhead}>Live Classes</p>
            </div>
            <div class="content-wrapper">
            <div class="row contentdesc justify-content-center">
                <div className={styles.cardstyle}>
                    <p class="font-18 mb-0">Learn live from<br/>the best tutors<br/>in India</p>
                    <button class="btn mt-5 freetrialbuttonclick d-none d-md-block" href="#" className={styles.btnstyle} id="youngleadersheader">Book now</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" className={styles.cardhead}>Earn Cash</p>
            </div>
            <div class="content-wrapper">
            <div class="row contentdesc justify-content-center">
                <div className={styles.cardstyle}>
                    <p class="font-18 mb-0">Ask doubts<br/>Answer questions<br/>Earn Money!</p>
                    <button class="btn mt-5 freetrialbuttonclick d-none d-md-block" href="#" className={styles.btnstyle} id="youngleadersheader">Explore</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" className={styles.cardhead}>Exam Preparation</p>
            </div>
            <div class="content-wrapper">
            <div class="row contentdesc justify-content-center">
                <div className={styles.cardstyle}>
                    <p class="font-18 mb-0">JEE Mains<br/>JEE Advanced<br/>Neet</p>
                    <button class="btn mt-5 freetrialbuttonclick d-none d-md-block" href="#" className={styles.btnstyle} id="youngleadersheader">Explore</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" className={styles.cardhead}>Sample tests</p>
            </div>
            <div class="content-wrapper">
            <div class="row contentdesc justify-content-center">
                <div className={styles.cardstyle}>
                    <p class="font-18 mb-0">Test with<br/>detailed analysis<br/>national ranking</p>
                    <button class="btn mt-5 freetrialbuttonclick d-none d-md-block" href="#" type="submit" className={styles.btnstyle} id="youngleadersheader">Explore</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    <div class="contentpane pt-xl-5 pt-2">
    <div>
    <div>
        <p className={styles.heading}>Study materials of 50+ State Boards</p>
        <div className="container-fluid shadow p-4 mb-4 bg-white">
        <div className="d-flex justify-content-between">
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
        </div>
        <div className="d-flex justify-content-between">
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
        </div>
        <div className="d-flex justify-content-between">
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
        </div>
        <div className="d-flex justify-content-between">
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
        </div>
        <div className="d-flex justify-content-between">
            <a class="text-decoration-none" href="#"><img src="#" />Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
            <a class="text-decoration-none" href="#"><img src="#" href="#"/>Andhra Pradesh </a>
        </div>
        </div> 
    </div>
    </div>
    </div>


    <div class="contentpane pt-xl-5 pt-2">
    <div>
        <p className={styles.heading}>Exams that you can ace with Coursify</p>
        <div class="row px-md-4 px-3 pb-4 justify-content-center wow slideInUp widthlargescreen">
        <div class="col-xl-4 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
            <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
                <div class="row icondivheight justify-content-center">
                    <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Board Exams</a></p>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
            <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
                <div class="row icondivheight justify-content-center">
                    <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">JEE Mains & Advanced</a></p>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
            <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
                <div class="row icondivheight justify-content-center">
                    <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Neet</a></p>
                </div>
            </div>
        </div>    
    </div>
    </div>
    </div>


<div class="contentpane pt-xl-5 pt-2">
<div >
    <p className={styles.heading}>Explore our subjects</p>
    <div class="row px-md-3 px-3 pb-5 justify-content-center wow slideInUp widthlargescreen">
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Maths</a></p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Physics</a></p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Chemistry</a></p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Biology</a></p>
            </div>
        </div>
    </div>
    </div>
    <div class="row px-md-3 px-3 pb-5 justify-content-center wow slideInUp widthlargescreen">
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Science</a></p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Commerce</a></p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Coding</a></p>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
        <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
            <div class="row icondivheight justify-content-center">
                <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Languages</a></p>
            </div>
        </div>
    </div>
    </div>
</div>
</div>

<div class="contentpane pt-xl-5 pt-2">
<div>
  <p className={styles.heading}>Free Solutions</p>
  <div class="row px-md-3 px-3 pb-5 justify-content-center wow slideInUp widthlargescreen">
      <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
          <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
              <div class="row icondivheight justify-content-center">
                  <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">NCERT Solutions</a></p>
              </div>
          </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
          <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
              <div class="row icondivheight justify-content-center">
                  <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">NCERT Exemplar</a></p>
              </div>
          </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight ">
          <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
              <div class="row icondivheight justify-content-center">
                  <p class="font-28 headpoppins" href="#" className={styles.cardhead}><a class="text-decoration-none" href="#">Reference Books</a></p>
              </div>
          </div>
      </div>
      <div class="col-xl-3 col-md-6 col-12  my-xl-0 my-md-2 subjectcardheight">
          <div class="boxsubject pt-3 px-3 pb-2 subjectheight shadow p-4 mb-4 bg-white">
              <div class="row icondivheight justify-content-center">
                  <p class="font-28 headpoppins" className={styles.cardhead}><a class="text-decoration-none" href="#">Exam Prep material</a></p>
              </div>
          </div>
      </div>
  </div>
</div>
</div>


<div class="contentpane pt-xl-5 pt-2">
   <p className={styles.heading}>Testimonials</p>
   <div class="row py-5 px-md-5 teacher-container wow slideInUp widthlargescreen" data-wow-delay="1s">
    <div class="col-xl-3 col-md-6 col-12 px-md-4 my-3 teacherupdated teacher" data-anim="anim1">
        <img src="#" class="img-fluid teacherimgwidth" alt="ateacher"/>
        <div class="teacherbox p-3 mt-4">
            <p class="testparentname headpoppins">“Science is everywhere - let’s investigate through experiments!“</p>
            <p class="testparentname">Ayushi Ma’am, Master of Science</p>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12 px-md-4 my-3 teacherupdated teacher" data-anim="anim2">
    <img src="#" class="img-fluid teacherimgwidth" alt="bteacher"/>
        <div class="teacherbox p-3 mb-4 mt-5">
            <p class="testparentname headpoppins">“I’ll make you fall in love with Maths through fun games!”</p>
            <p class="testparentname">Ravinder Sir, B.E. Mumbai University</p>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12 px-md-4 my-3 teacherupdated teacher" data-anim="anim1">
        <img src="#" class="img-fluid teacherimgwidth" alt="cteacher"/>
        <div class="teacherbox p-3 mt-4">
            <p class="testparentname headpoppins">“Let’s build the next Facebook together!”</p>
            <p class="testparentname">Gayathri Ma’am, IIT Bombay, PhD</p>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 col-12 px-md-4 my-3 teacherupdated teacher" data-anim="anim2">
    <img src="#" class="img-fluid teacherimgwidth" alt="dteacher"/>
        <div class="teacherbox p-3 mb-4 mt-5">
            <p class="testparentname headpoppins">“I’ll teach you how to write creatively and convincingly!”</p>
            <p class="testparentname">Nigel Sir, Bachelor in Media Studies</p>
        </div>
    </div>
    </div>      
</div>

        <div>
            <div class="d-flex">
                <div class="p-2 flex-fill"></div>
                <div class="p-2 flex-fill border border-dark text-center shadow black p-2 mb-4 bg-white" ><a class="text-decoration-none" href="https://student.lidolearning.com/"><i class="fa fa-download"></i> Download the app for free</a></div>
                <div class="p-2 flex-fill"></div>
            </div>
        </div>

</div>
    );
  }
}


ReactDOM.render(<Coursify />,document.getElementById('root'));