import { createContext, ReactElement, ReactNode, useContext } from 'react';

interface Context {
  siteName: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

interface GlobalContextProviderProps extends Context {
  children: ReactNode;
}

const GlobalContext = createContext<Context | null>(null);

export function GlobalContextProvider({
  children,
  siteName,
  seo,
}: GlobalContextProviderProps): ReactElement {
  return (
    <GlobalContext.Provider value={{ siteName, seo }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext(): Context {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('Must use GlobalContextProvider when consuming context');
  }

  return context;
}
