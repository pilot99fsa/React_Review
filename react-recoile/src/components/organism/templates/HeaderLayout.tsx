import { ReactNode } from 'react';
import Header from '../layout/Header';

type Props = {
  children: ReactNode;
};

function HeaderLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default HeaderLayout;
