
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <header className="App-Header">
        <h1>Pandas I/O</h1>
        
        <div><Link to={`/`}>Home</Link></div>
        <div><Link to={`/register/`}>新規登録</Link></div>
        <div><Link to={`/login/`}>Login</Link></div> 
      </header>
      
      <footer className="App-Footer">
        <p className='Footer-Msg'>© 2022 Pandas I/O</p>
      </footer>
    </div>
  );
}
