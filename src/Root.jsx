import { Outlet } from 'react-router-dom';
import useIsMobile from './hooks/useIsMobile';
import Header from './layout/Header';

export default function Root() {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Header isMobile={isMobile} />
      <Outlet />
    </>
  );
}
