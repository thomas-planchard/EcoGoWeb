// src/pages/PortfolioPage.jsx
import { useEffect, useState } from 'react';
import { PortfolioSection, PortfolioTitle, PortfolioGrid, PortfolioCard, ImageContainer, CardText, ProjectTitle, ProjectDescription, ReadMore } from './PortfolioStyles';
import HeaderComponent from '../../components/Header';
import { AppLayout } from '../../GlobalStyle';
import FooterComponent from '../../components/Footer';
import projects from '../../data/projects';

function PortfolioPage() {
  const [projectsData, setProjectsData] = useState<{ id: string; title: string; description: string; image: string; link: string; }[]>([]);

  useEffect(() => {
    setProjectsData(projects);
  }, []);

  return (
    <AppLayout>
      <HeaderComponent transparent={false} />
      <PortfolioSection>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioGrid>
          {projectsData.map((projectsData) => (
            <PortfolioCard key={projectsData.id} to={projectsData.link}>
              <ImageContainer>
              <img src={projectsData.image} alt={projectsData.title} />
              </ImageContainer>
              <CardText>
                <ProjectTitle>{projectsData.title}</ProjectTitle>
                <ProjectDescription>{projectsData.description}</ProjectDescription>
                <ReadMore>Read case study &rarr;</ReadMore>
              </CardText>
            </PortfolioCard>
          ))}
        </PortfolioGrid>
      </PortfolioSection>
      <FooterComponent />
    </AppLayout>
  );
}

export default PortfolioPage;