import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <h1>404 Not Found</h1>
      <Link to='/'>Go to main page</Link>
    </div>
  );
}

export default Page404;
