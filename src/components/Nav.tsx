
import { useNavigate } from 'react-router-dom';

import "./Style.css";

export const Nav = () => {

  // React-Router-v5
  // const history = useHistory();
  // const handleLink = (path: string) => { return history.push(path)};

  // React-Router-v6
  const navigate = useNavigate();
  const handleLink = (path: string) => { return navigate(path)};


  return (
    <div>
      <nav>
        <div className="Header-Nav">
          <button onClick={ ()=>{handleLink('/') }} >Home</button>
          <button onClick={ ()=>{handleLink('/register/') }} >新規登録</button>
          <button onClick={ ()=>{handleLink('/login/') }} >Login</button>
        </div>
        </nav>
    </div>
  );
}