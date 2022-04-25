import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineBook,
  AiOutlineLaptop,
  AiOutlineComment,
  AiOutlinePhone,
} from "react-icons/ai";

import { HiOutlinePhotograph } from "react-icons/hi";

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

export const Portfolio = styled(HiOutlinePhotograph)`
  font-size: 2rem;
`;
export const Testimonials = styled(AiOutlineComment)`
  font-size: 2rem;
`;
export const Contact = styled(AiOutlinePhone)`
  font-size: 2rem;
`;

export const NavSection = styled.nav`
  position: fixed;
  bottom: 40%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 12;
  padding: 0.7rem 0.5rem;
  backdrop-filter: blur(1px);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  a {
    border-radius: 20%;
    background: transparent;
    &:hover {
      background: rgba(222, 22, 111, 0.25);
    }
    &.active {
      padding-top: 0.5rem;
      background: var(--color-bg);
      color: var(--color-white);
    }
  }
`;
