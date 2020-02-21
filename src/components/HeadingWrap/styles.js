import styled from 'styled-components';
import { breakpoints } from '../../components/Media';
import Heading from '../../components/Heading';
import Container from '../../components/container';
import insta from '../../images/social/insta.png';
import twitter from '../../images/social/twitter.png';
import git from '../../images/social/git.png';
import linkedin from '../../images/social/linkedin.png'
import coffeMug from '../../images/coffeMug.png';

export const HeadingWrapCont = styled.div`
    
    padding-top: 40px;
    background-position: 0 0;
    background-repeat: no-repeat;

    

`;

export const HeadingElements = styled.div`
    display: flex;
    align-items: center;
`;

export const Line = styled.div`
    height: 2px;
    background-color: black;
    width: 100px;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 200px;
    }
`;

export const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-left: 20px;

    & .git {
        background-image: url(${git});
    }

    & .linkedin {
        background-image: url(${linkedin});
    }
`;
export const Social = styled.div`
    width: 27px;
    height: 27px;
    margin: 0 15px;
    background-repeat: no-repeat;
    background-size: 27px 27px;
    background-position: center center;
    transition-duration: 2s;

    :hover {
        background-size: 30px;
    }
`;
