import styled from 'styled-components';
import { motion } from "framer-motion";

export const MenuWrapper = styled(motion.div)`
  display: block;
  position: fixed;
  left: 0;
  top: 7.4rem;
  width: 0;
  opacity: 0;
  height: 42rem;
  background-color: #123C73;
  border-bottom: 3px solid #fff;
  z-index: 30;
`

export const MenuList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
`

export const MenuElement = styled.h2`
  color: #fff;
  font-size: 2rem;
`