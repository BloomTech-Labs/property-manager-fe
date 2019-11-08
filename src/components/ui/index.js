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
  height: 3rem;
  left: 0px;
  top: 0px;
  border-bottom: 2px solid rgba(44, 58, 79, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  a {
    padding: 14px 14px;
    font-size: 18px;
    line-height: 28px;
    color: #454a4d;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

// Vertical Side Navbar
export const SideNav = styled.div`
  height: 100%;
  width: 120px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: #2d3b4f;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: right;
  }
  a {
    padding: 14px 14px;
    font-size: 18px;
    line-height: 28px;
    color: #dbdbdb;
    text-align: right;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
