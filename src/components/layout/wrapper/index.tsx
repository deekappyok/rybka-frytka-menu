import style from './wrapper.module.scss';
import { ReactNode } from 'react';

const Index: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={style.wrapper}>{children}</div>
    </>
  );
};

export default Index;