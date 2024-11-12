import { useState } from 'react';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import { AppLayout } from '../../GlobalStyle';
import thomas from '../../assets/Thomas.jpg';
import code from '../../assets/codePAge.jpg';
import computer from '../../assets/computer.svg';
import design from '../../assets/design.svg';
import tools from '../../assets/tools.svg';
import ResumeModal from './ResumeModal';

import { 
  TeamPageContainer, HeroSection, HeroImage, HeroText, 
  StorySection, StoryContent, StoryImage, StoryText, 
  SkillsSection, SkillsGrid, SkillCard, SkillTitle, SkillTitleName, ResumeSection, 
  ResumeText, ContactButton 
} from './TeamStyle';

const TeamPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppLayout>
      <HeaderComponent transparent={false} />
      <TeamPageContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroImage>
            <img src={thomas} alt="Thomas Planchard" />
          </HeroImage>
          <HeroText>
            <h1>I’m Thomas Planchard, a Tech Entrepreneur and Full Stack Developer</h1>
            <p>
              I am the founder of EcoGo and a full-stack developer with a strong background in software 
              development and project management. Through my studies at ALGOSUP I discovered all the aspects of a project from design to development to production.
            </p>
          </HeroText>
        </HeroSection>

        {/* Story Section */}
        <StorySection>
          <StoryContent>
            <StoryImage>
              <img src={code} alt="My Story" />
            </StoryImage>
            <StoryText>
              <h2>My Story</h2>
              <p>
              I discovered the world of computers during my high school studies, and since then, my eagerness to learn has only grown. I find it incredibly appealing that there’s always something new to master in this field. I’m also passionate about sports, which has shaped me into a strong competitor. Every day, I strive to be my best—or at the very least, better than I was the day before.
              </p>
            </StoryText>
          </StoryContent>
        </StorySection>

        {/* Skills Section */}
        <SkillsSection>
          <h2>My Skills & Software</h2>
          <p>
            Through my studies at ALGOSUP and various projects, I’ve honed a diverse skill set, from development 
            and design to project management.
          </p>
          <SkillsGrid>
            <SkillCard>
              <img src={design} alt="Design Icon" />
              <SkillTitleName>Soft Skills</SkillTitleName>
              <SkillTitle>UI/UX Design</SkillTitle>
              <SkillTitle>Management</SkillTitle>
              <SkillTitle>Waterfall</SkillTitle>
              <SkillTitle>English</SkillTitle>
            </SkillCard>
            <SkillCard>
              <img src={computer} alt="Development Icon" />
              <SkillTitleName>Development</SkillTitleName>
              <SkillTitle>React Native</SkillTitle>
              <SkillTitle>Expo</SkillTitle>
              <SkillTitle>C++</SkillTitle>
              <SkillTitle>C</SkillTitle>
              <SkillTitle>Python</SkillTitle>
            </SkillCard>
            <SkillCard>
              <img src={tools} alt="Tools Icon" />
              <SkillTitleName>Tools</SkillTitleName>
              <SkillTitle>Git</SkillTitle>
              <SkillTitle>Figma</SkillTitle>
              <SkillTitle>Unit Testing</SkillTitle>
            </SkillCard>
          </SkillsGrid>
        </SkillsSection>

        {/* Resume Section */}
        <ResumeSection>
          <ResumeText>Take a look at my resume</ResumeText>
          <ContactButton onClick={openModal}>Download</ContactButton>
        </ResumeSection>

        {isModalOpen && <ResumeModal onClose={closeModal} />}
      </TeamPageContainer>
      <FooterComponent />
    </AppLayout>
  );
}

export default TeamPage;