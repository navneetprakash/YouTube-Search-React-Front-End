import { Triangle } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <Triangle
      className='spinner'
      height='80'
      width='80'
      radius='9'
      color='#d7282f'
      ariaLabel='three-dots-loading'
    />
  );
};

export default LoadingSpinner;
