import styled from "styled-components";
import { ImArrowDown } from "react-icons/im";



export const HeaderSection = styled.section`
  padding-top: 14rem;
  height: 100vh;
  position: relative;
  h1 {
    text-align: center;
    font-size: 2rem;
  }

  .HeaderImg {
    display: flex;
    
    .centerHeaderImg{
      margin: 8rem auto 0;
      svg{
        max-width: 555px;
        .mainttl{
          stroke-width: 55px;
          stroke: #c7c7c7;
          stroke-dasharray: 9116.73828125;
          stroke-dashoffset: 9116.73828125;
          animation: ttl 3s linear 1s  forwards;
        }
        @keyframes ttl{
          to{
            stroke-dashoffset: 0;
            fill: #ffffff;
          }
        }
      }

      @media screen and (max-width: 600px){
        display: none;
      }
    } 
  }
  
  @media screen and (max-width: 600px){
        height: unset;
      }
`;

export const HeaderContact = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const HeaderArrowDown = styled(ImArrowDown)`
  position: absolute;
  right: 0;
  bottom: 3%;
  font-size: 2rem;
`;
