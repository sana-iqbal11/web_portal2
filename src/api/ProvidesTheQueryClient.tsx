'use client';
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from "@tanstack/react-query";


export default function ProvidesTheQueryClient({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>

   ); 
}