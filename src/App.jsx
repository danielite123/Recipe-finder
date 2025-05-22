import MobileNav from "./components/mobile-nav";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-grow overflow-auto bg-bright-grey">
        {/* Other components/content go here */}
      </main>

      <div className="sticky bottom-0 z-50">
        <MobileNav />
      </div>
    </div>
  );
}

export default App;
