import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">MyStore</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
