// src/pages/PortfolioPage.jsx
import { useEffect, useState } from 'react';
import { PortfolioSection, PortfolioTitle, PortfolioGrid, PortfolioCard, ImageContainer, CardText, ProjectTitle, ProjectDescription, ReadMore } from './PortfolioStyles';
import HeaderComponent from '../../components/Header';
import { AppLayout } from '../../GlobalStyle';
import FooterComponent from '../../components/Footer';
import projectData from '../../data/projects.json';

function PortfolioPage() {
  const [projects, setProjects] = useState<{ id: string; title: string; description: string; image: string; link: string; }[]>([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <AppLayout>
      <HeaderComponent transparent={false} />
      <PortfolioSection>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioGrid>
          {projects.map((project) => (
            <PortfolioCard key={project.id} to={project.link}>
              <ImageContainer>
                <img src={(`../../assets/${project.image}`)} alt={project.title} />
              </ImageContainer>
              <CardText>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
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