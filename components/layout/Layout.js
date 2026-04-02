import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="absolute left-0 top-0 h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)] focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:[clip-path:none] focus:px-4 focus:py-2 focus:bg-accent-teal focus:text-sm focus:font-medium focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="pt-16 overflow-x-hidden">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
