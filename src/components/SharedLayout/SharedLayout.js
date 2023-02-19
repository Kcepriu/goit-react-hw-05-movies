import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Head } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Head>
        <Container>
          <Header>
            <nav>
              <Link to="/" end>
                Home
              </Link>
              <Link to="/movies">Movies</Link>
            </nav>
          </Header>
        </Container>
      </Head>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
