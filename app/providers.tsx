'use client';

import { ApolloWrapper } from '@/apollo/wrapper';
import { UIContextProvider } from '@/contexts/ui';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ApolloWrapper>
      <UIContextProvider>{children}</UIContextProvider>
    </ApolloWrapper>
  );
};

export default Providers;
