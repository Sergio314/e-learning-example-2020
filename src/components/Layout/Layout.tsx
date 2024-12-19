import { Route, RouteProps } from 'react-router-dom';
import { Header, HeaderProps } from 'components/Header';

import { Wrapper } from './style';

export const Layout = (props: RouteProps & HeaderProps) => {
  const { isHomepage } = props;
  return (
    <Wrapper>
      <Header isHomepage={isHomepage} />
      <Route {...props} />
    </Wrapper>
  );
};
