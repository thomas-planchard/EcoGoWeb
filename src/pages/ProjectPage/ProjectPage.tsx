import { useParams } from 'react-router-dom';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import NotFoundPage from '../404/404Page';
import { AppLayout } from '../../GlobalStyle';
import projectData from '../../data/projectsData'; 
import {
  PageContainer,
  HeaderSection,
  Title,
  Subtitle,
  InfoGrid,
  InfoItem,
  ImageSection,
  SectionWrapper,
  SectionTitle,
  SectionContent,
  SectionImage,
} from './ProjectPageStyle';

function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <AppLayout>
      <HeaderComponent transparent={false} />
      <PageContainer>
        {/* Header Section */}
        <HeaderSection>
          <Subtitle>{project.client} — {project.date}</Subtitle>
          <Title>{project.title}</Title>
        </HeaderSection>

        {/* Info Grid Section */}
        <InfoGrid>
          <InfoItem>
            <h3>Expertise</h3>
            <p>{project.expertise}</p>
          </InfoItem>
          <InfoItem>
            <h3>Platforms</h3>
            <p>{project.platforms}</p>
          </InfoItem>
          <InfoItem>
            <h3>Deliverables</h3>
            <p>{project.deliverables}</p>
          </InfoItem>
          <InfoItem>
            <h3>Repository</h3>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">Visit repository</a>
          </InfoItem>
        </InfoGrid>

        {/* Image Section */}
        <ImageSection>
          <img src={project.image} alt={project.title} />
        </ImageSection>

        {/* Project Overview Section */}
        <SectionWrapper>
          <SectionTitle>Project Overview</SectionTitle>
          <SectionContent>
            {project.overview}
            <SectionImage src={project.image2} alt="Project Overview" />
          </SectionContent>
        </SectionWrapper>

        {/* Execution Section */}
        <SectionWrapper>
          <SectionTitle>Execution</SectionTitle>
          <SectionContent>
            {project.execution}
          </SectionContent>
        </SectionWrapper>

        {/* Results Section */}
        <SectionWrapper>
          <SectionTitle>Results</SectionTitle>
          <SectionContent>
            {project.results}
          </SectionContent>
        </SectionWrapper>
      </PageContainer>
      <FooterComponent />
    </AppLayout>
  );
}

export default ProjectPage;