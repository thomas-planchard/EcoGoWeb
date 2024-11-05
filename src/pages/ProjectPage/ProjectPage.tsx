import { useParams } from 'react-router-dom';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import { AppLayout } from '../../GlobalStyle';
import projectData from '../../data/projectsData'; // Assume JSON file with project details
import {
  PageContainer,
  HeaderSection,
  Title,
  Subtitle,
  InfoGrid,
  InfoItem,
  ImageSection,
  SectionTitle,
  SectionContent,
  List,
} from './ProjectPageStyle';


function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
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
          <h3>Website</h3>
          <a href={project.website} target="_blank" rel="noopener noreferrer">Visit website</a>
        </InfoItem>
      </InfoGrid>

      {/* Image Section */}
      <ImageSection>
        <img src={(`../../assets/${project.image}`)} alt={project.title} />
      </ImageSection>

      {/* Project Overview Section */}
      <SectionTitle>Project Overview</SectionTitle>
      <SectionContent>{project.overview}</SectionContent>

      {/* Execution Section */}
      <SectionTitle>Execution</SectionTitle>
      <SectionContent>
        {project.execution}
        <List>
          <li>Ornare lectus sit amet est placerat in egestas erat imperdiet.</li>
          <li>Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.</li>
          <li>Posuere mori leo urna molestie at.</li>
          <li>Aliquet bibendum enim facilisis gravida neque convallis a.</li>
        </List>
      </SectionContent>

      {/* Results Section */}
      <SectionTitle>Results</SectionTitle>
      <SectionContent>
        {project.results}
        <p style={{ fontWeight: "bold", marginTop: "20px" }}>76% user retention on first beta release</p>
      </SectionContent>
    </PageContainer>
      <FooterComponent />
    </AppLayout>
  );
}

export default ProjectPage;