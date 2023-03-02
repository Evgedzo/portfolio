import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Let's build something <br />
        amazing together
      </SectionTitle>
      <SectionText>
        As a developer, I help companies build amazing websites, apps and services that are simple, beatutiful and easy to use.
      </SectionText>
      <a href="https://github.com/Evgedzo"><Button>Learn More</Button></a>

    </LeftSection>
  </Section>
);

export default Hero;