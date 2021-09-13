import styled from "styled-components";

export default function Loading() {
  return (
    <Loader>
      <div />
    </Loader>
  );
}

const Loader = styled.div`
  margin-top: 185px;
  width: 100%;
  div {
    margin: auto;
    width: 100px;
    height: 100px;
    border: 15px solid #292e35;
    border-bottom-color: #166763;
    border-radius: 50%;
    animation: rotate 1.5s linear infinite;
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
