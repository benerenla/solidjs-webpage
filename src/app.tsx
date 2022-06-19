import { Component, createSignal, onMount, Show } from 'solid-js';
import { Link, useRoutes, useLocation } from 'solid-app-router';
import  Navbar from './components/Navbar'
import { routes } from './routes';
import Loading from './errors/Loading';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);
  const [loading ,setLoading] = createSignal(true)

  onMount(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4500)
  })
  return (
    <>
 
      <main>
        <Show
        when={loading()}
        fallback={<Route />}
        >
          <Loading />
        </Show>
      </main>
    </>
  );
};

export default App;
