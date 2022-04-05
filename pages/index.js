import Acomplishments from '../components/Acomplishments/Acomplishments';
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Timeline />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
