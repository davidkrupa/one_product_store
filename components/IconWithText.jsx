const IconWithText = ({ details: { icon, title, text } }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div>icon</div>
      <h4 className="text-xl font-semibold py-4">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default IconWithText;
