import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const IntroSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail(email)) {
      emailjs
        .sendForm(
          'service_yev0xaw',
          'template_epicvyf',
          form.current,
          'xgBXTuiq3FKDcpSW4',
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success('ThankYou!');
          },
          (error) => {
            console.log(error.text);
          },
        );
      setFullName('');
      setEmail('');
      setMessage('');
    } else {
      toast.error('Invalid Email');
    }
  };

  function isValidEmail(email) {
    // Regular expression for validating an email address
    const emailRegex =
      /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // Test the email against the regex pattern
    return emailRegex.test(email);
  }

  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a Full Stack Developer specializing in building
              Scalable web platforms.
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  JavaScripe,ReactJs,NodeJs,ExpressJs,MongoDB,Firebase
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              integrating various <br />
              third-party libraries, API integration, push
              notifications and analytics.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>
      <div style={{ marginTop: '100px' }}>
        <h2
          style={{
            fontSize: '30px',
            display: 'flex',
            justifyContent: 'center',
          }}
          className={s.purple}
        >
          GET IN TOUCH
        </h2>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
          ref={form}
        >
          <input
            type="text"
            placeholder="Full Name"
            style={{ width: '375px', margin: '15px', padding: '5px' }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            name="from_name"
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              width: '375px',
              margin: '15px',
              padding: '5px',
            }}
            value={email}
            name="from_email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            style={{
              width: '375px',
              height: '150px', // Set the desired height for the textarea
              margin: '15px',
              padding: '10px', // You can adjust the padding as needed
            }}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#7a249c',
                width: '100px',
                padding: '8px',
                borderRadius: '25px',
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/SorisAnish17"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/soris-anish/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/soris-anish/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/soris-anish/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
