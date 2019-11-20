import styled from '@emotion/styled';

export const Button = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  color: inherit;
  vertical-align: baseline;
  overflow: visible;
  background: transparent;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  cursor: pointer;
  text-align: center;
  margin: 0 auto 1.5rem;
  line-height: 3rem;
  border-radius: 8px;
  padding: 1rem;
  font-size: 2rem;
  color: white;
  background-image: linear-gradient(
    45deg,
    #845ec2,
    #d65db1,
    #ff6f91,
    #ff9671,
    #ffc75f,
    #f9f871
  );
  background-size: 300%;
  background-position: left;
  transition: background-position 1s;
  box-shadow: 2px 6px 8px 0 rgba(73, 34, 34, 0.35),
    2px 6px 12px 0 rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus {
    background-position: right;
    text-decoration: none;
  }
`;

export const ButtonAlt = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  color: inherit;
  vertical-align: baseline;
  overflow: visible;
  background: transparent;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  cursor: pointer;
  width: 20%;
  font-size: 2rem;
  color: white;
  line-height: 3rem;
  border: 1px solid white;
  background-image: linear-gradient(
    45deg,
    rgb(16, 86, 126) 0%,
    rgb(16, 86, 126) 12.5%,
    rgb(16, 108, 128) 12.5%,
    rgb(16, 108, 128) 25%,
    rgb(17, 131, 129) 25%,
    rgb(17, 131, 129) 37.5%,
    rgb(17, 153, 131) 37.5%,
    hsl(170, 80%, 33%) 50%,
    rgb(17, 176, 133) 50%,
    rgb(17, 176, 133) 62.5%,
    rgb(17, 198, 135) 62.5%,
    hsl(159, 84%, 42%) 75%,
    rgb(18, 221, 136) 75%,
    rgb(18, 221, 136) 87.5%,
    rgb(18, 243, 138) 87.5%,
    rgb(18, 243, 138) 100%
  );
  margin-top: 1rem;
  @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: portrait) {
    display: block;
    width: 250px;
    line-height: 2rem;
  }
  @media (max-device-width: 1023px) and (orientation: landscape) {
    display: block;
    width: 200px;
    margin: 0 auto;
    line-height: 2rem;
  }
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1035px) and (orientation: landscape) {
    display: block;
    width: 350px;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2rem;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  margin: 0 auto;
  padding: 0;
  font-size: 100%;
  font: inherit;
  color: inherit;
  vertical-align: baseline;
  overflow: visible;
  background: transparent;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  cursor: pointer;
  width: 100%;
  font-size: 2rem;
  color: white;
  line-height: 3rem;
  border: 1px solid white;
  background-image: linear-gradient(
    45deg,
    rgb(16, 86, 126) 0%,
    rgb(16, 86, 126) 12.5%,
    rgb(16, 108, 128) 12.5%,
    rgb(16, 108, 128) 25%,
    rgb(17, 131, 129) 25%,
    rgb(17, 131, 129) 37.5%,
    rgb(17, 153, 131) 37.5%,
    hsl(170, 80%, 33%) 50%,
    rgb(17, 176, 133) 50%,
    rgb(17, 176, 133) 62.5%,
    rgb(17, 198, 135) 62.5%,
    hsl(159, 84%, 42%) 75%,
    rgb(18, 221, 136) 75%,
    rgb(18, 221, 136) 87.5%,
    rgb(18, 243, 138) 87.5%,
    rgb(18, 243, 138) 100%
  );
  display: none;
  @media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: portrait) {
    display: block;
    margin-top: 2rem;
    width: 250px;
    line-height: 2rem;
  }
  @media (max-device-width: 1023px) and (orientation: landscape) {
    display: block;
    width: 200px;
    margin: 0 auto;
    line-height: 2rem;
  }
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1035px) and (orientation: landscape) {
    display: block;
    width: 350px;
    margin: 0 auto;
    line-height: 2rem;
  }
`;
