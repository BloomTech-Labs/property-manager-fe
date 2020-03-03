// IMPORTS/INITIALIZATION =========================|
// ================================================|
import styled from '@emotion/styled';
// ------------------------------------------------|
// DEFINE STYLE VARIABLES =========================|
// ================================================|
// ------------------------------------------------|
// Basic Card styling -----------------------------|
const card = position => `
  position: ${position || 'relative'};
  border: none;
  border-radius: 2px;
  margin-top: 1rem;
`;
// ------------------------------------------------|
// DEFINE BUTTON COMPONENTS =======================|
// ================================================|

// ------------------------------------------------|
// DEFINE CARD COMPONENTS =========================|
// ================================================|
export const AuthFlipContainer = styled.div`
  min-width: 350px;
  z-index: 2;
  left: 55%;
  top: 100%;
  background: #fff;
  translate: transform(-50%, -50%);
  ${card('absolute')}
  will-change: transform, opacity;
`;
// ------------------------------------------------|
// DEFINE FORM COMPONENTS =========================|
// ================================================|

export const LoginFormCard = styled.div`
  transform: rotateY(180deg);
`;

// ------------------------------------------------|
// FORM COMPONENTS ================================|
// Form Error Msg ---------------------------------|
export const FormError = styled.div`
  color: red;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;
// ------------------------------------------------|
// Form Success Msg -------------------------------|
export const FormSuccess = styled.div`
  color: #007f00;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;
// ------------------------------------------------|
// Form Footer Container --------------------------|
export const FormFooterContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
// ------------------------------------------------|
// Form Footer ------------------------------------|
export const FormFooter = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #2d3b4f;
`;
// ------------------------------------------------|
// Icon Normalization =============================|
// ================================================|
// Icons ------------------------------------------|
export const I = styled.span`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  vertical-align: sub;
`;
// ------------------------------------------------|
// Navigation Components ==========================|
// ================================================|

// ------------------------------------------------|
// Vertical Side Navbar ---------------------------|
export const SideNav = styled.div`
  height: 100%;
  width: 120px;
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
