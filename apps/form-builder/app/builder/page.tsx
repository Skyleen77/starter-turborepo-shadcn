import { BuilderProvider } from "@/context/BuilderContext";
import { Builder } from "./_components/builder";
import { Navbar } from "./_components/navbar";

const BuilderPage = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <BuilderProvider>
        <Navbar />
        <Builder />
      </BuilderProvider>
    </div>
  );
};

export default BuilderPage;
