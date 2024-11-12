import Image from '../../assets/404.png'; 
import {
  PageContainer,
  ContentWrapper,
  ImageContainer,
  TextContainer,
  HomeButton,
} from './404Styles.ts';

const NotFoundPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <ImageContainer>
          <img src={Image} alt="404 Not Found" />
        </ImageContainer>
        <TextContainer>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <HomeButton href="/#">Go Home</HomeButton>
        </TextContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NotFoundPage;