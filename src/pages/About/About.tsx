import colors from '../../constants/colors';
import HeaderComponent from '../../components/Header';
import { AppLayout } from '../../GlobalStyle';

function About() {
  return (
    <AppLayout>
      <HeaderComponent transparent={false} />
    <div>
      <h1 style={{color: colors.primaryGreen }}>About</h1>
      <p>This is the about page.</p>
    </div>
    </AppLayout>
  );
}

export default About;