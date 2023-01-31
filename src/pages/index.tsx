import { Inter } from '@next/font/google';
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Index(): ReactElement {
  return (
    <>
      <div className="">Hello new worlds!!!</div>
    </>
  );
}
