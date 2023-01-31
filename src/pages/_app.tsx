import type { AppProps } from 'next/app';
import App from 'next/app';
import { ReactElement } from 'react';
import { AppLayout } from '../components/layout';
import { GlobalContextProvider } from '../context';

function CustomApp({ Component, pageProps }: AppProps): ReactElement {
  console.log(`pageProps: `, Component, pageProps);

  return (
    <GlobalContextProvider
      siteName={pageProps.globals.siteName}
      seo={pageProps.globals.seo}
    >
      <AppLayout>
        <Component />
      </AppLayout>
    </GlobalContextProvider>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
CustomApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);

  return {
    ...appProps,
    pageProps: {
      globals: {
        seo: {
          metaTitle: 'Rocket Science Title',
          metaDescription: 'Rocket Science Description',
        },
        siteName: 'Rocket Science Boilerplate',
      },
    },
  };
};

export default CustomApp;
