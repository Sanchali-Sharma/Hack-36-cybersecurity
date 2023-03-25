import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {

    return (
        <Container>
            <div className="page-footer">
                <div className="footer-content">
                    <div className="row">
                        <div className="data">
                            <h6 className="menu">Catalogue</h6>
                            <ul className="sub">
                                <li><a href="" className="light">Dummy</a></li>
                                <li><a href="" className="light">Dummy</a></li>
                                <li><a href="" className="light">Dummy</a></li>
                                <li><a href="" className="light">Dummy</a></li>
                                <li><a href="" className="light">Dummy</a></li>
                            </ul>
                            {/* <h6 className="menu">Cadbury India</h6>
                            <ul className="sub">
                                <li><a href="" className="light">FAQs</a></li>
                                <li><a href="" className="light">About Us</a></li>
                                <li><a href="" className="light">Blogs</a></li>
                            </ul> */}
                        </div>
                        <div className="data">
                            <h6 className="menu">POPULAR OCCASIONS</h6>
                            <ul className="sub">
                            <li><a href="" className="light">Dummy</a></li>
                            <li><a href="" className="light">Dummy</a></li>
                            <li><a href="" className="light">Dummy</a></li>
                            <li><a href="" className="light">Dummy</a></li>
                            <li><a href="" className="light">Dummy</a></li>
                            </ul>
                        </div>
                        <div className="data">
                        <h6 className="menu">CONTACT INFORMATION</h6>
                            <ul className="sub">
                                <li><a href="" className="light">Email:suggestions@mdlzindia.com</a></li>
                                <li><a href="" className="light">Phone: 1800-227-080</a></li>
                                <li><a href="" className="light">Enquiry Form</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="center last">
                <strong>Copyright &copy; www.gaming.com</strong>  <strong style={{ marginLeft: '1rem' }}>All Rights Reserved!!</strong>
            </div>
        </Container>
    );
};

const Container = styled.div`
  /* display: flex; */
  `;

export default Footer;