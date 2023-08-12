const Multicolumn = ({ cols, children }) => {
  return (
    <div
      className={`grid grid-cols-1 ${cols} max-w-[400px] md:max-w-5xl gap-6 px-4 py-10`}
    >
      {children}
    </div>
  );
};

export default Multicolumn;
