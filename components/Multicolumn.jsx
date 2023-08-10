const Multicolumn = ({ cols, children }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-${cols} max-w-[400px] md:max-w-5xl gap-6 px-4 py-10`}
    >
      {children}
    </div>
  );
};

export default Multicolumn;
