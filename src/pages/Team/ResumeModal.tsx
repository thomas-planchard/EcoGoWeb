// ResumeModal.tsx
import styled from 'styled-components';
import colors from '../../constants/colors';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin: 0.6rem;
  padding: 0.8rem 1.2rem;
  color: black;
  font-weight: bold;
  background-color: white;
  border-radius: 0.7rem;
  border: 0.5px solid ${colors.lightGray};
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.softMint} !important;
    color: white !important;
    border-color: ${colors.softMint} !important;
  }
`;

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Download Resume</h2>
       {/* Download button for English resume */}
       <DownloadButton 
          href='./public/assets/pdf/ThomasPlanchardEnglishResume.pdf'
          download="ThomasPlanchardResume.pdf"
        >
          English
        </DownloadButton>
        {/* Download button for French resume */}
        <DownloadButton 
          href='./public/assets/pdf/ThomasPlanchardResume.pdf' 
          download="ThomasPlanchardResume.pdf"
        >
          French
        </DownloadButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default ResumeModal;