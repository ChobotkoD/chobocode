import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineBook,
  AiOutlineLaptop,
  AiOutlinePhone,
} from "react-icons/ai";

export const Home = styled(AiOutlineHome)`
  font-size: 2rem;
`;

export const About = styled(AiOutlineInfoCircle)`
  font-size: 2rem;
`;

export const Experience = styled(AiOutlineBook)`
  font-size: 2rem;
`;

export const Services = styled(AiOutlineLaptop)`
  font-size: 2rem;
`;

export const Contact = styled(AiOutlinePhone)`
  font-size: 2rem;
`;

export const NavSection = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
  /* width: max-content; */
  /* display: block; */
  padding: 0.7rem 1.7rem;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  backdrop-filter: blur(1px);
  border-radius: 3rem;

  a {
    border: none;
    border-radius: 50%;
    background: transparent;
    margin: 0 1rem;
    &:hover {
      background: rgba(222, 22, 111, 0.25);
    }
    &.active {
      background: var(--color-bg);
      color: var(--color-white);
    }
  }
`;
