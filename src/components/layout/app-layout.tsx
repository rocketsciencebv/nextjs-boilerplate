import Head from 'next/head';
import React, { PropsWithChildren } from 'react';
import { useGlobalContext } from '../../context';

export function AppLayout({ children }: PropsWithChildren) {
  const {
    seo: { metaTitle, metaDescription },
  } = useGlobalContext();

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="mx-4 sm:mx-6">{children}</main>
    </>
  );
}
