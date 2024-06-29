import styled from "styled-components";
import React from "react";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Feel Free to Contact us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.836593680792!2d79.1771045!3d27.255653799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397591c77fc14f95%3A0x9c15d97bb9c2b965!2sD%20N%20Public%20School%2Cagnihotry%20Campus!5e0!3m2!1sen!2sin!4v1711012568060!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
          title="home"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/meqyzdeg"
              method="post"
              className="contact-inputs"
            >
              <input
                type="text"
                name="username"
                placeholder="Your username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                autoComplete="off"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                required
                autoComplete="off"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
