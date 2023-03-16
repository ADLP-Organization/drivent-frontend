import styled from 'styled-components';

export const Title = styled.div`
height: 40px;
font-family: 'Roboto', sans-serif;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 25px;
`;

export const Subtitle = styled.div`
height: 23px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-bottom: 20px;
`;

export const OnlySubtitle = styled.div`
height: 80%;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
color: #8E8E8E;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;

export const Loading = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50vh;
  img {
    height: 170px;
  }
`;

export const Button = styled.button`
  width: 162px;
  height: 37px;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }

  & > *:first-child {
    font-size: 14px;
    color: #000000;
  }

  @media (max-width: 600px) {
    height: 80px;
  }
`;
