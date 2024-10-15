// src/pages/PortfolioPage.jsx
// Styles
import { PortfolioSection, PortfolioTitle, PortfolioGrid, PortfolioCard } from './PortfolioStyles';
import HeaderComponent from '../../components/Header';
import { AppLayout } from '../../GlobalStyle';
import FooterComponent from '../../components/Footer';

// Images
import projectOneImage from '../../assets/ios-logo.png'; // Replace with your own images
import projectTwoImage from '../../assets/expo-go.svg';



function PortfolioPage() {
  return (
    <AppLayout>
    <HeaderComponent transparent={false} />
    <PortfolioSection>
      <PortfolioTitle>Portfolio</PortfolioTitle>

      <PortfolioGrid>
        {/* Project 1 */}
        <PortfolioCard to="/portfolio/project1">
          <img src={projectOneImage} alt="Project 1" />
          <h2>Todo List Mobile App Redesign</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam.</p>
          <span className="read-more">Read case study &rarr;</span>
        </PortfolioCard>

        {/* Project 2 */}
        <PortfolioCard to="/portfolio/project2">
          <img src={projectTwoImage} alt="Project 2" />
          <h2>Analytics Dashboard Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam.</p>
          <span className="read-more">Read case study &rarr;</span>
        </PortfolioCard>
      </PortfolioGrid>
    </PortfolioSection>
    <FooterComponent />
    </AppLayout>
  );
}

export default PortfolioPage;