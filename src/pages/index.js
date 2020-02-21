import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import ProjectRow from '../components/ProjectRow';
import ProjectRow2 from '../components/ProjectRow2';
import FullProjectRow from '../components/FullProjectRow';
import LandingImage from '../images/landing3.jpg';
import HeadingWrap from '../components/HeadingWrap';
import '../index.css';

const Container = styled.div`
  margin: 50px 0 100px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const SkillTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }

  p {
    color: black;
    font-weight: 700;
    min-width: 200px;
    margin: 20px 0 0 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      min-width: unset;
      margin: 30px 0;
    }

    span {
      font-size: 20px;
      margin-right: 5px;
      color: #b4e1e7;
    }
  }
`;

const SubContainer = styled.div`
  margin: 0px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
  .Paragraph {
    a {
      border-bottom: 2px solid transparent;
      transition: 0.3s;

      :hover {
        border-bottom: 2px solid black;
      }
    }
  }
`;

const TextContentWrap = styled(TextContent)`
  width: 100%;

  ${Paragraph} {
    margin: 40px 0px;
  }
  :nth-child(2) {
    ${Paragraph} {
      margin: 0px 0px;

      @media (min-width: ${breakpoints.mobileMax}) {
        margin: 40px 0;
      }
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;

const SkillContent = styled.div`
  width: 100%;
`;

const HeadingImage = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 100%;
  border-radius: 4px;
  height: 300px;
  background-size: cover;
  background-image: url(${LandingImage});
  background-color: #f5f5f5;
  background-position: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 100%;
    height: 400px;
    background-position-x: right;
    background-position-y: center;
  }
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`;

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Website Running!');
  }

  render() {
    return (
      <>
        <Layout>
          <Link title="Home - David Perez" to="/">
            <Logo />
          </Link>
          <Helmet>
            <title>David Perez - Front End Developer</title>
            <meta name="title" content="David Perez - Front End Developer" />
            <meta
              name="description"
              content="I’m passionate about technology, building and creating things from scratch, I enjoy being able to take ideas and trasnform them into something people can experience and interac twith."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dazpel.dev/" />
            <meta        
              property="og:title"
              content="David Perez - Front End Developer"
            />
            <meta
              property="og:description"
              content="I’m passionate about technology, building and creating things from scratch, I enjoy being able to take ideas and trasnform them into something people can experience and interac twith."
            />
            <meta property="og:image" content={LandingImage} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://dazpel.dev/" />
            <meta
              property="twitter:title"
              content="David Perez - Front End Developer"
            />
            <meta
              property="twitter:description"
              content="I’m passionate about technology, building and creating things from scratch, I enjoy being able to take ideas and trasnform them into something people can experience and interac twith."
            />
            <meta property="twitter:image" content={LandingImage} />
            <html lang="en" />
          </Helmet>
          <HeadingWrap />
          <HeadingImage />
          <Container
            style={{
              alignItems: 'start',
              margin: 0,
              justifyContent: 'space-between'
            }}
          >
            
              <Paragraph>
                I’m passionate about technology, building and creating things from scratch, I enjoy being able to take ideas and trasnform them into something people can experience and interact with.
                <br/>
                <br/>
                Through my journey as a self-taught Developer, I've learn how to keep up with new technologies and always improve my skills, which have gave me the opportunity to work doing what I love. 
                <br/>
                <br/>
                I have experience creating, building and designing landing pages and single page applications using a diverse array of technologies, languages and frameworks, while writting maintainable and easy to understand code.
              </Paragraph>
            
          </Container>
          <Container>
            <SubContainer>
              <SkillContent>
                <TextContent>
                  <Heading>My Skills</Heading>
                  <Paragraph>
                    Part of being a Developer is keeping up with the trends, technologies, languages, and frameworks that improve our workflow, and I enjoy taking up courses such as {' '}
                    <a
                      title="The Complete Web Developer in 2020"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://bit.ly/2USjUB4"
                    >
                      The Complete Web Developer
                    </a>
                    ,{' '}
                    <a
                      title="Advanced CSS & Sass"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://bit.ly/37mPVUt"
                    >
                      Advanced CSS & Sass
                    </a>
                    ,{' '}
                    <a
                      title="Complete React Developer in 2020"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://bit.ly/2vzRD7C"
                    >
                      Complete React Developer
                    </a>
                    ,{' '}
                    <a
                      title="Pro Gatsby"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://bit.ly/39zsGIw"
                    >
                      Pro Gatsby
                    </a>
                    , currently working through Wes Bos's{' '}
                    <a
                      title="ES6 For Everyone"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://es6.io/"
                    >
                      ES6 for Everyone.
                    </a>
                  </Paragraph>
                </TextContent>
                <SkillTable>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> HTML5
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> CSS3
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> Sass
                    </Paragraph>
                  </row>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> Javascript ES6
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> React
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> Gatsby
                    </Paragraph>
                  </row>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> Chakra UI
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> Styled-Components
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> TailwindCSS
                    </Paragraph>
                  </row>
                  <row>
                    <Paragraph>
                      <span>&#9675;</span> Git
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> Nodejs
                    </Paragraph>
                    <Paragraph>
                      <span>&#9675;</span> Graphql
                    </Paragraph>
                  </row>
                </SkillTable>
              </SkillContent>
            </SubContainer>
          </Container>
          <SubContainer>
            <TextContent>
              <Heading> Projects I Have Worked On </Heading>
              <SubParagraph>
                I'm always learning, studying and experimenting with new technologies, framkeworks and languages, check out some of the things I have built.
              </SubParagraph>
            </TextContent>
          </SubContainer>
          <SubContainer>
            <FullProjectRow />
          </SubContainer>
          <SubContainer>
            <ProjectRow />
          </SubContainer>
          <SubContainer style={{ marginBottom: 75 }}>
            <ProjectRow2 />
          </SubContainer>
        </Layout>
        <Footer instagramDisplay="flex" />
      </>
    );
  }
}

export default Page;
