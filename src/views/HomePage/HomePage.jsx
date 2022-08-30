import { useSelector } from 'react-redux';

export const HomePage = () => {
  const state = useSelector(state => state.user.name);
  console.log(state);
  return (
    <>
      <h1>Welcome!</h1>
    </>
  );
};
