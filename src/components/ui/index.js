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
