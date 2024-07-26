import { Outlet } from 'react-router-dom';
import useIsMobile from './hooks/useIsMobile';
import Header from './layout/Header';
import GlobalStyle from './GlobalStyle';

export default function Root() {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Header isMobile={isMobile} />
      <GlobalStyle />
      <Outlet />
    </>
  );
}
