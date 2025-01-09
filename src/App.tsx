import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainRouter from './routers/MainRouter.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRouter />
    </QueryClientProvider>
  )
}

export default App
