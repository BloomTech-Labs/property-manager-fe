import styled from '@emotion/styled';

// Simple Button/Card Animation
const hoverMixin = `
  box-shadow: 0 3px 6px #333;
  transition: 0.25s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px #777;
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px #666;
  }
`;

// Button Component
export const Button = styled.button`
  border: none;
  font-size: 100%;
  cursor: pointer;
  text-align: center;
  margin: 0 auto 1.5rem;
  border-radius: 3px;
  padding: 0.5rem 0.8rem;
  font-size: 1.5rem;
  color: #333;
  background-color: #fff;
  ${hoverMixin}
`;

export const Card = styled.div``;

// Horizontal Top Navbar
export const TopNav = styled.div`
  position: relative;
  width: 100%;
  height: 124px;
  left: 0px;
  top: 0px;
  border-bottom: 2px solid rgba(44, 58, 79, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  text-align: center;
  a {
    padding: 14px 14px;
    font-size: 18px;
    line-height: 28px;
    color: #454a4d;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
  }
`;

// Vertical Side Navbar
export const sideNav = styled.div``;
