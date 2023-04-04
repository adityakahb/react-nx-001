import './../styles/globals-default.scss';
import LoginContext from '../contexts/login-context';
import NavigationContext from '@/contexts/nav-context';

export default function App({ Component, pageProps }) {
  return (
    <>
      <LoginContext>
        <NavigationContext>
          <Component {...pageProps} />
        </NavigationContext>
      </LoginContext>
    </>
  );
}
