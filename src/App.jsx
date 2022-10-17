import TaksList from "./Componentes/TaksList";
import Taskform from "./Componentes/Taskform";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <Taskform />
        <TaksList />
      </div>
    </main>
  );
}

export default App;
