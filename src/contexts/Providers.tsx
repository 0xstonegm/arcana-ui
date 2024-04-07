'use client'

import React, { useCallback, useMemo } from 'react';
import { WalletError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useNetworkConfiguration } from '@/hooks/useNetworkConfiguration';
import { notify } from '@/utils/notifications';
import Notifications from '@/components/Shared/Notifications';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode; }) {
    const { endpoint } = useNetworkConfiguration();

  const wallets = useMemo(() => [
  ], []);

  const onError = useCallback((error: WalletError) => {
    console.error(error);
    notify({
      type: 'error',
      description: 'Wallet Error',
      message: error.message,
    });
  }, []);

  return (
  <ConnectionProvider endpoint={endpoint}>
    <Notifications />
      <WalletProvider wallets={wallets} onError={onError}>
        <WalletModalProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
