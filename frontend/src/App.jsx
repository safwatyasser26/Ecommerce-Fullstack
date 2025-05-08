import Home from '@components/pages/Home';
import SignIn from '@components/pages/SignIn';
import SignUp from '@components/pages/SignUp';
import OldNavBar from '@components/Home/OldNavBar';
import Layout from '@components/Layout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;