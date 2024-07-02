import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import {  FaGithub, FaInstagram, FaLinkedinIn, } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>
            <div>
              <Button>
                <NavLink to="/E-Commerce/contact">Get started</NavLink>
              </Button>
            </div>
          </div>
        </section>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3 className="h3">Harshit's Superstore</h3>
              <p>
                Follow us on social media for the latest updates, promotions,
                and exclusive offers.
              </p>
            </div>
            {/* <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <input type="submit" value="Submit" />
              </form>
            </div> */}
            <div className="footer-social">
              <h3>Follow us</h3>
              <div className="footer-social--icons">
                <div>
                <a href="https://github.com/HaryAgni">
                  <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/hary_agni/">
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/harshit-agnihotri-agni15/">
                    <FaLinkedinIn className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call us</h3>
              <a href="tel:9368916168">+91 9368916168</a>
            </div>
          </div>
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>
                &copy; {new Date().getFullYear()} Harshit's Superstore. All
                rights reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    a {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.6rem;
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    div {
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
