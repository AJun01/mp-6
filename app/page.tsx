import Header from './components/Header/Header';
import Buttons from './components/Buttons/Buttons';
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
