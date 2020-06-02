import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import splitex from '../../images/splitexScreens.jpg';
import stocktrek from '../../images/stocktrekScreens.jpg';

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: unset;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 70px;
        margin-top: 40px;
        height: 500px;
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;
    margin-right:2rem;
    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 15px;
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 4px;
    transition-duration: 0.3s;
`;

const Project = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    transition-duration: 0.3s;

    :hover {
        ${ProjectImage} {
            transform: scale(1.03);
        }

        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    }

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 10%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${splitex});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }

    :nth-child(2) {
        ${ProjectImage} {
            background-image: url(${stocktrek});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

function ProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                {/* <Link title='Clarifai Project' to='/Decore'> */}
                    <ProjectImage />
                {/* </Link> */}
                {/* <Link title='Clarifai Project' to='/Decore'> */}
                    <SubHeading>Splitex</SubHeading>
                {/* </Link> */}
                <ProjectParagraph>
                    Web application for group trips, that allows you to chat with your group, upload images and upload receipts to keep track of expenses, all in one place.
                    
                </ProjectParagraph>
                {/* <Link title='Clarifai Project' to='/Decore'>
                    <ProjectLink>
                       Read more<span>&#8250;</span>
                    </ProjectLink>
                </Link> */}
                <a
                    title="Github Code"
                    href="https://github.com/Dazpel/Fasces"
                    target="_blank"
                      rel="noopener noreferrer"
                    >
                    <ProjectLink>
                    <span>&#x2774;</span>Code<span>&#x2775;</span>
                    </ProjectLink>
                    </a>
                    
                    <a
                    title="Live Site"
                    href="https://splitex.netlify.app/"
                    target="_blank"
                      rel="noopener noreferrer"
                    >
                    <ProjectLink>
                    Demo <span >	&#9654;</span>
                    </ProjectLink>
                    </a>
            </Project>
            <Project>
                {/* <Link title='Virgin Project' to='/Coffee'> */}
                    <ProjectImage />
                {/* </Link> */}
                {/* <Link title='Virgin Project' to='/Coffee'> */}
                    <SubHeading>StockTrek</SubHeading>
                {/* </Link> */}
                <ProjectParagraph>
                Fintech website in which you can track any company stock, get access to news based on the stock, the stock movement in intervals, and create your own watchlist after you sign-up, we also provide dark theme in case you enjoy it.
                    
                </ProjectParagraph>

                {/* <Link title='Virgin Project' to='/Coffee'>
                    <ProjectLink>
                       Read more <span>&#8250;</span>
                    </ProjectLink>
                    </Link> */}
                    <a
                    title="Github Code"
                    href="https://github.com/Dazpel/Project-2"
                    target="_blank"
                      rel="noopener noreferrer"
                    >
                    <ProjectLink>
                    <span>&#x2774;</span>Code<span>&#x2775;</span>
                    </ProjectLink>
                    </a>
                    
                    <a
                    title="Live Site"
                    href="https://stocktrek.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ProjectLink>
                    Demo <span >	&#9654;</span>
                    </ProjectLink>
                    </a>
                    
            </Project>
        </ProjectContainer>
    );
}

export default ProjectRow;
