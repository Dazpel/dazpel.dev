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
import TypeWritter from './typeEffect';

function HeadingWrap() {
  return (
    <Container>
      <HeadingWrapCont>
      <HeadingElements>
                    <Line />
                    <SocialCont>

                    <a
                            title='Github Repository'
                            target='_blank'
                            rel='noreferrer noopener'
                            href='https://github.com/Dazpel'
                        >
                            <Social>
                                <svg
                                    className='git'
                                    width='30'
                                    height='28'
                                    viewBox='0 0 30 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M14.9883 1.23535C7.74316 1.23242 1.875 7.09766 1.875 14.3369C1.875 20.0615 5.5459 24.9277 10.6582 26.7148C11.3467 26.8877 11.2412 26.3984 11.2412 26.0645V23.7939C7.26563 24.2598 7.10449 21.6289 6.83789 21.1895C6.29883 20.2695 5.02441 20.0352 5.40527 19.5957C6.31055 19.1299 7.2334 19.7129 8.30273 21.292C9.07617 22.4375 10.585 22.2441 11.3496 22.0537C11.5166 21.3652 11.874 20.75 12.3662 20.2725C8.24707 19.5342 6.53027 17.0205 6.53027 14.0322C6.53027 12.582 7.00781 11.249 7.94531 10.1738C7.34766 8.40137 8.00098 6.88379 8.08887 6.6582C9.79102 6.50586 11.5605 7.87696 11.6982 7.98535C12.665 7.72461 13.7695 7.58692 15.0059 7.58692C16.248 7.58692 17.3555 7.73047 18.3311 7.99414C18.6621 7.74219 20.3027 6.56445 21.8848 6.70801C21.9697 6.9336 22.6084 8.41602 22.0459 10.165C22.9951 11.2432 23.4785 12.5879 23.4785 14.041C23.4785 17.0352 21.75 19.5518 17.6191 20.2783C17.973 20.6263 18.2539 21.0413 18.4455 21.499C18.6372 21.9567 18.7357 22.4481 18.7354 22.9443V26.2402C18.7588 26.5039 18.7354 26.7647 19.1748 26.7647C24.3633 25.0156 28.0986 20.1143 28.0986 14.3398C28.0986 7.09766 22.2275 1.23535 14.9883 1.23535V1.23535Z'
                                        fill='#9a9a9a'
                                    />
                                </svg>
                            </Social>
                        </a>
                        <a
                            title='Linkedin'
                            target='_blank'
                            rel='noreferrer noopener'
                            href='https://www.linkedin.com/in/dazpel/'
                        >
                            <Social>
                                <svg
                                    className='linkedin'
                                    width='30'
                                    height='28'
                                    viewBox='0 0 30 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                > 
                                    <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" fill='#9a9a9a'/>
                                    <path d="m.396 7.977h4.976v16.023h-4.976z" fill='#9a9a9a'/>
                                    <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" fill='#9a9a9a'/></svg>
                                    
                                
                            </Social>
                        </a>
                    </SocialCont>
                </HeadingElements>
        <TypeWritter />
      </HeadingWrapCont>
    </Container>
  );
}

export default HeadingWrap;
