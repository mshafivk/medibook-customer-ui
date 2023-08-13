import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user || !auth.user.username) {
    return (
      <div className="flex justify-end bg-slate-50  min-h-[9vh] items-center">
        <span className="p-6 md:p-3 sm:py-2">You are not Logged in</span>
        <a className="link text-lg p-6 md:p-3 sm:py-2" href="/login">
          Login
        </a>
        <a className="link text-lg p-6 md:p-3 sm:py-2" href="/register">
          Sign Up
        </a>
      </div>
    );
  }

  return (
    <div className="flex  min-h-[9vh] bg-slate-50  items-center px-4">
      <div className="flex-row text-2xl">
        <span className="font-bold underline underline-offset-3 decoration-orange-700">
          Medi
        </span>
        <span className="font-light">Token</span>
      </div>
      <div className="flex flex-1 justify-end">
        <span className="text-lg  p-6 md:p-3 sm:py-2 mr-2">
          Welcome {auth.user.username}!{' '}
        </span>
        <Link
          className="link text-lg  p-6 md:p-3 sm:py-2 mr-2"
          to="/book-token"
        >
          Book Token
        </Link>
        <button
          type="button"
          className="link text-lg p-6 md:p-3 sm:py-2"
          onClick={() => {
            auth.signout(() => navigate('/'));
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default AuthStatus;
