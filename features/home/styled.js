import styled from "@emotion/styled";
import Card from "../../commons/components/Card";
import device from "../../commons/utils/device";

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 75px;
`;

const ArticleContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding: 0px 20px;
  margin-top: 10px;
  ${device.laptop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0px 0px;
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
`;

const CardArticle = styled(Card)``;

const ArticleTitle = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
`;

const TagsContainer = styled.div`
  display: flex;
  margin-top: 10px;

  & > p {
    margin-right: 5px;
  }
`;

const LoadMoreButton = styled.button`
  text-align: center;
  width: 100%;
  padding: 10px;
`;

const Title = styled.h1`
  padding: 0px 20px;
  ${device.laptop} {
    padding: 0px 0px;
  }
`;

export {
  ArticleContainer,
  CardArticle,
  CardImage,
  LogoContainer,
  ArticleTitle,
  TagsContainer,
  LoadMoreButton,
  Title,
};
