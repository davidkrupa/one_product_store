const TabsHighlights = () => {
  const highlightsList = [
    "Noise-cancellation technology",
    "Up to 30 hours of battery life",
    "Connectivity with bluetooth 5.2",
    "Quick charging capabilities",
    "Stylish design with diverse colors",
    "Voice assistant integration",
  ];

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-3">
        {highlightsList.map((item) => (
          <li className="m-4">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TabsHighlights;
