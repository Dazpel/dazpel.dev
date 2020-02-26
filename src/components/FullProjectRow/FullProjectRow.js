import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import vvReporting from '../../images/virginProject.png';

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
        height: 550px;
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: gray;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 119px;
        display: block;
        margin: auto;
    }

    :hover {
        /* border-bottom: 2px solid black; */
    }

    span {
        font-size: 20px;
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 360px;
    border-radius: 4px;
    transition-duration: 0.3s;
`;

const Project = styled.div`
    width: 100%;
    height: 500px;
    margin-bottom: 90px;
    transition-duration: 0.3s;

    /* :hover {
        ${ProjectImage} {
            transform: scale(1.03);
        }

        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    } */

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 0%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${vvReporting});
            background-size: contain;
            background-repeat: no-repeat;
            background-position-x: 50%;
            background-position-y: 50%;

            @media (min-width: ${breakpoints.mobileMax}) {
                background-position-x: 50%;
                background-position-y: 70%;
                background-size: cover;
            }
        }
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;

    @media (min-width: ${breakpoints.mobileMax}) {
        text-align: center;
        margin: 30px auto 0 auto;
    }
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 40%;
        text-align: center;
        margin: 10px auto 20px auto;
    }
`;

function FullProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                <ProjectImage />
                <SubHeading>Offline Reporting System</SubHeading>
                <ProjectParagraph>
                Currently working on this project for Virgin Voyages, to be used by Crew members to create, modify and store incident, injury and causes reports without external connection. using technologies such as ReactJS, Graphql, Apollo, FireBase and Chakra UI!
                </ProjectParagraph>
                
                <ProjectLink>COMING SOON</ProjectLink>
            </Project>
        </ProjectContainer>
    );
}

export default FullProjectRow;
