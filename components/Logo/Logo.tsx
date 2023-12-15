import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <Image src="/images/logo-default.png" alt="Logo" width={164} height={64} />
  </Link>
);

export default Logo;
