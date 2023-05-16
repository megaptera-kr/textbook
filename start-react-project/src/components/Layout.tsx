import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header>
        <h1>리액트 프로젝트</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
