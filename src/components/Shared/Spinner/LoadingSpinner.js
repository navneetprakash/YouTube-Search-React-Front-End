import { Triangle } from 'react-loader-spinner';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;
const LoadingSpinner = () => {
  return (
    <StyledSpinner>
      <Triangle
        className='spinner'
        height='100'
        width='100'
        radius='9'
        color='#d7282f'
        ariaLabel='three-dots-loading'
      />
    </StyledSpinner>
  );
};

export default LoadingSpinner;
