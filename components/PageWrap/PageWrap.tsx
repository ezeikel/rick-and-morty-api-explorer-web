type PageWrapProps = {
  children: React.ReactElement | React.ReactElement[];
};

const PageWrap = ({ children }: PageWrapProps) => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        minHeight: 'calc(100vh - 76px)',
      }}
    >
      {children}
    </div>
  );
};

export default PageWrap;
