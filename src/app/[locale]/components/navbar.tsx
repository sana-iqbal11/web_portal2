import Link from 'next/link';
import Logo from './logo';
import WidthContainer from './widthContainer';

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full">
      <WidthContainer>
        <div className="flex justify-between items-center w-full">
          <Logo className="font-bold text-xl" />
          <AuthNav />
        </div>
      </WidthContainer>
    </div>
  );
}

function AuthNav() {
  return (
    <div className="space-x-2">
      <Link href="/auth/signin" className="btn btn-secondary btn-outline">
        Sign in
      </Link>
      <Link href="/auth/signup" className="btn btn-primary">
        Sign up
      </Link>
    </div>
  );
}