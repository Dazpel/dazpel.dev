import React from 'react';
import {
  HeadingWrapCont,
  HeadingElements,
  Line,
  SocialCont,
  Social
} from './styles';
import { Container } from '../container';
import { HeadingMain } from '../../styles/';
import TypeWritter from './typeEffect'

function HeadingWrap() {
  return (
    <Container>
      <HeadingWrapCont>
        <HeadingElements>
          <Line />
          <SocialCont>
            <a
              title="Github Repository"
              target="_blank"
              rel="noopener noreferrer"
              href="https://bit.ly/2UMe6cv"
            >
              <Social className="git"/>
            </a>
            <a
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://bit.ly/31O7Ou7"
            >
              <Social className="linkedin"/>
            </a>
          </SocialCont>
        </HeadingElements>
       <TypeWritter />
      </HeadingWrapCont>
    </Container>
  );
}

export default HeadingWrap;
