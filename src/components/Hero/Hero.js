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
      <Button href="https://github.com/Evgedzo">Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;