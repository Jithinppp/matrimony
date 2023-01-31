import styled from "styled-components";

export const SignUpPageContainer = styled.div`
  margin-top: 1rem;
  background: linear-gradient(
    -45deg,
    #ee76524b,
    #e73c7e6e,
    #23d5443a,
    #23d5ab2c
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
`;
export const PhoneVerifyButton = styled.button`
  font-size: 1rem;
  font-weight: 400;
  color: inherit;
  cursor: pointer;
  padding: 1px 2rem;
  margin: 0 5px;
  border: none;
  background-color: #fff;
  border-radius: 2px;
`;
