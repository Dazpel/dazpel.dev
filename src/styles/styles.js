import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../components/Media';
export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const Paragraph = styled.p`
    margin: 50px 0;
    color: #696969;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;

    a {
        border-bottom: 2px solid transparent;
        transition: 0.3s;

        :hover {
            border-bottom: 2px solid black;
        }
    }
`;

const animatedText = keyframes`
    from{width: 0;}
    to{width: 900px;}
    `;

export const HeadingMain = styled.p`
    font-weight: 900;
    font-size: 6vw;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    margin-bottom: 0px;
    margin-left: 0px;


    .p1 {
        margin-bottom:0;
      }
    
      .p2 {
        margin: 0;
        white-space: nowrap;
        overflow: hidden;    
        animation: ${animatedText} 3s steps(30,end) 1s 1 normal both;
      }
      
      .p3 {
        margin: 0;
        white-space: nowrap;
        overflow: hidden;    
        animation: ${animatedText} 3s steps(30,end) 3.5s 1 normal both;
      }

    @media (min-width: ${breakpoints.mobileMax}) {
       
        font-size: 60px;
        margin-bottom: 0;
        margin-left: 50px;
        
    }

   p > span {
        color: #b4e0e8;
    }
`;

export const HeadingSec = styled(HeadingMain)`
    font-size: 33px;

    @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 40px;
    }
`;
