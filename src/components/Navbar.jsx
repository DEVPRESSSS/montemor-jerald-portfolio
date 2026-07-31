export function NavBar() {
  return (
    <nav className="bg-white w-full border-b-2 border-gray-100 sticky top-0 py-4 px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center max-w-7xl mx-auto px-6">
        {/* Left */}
        <h5 className="text-lg">JM</h5>

        {/* Center */}
        <ul className="flex-none  md:flex items-center justify-center gap-8 text-md cursor-pointer">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#techstack">Stack</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>

        {/* Right (empty spacer to balance the left column) */}
        <div />
      </div>
    </nav>
  );
}