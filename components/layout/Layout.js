import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
