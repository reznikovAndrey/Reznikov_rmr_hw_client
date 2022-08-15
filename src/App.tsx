import { AuthProvider } from './features/auth';
import { Layout } from './features/layout';
import './ui-library/index.scss';
import './i18';

const App: React.FC = () => (
  <AuthProvider>
    <Layout />
  </AuthProvider>
);

export default App;
