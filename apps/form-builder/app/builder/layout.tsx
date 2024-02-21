const BuilderPageLayer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800">
      <style>
        {`
          html, body {
            overflow: hidden;
          }
        `}
      </style>
      {children}
    </main>
  );
};

export default BuilderPageLayer;
