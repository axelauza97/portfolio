import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="absolute h-px w-px overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)] focus:clip-auto focus:h-auto focus:w-auto focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-purple focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="pt-16">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
