const IconWithText = ({ details: { icon, title, text } }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <span className="text-center text-4xl text-slate-300">{icon}</span>
      <h4 className="text-xl font-semibold py-4">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default IconWithText;
