import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:380666381235">+380-666-38-123-5</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:eugene112344@gmail.com">eugene112344@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always ready for action</Slogan>
        </CompanyContainer>
        <SocialContainer>
            <SocialIcons href='https://github.com/Evgedzo'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/yevhen-hotovshchykov-83a05b234/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/nosok.bati/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
