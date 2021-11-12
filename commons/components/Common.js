import styled from "@emotion/styled";
import device from "../utils/device";

const Container = styled.div`
  margin-top: 70px;
  width: 100%;
  padding-bottom: 75px;
  ${device.laptop} {
    max-width: 999px;
  }
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Wrapper };
