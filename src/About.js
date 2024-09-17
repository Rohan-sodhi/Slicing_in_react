import { Link } from "react-router-dom"
export default function About() {
    return(
        <>
        {/* <div className="container-xxl bg-white p-0"> */}
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar & Hero Start */}
  <div className="container-xxl position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-utensils me-3" />
          Restoran
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/About" className="nav-item nav-link active">
            About
          </Link>
          <Link to="/Service" className="nav-item nav-link">
            Service
          </Link>
          <Link to="/Menu" className="nav-item nav-link">
            Menu
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="/Booking" className="dropdown-item">
                Booking
              </Link>
              <Link to="team.html" className="dropdown-item">
                Our Team
              </Link>
              <Link to="testimonial.html" className="dropdown-item">
                Testimonial
              </Link>
            </div>
          </div>
          <Link to="/Contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link to="" className="btn btn-primary py-2 px-4">
          Book A Table
        </Link>
      </div>
    </nav>
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          About Us
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item">
              <Link to="#">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Pages</Link>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              About
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-6 text-start">
              <img
                className="img-fluid rounded w-100 wow zoomIn" alt=""
                data-wow-delay="0.1s"
                src="/assets/img/about-1.jpg"
              />
            </div>
            <div className="col-6 text-start">
              <img
                className="img-fluid rounded w-75 wow zoomIn" alt=""
                data-wow-delay="0.3s"
                src="/assets/img/about-2.jpg"
                style={{ marginTop: "25%" }}
              />
            </div>
            <div className="col-6 text-end">
              <img
                className="img-fluid rounded w-75 wow zoomIn" alt=""
                data-wow-delay="0.5s"
                src="/assets/img/about-3.jpg"
              />
            </div>
            <div className="col-6 text-end">
              <img
                className="img-fluid rounded w-100 wow zoomIn" alt=""
                data-wow-delay="0.7s"
                src="/assets/img/about-4.jpg"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">
            About Us
          </h5>
          <h1 className="mb-4">
            Welcome to <i className="fa fa-utensils text-primary me-2" />
            Restoran
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </p>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  className="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  15
                </h1>
                <div className="ps-4">
                  <p className="mb-0">Years of</p>
                  <h6 className="text-uppercase mb-0">Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  className="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  50
                </h1>
                <div className="ps-4">
                  <p className="mb-0">Popular</p>
                  <h6 className="text-uppercase mb-0">Master Chefs</h6>
                </div>
              </div>
            </div>
          </div>
          <Link className="btn btn-primary py-3 px-5 mt-2" to="">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl pt-5 pb-3">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
          Team Members
        </h5>
        <h1 className="mb-5">Our Master Chefs</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src="/assets/img/team-1.jpg" alt="" />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src="/assets/img/team-2.jpg" alt="" />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item text-center rounded overflow-hidden">
            <div className="rounded-circle overflow-hidden m-4">
              <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
            </div>
            <h5 className="mb-0">Full Name</h5>
            <small>Designation</small>
            <div className="d-flex justify-content-center mt-3">
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-twitter" />
              </Link>
              <Link className="btn btn-square btn-primary mx-1" to="">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Company
          </h4>
          <Link className="btn btn-link" to="">
            About Us
          </Link>
          <Link className="btn btn-link" to="">
            Contact Us
          </Link>
          <Link className="btn btn-link" to="">
            Reservation
          </Link>
          <Link className="btn btn-link" to="">
            Privacy Policy
          </Link>
          <Link className="btn btn-link" to="">
            Terms &amp; Condition
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Contact
          </h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            here,O7 Services, 2nd Floor Badwal Complex, Jalandhar, Punjab 144001, IND - 62617.

          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +91 8360020881
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            rohansodhi66@gmail.com
          </p>
          <div className="d-flex pt-2">
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Opening
          </h4>
          <h5 className="text-light fw-normal">Monday - Saturday</h5>
          <p>09AM - 09PM</p>
          <h5 className="text-light fw-normal">Sunday</h5>
          <p>10AM - 08PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
            Newsletter
          </h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control border-primary w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <Link className="border-bottom" to="#">
              Your Site Name
            </Link>
            , All Right Reserved.
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By{" "}
            <Link className="border-bottom" to="https://htmlcodex.com">
              HTML Codex
            </Link>
            <br />
            <br />
            Distributed By{" "}
            <Link
              className="border-bottom"
              to="https://themewagon.com"
              target="_blank"
            >
              ThemeWagon
            </Link>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <Link to="">Home</Link>
              <Link to="">Cookies</Link>
              <Link to="">Help</Link>
              <Link to="">FQAs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <Link to="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </Link>
{/* </div> */}

        </>
    )
}