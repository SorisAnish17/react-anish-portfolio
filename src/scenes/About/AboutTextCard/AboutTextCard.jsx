import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Soris Anish </span>
        from <span className={s.purple}>Kanyakumari,Tamil Nadu</span>
        <br />
        I'm Software engineer with expertise in cross-platform
        development <br />
        using Mern FullStack Development.
        <br />
        <br />
        I have a Bachelor's degree in Computer Science from
        St.Xavier's Catholic College of Engineering,Kanyakumari
        <br />
        Completed My Mern Stack Course from SkillSafari,Coimbatore
        <br />
        <p>
          Apart from coding,some other activites that i love to do!
        </p>
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
