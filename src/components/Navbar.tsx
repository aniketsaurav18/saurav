const Navbar = () => {
  return (
    <nav className="flex flex-row gap-5 my-4 sticky top-0 z-50 backdrop-blur-md py-2">
      <a href="/" className="hover:underline">
        Home
      </a>
      <a href="/about" className="hover:underline">
        About
      </a>
      <a href="/projects" className="hover:underline">
        Projects
      </a>
      <a href="/blogs" className="hover:underline">
        Blogs
      </a>
      <a href="/shelf" className="hover:underline">
        Shelf
      </a>
    </nav>
  );
};

export default Navbar;
