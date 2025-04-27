import Header from './components/Header/page';
import Buttons from './components/Buttons/page';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Buttons />
      </div>
    </div>
    </SessionProvider>
  );
}
