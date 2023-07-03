import { BallTriangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <BallTriangle
        height="100"
        width="100"
        color="#476fff"
        ariaLabel="loading"
      />
    </Container>
  );
};

export default Loader;
