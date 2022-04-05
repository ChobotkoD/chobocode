import styled from "styled-components";
import { ImArrowDown } from "react-icons/im";

export const HeaderSection = styled.section`
  padding-top: 8rem;
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 2rem;
  }

  .HeaderImg {
    position: relative;
    display: flex;

    img {
      border-radius: 100% 100% 0 0;
      height: 28rem;
      width: 22rem;
      margin: 8rem auto 0;
    }
  }
`;

export const HeaderContact = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const HeaderSocial = styled.div`
  position: absolute;
  left: 0;
  bottom: -3%;
  cursor: pointer;
  a {
    border: none;
  }
  li {
    margin-top: 10px;
  }
`;

export const HeaderArrowDown = styled(ImArrowDown)`
  position: absolute;
  right: 0;
  bottom: -3%;
  font-size: 2rem;
`;
