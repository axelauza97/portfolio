import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "@/components/UI/ScrollProgress";
import CustomCursor from "@/components/UI/CustomCursor";

function Layout(props) {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ScrollProgress />
      <a
        href="#main-content"
        className="absolute left-0 top-0 h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)] focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:[clip-path:none] focus:px-4 focus:py-2 focus:bg-accent-teal focus:text-sm focus:font-medium focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="pt-16 overflow-x-hidden">{props.children}</main>
      <Footer />
      {/* Global grain texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[45] opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}

export default Layout;
