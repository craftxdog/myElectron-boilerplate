import styled from "@emotion/styled";

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;

  a {
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
export default Paragraph;
