import {  Divider } from 'antd';
import AboutHeader from './Header';
import OurStory from './Story';
import MissionVision from './Mission';
import Values from './Values';
import Contact from './Contact';
import { AboutWrapper } from './style';

const About = () => {
  return (
    <AboutWrapper >
      <AboutHeader />
      <Divider />
      <OurStory />
      <Divider />
      <MissionVision />
      <Divider />
      <Values />
      <Divider />
      <Contact />
    </AboutWrapper>
  );
};

export default About;