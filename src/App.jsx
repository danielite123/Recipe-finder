import MobileNav from "./components/mobile-nav";
import Navbar from "./components/navbar";
import RecipeSection from "./components/recipe.component";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-grow overflow-auto bg-white-smoke p-4 px-5 md:px-18">
        <RecipeSection />
      </main>

      <div className="sticky bottom-0 z-50">
        <MobileNav />
      </div>
    </div>
  );
}

export default App;
