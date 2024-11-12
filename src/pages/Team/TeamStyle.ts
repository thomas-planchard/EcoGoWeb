import styled from 'styled-components';
import colors from '../../constants/colors';


// Container for the whole team page
const TeamPageContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
`;

// Hero Section with Intro
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

const HeroText = styled.div`
  flex: 1;
  text-align: left;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.4rem;
    color: #666;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

// Story Section
const StorySection = styled.section`
  padding: 4rem 2rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const StoryContent = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StoryImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

const StoryText = styled.div`
  flex: 1;
  text-align: left;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
  }

  }

  @media (max-width: 768px) {
    text-align: center;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

// Skills Section
const SkillsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  flex-direction: column;
  display: flex;
  padding: 2rem;
  text-align: center;

   &:nth-child(2) {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    &:nth-child(2) {
      border-left: none;
      border-right: none;
    }
  }
  img {
    align-self: center;
    width: 20%;
    height: auto;
    margin-bottom: 1rem;
  }
`;

const SkillTitleName = styled.h3`
  font-size: 1.5rem;
  color: ${colors.darkGrey};
  margin-bottom: 2rem;
`;

const SkillTitle = styled.p`
  font-size: 1.5rem;
  color: ${colors.lightGray};
`;

// Resume Section
const ResumeSection = styled.section`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const ResumeText = styled.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactButton = styled.button`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${colors.primaryGreen};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export { TeamPageContainer, HeroSection, HeroImage, HeroText, StorySection, StoryContent, StoryImage, StoryText, SkillsSection, SkillsGrid, SkillCard, SkillTitle, SkillTitleName ,ResumeSection, ResumeText, ContactButton };