const TabsSpecification = () => {
  const specificationRows = {
    type: "Over-ear wireless headphones",
    weight: "250 grams",
    dimensions: "7.5 x 6.3 x 3.2 inches (folded)",
    blooetooth_range: "Up to 33 feet (10 meters)",
    driver_size: "40mm dynamic drivers",
  };

  const specificationKeys = Object.keys(specificationRows);
  const titles = specificationKeys.map((key) =>
    key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );

  return (
    <table>
      <thead>
        <tr>
          <th scope="col" className="px-6 py-2 text-left">
            Model
          </th>
          <th scope="col" className="px-6 py-2 text-left">
            XHG 7Pro
          </th>
        </tr>
      </thead>
      <tbody>
        {specificationKeys.map((item, index) => (
          <tr>
            <td className="px-6 py-2 font-semibold">{titles[index]}</td>
            <td className="px-6 py-2 border-b border-black">
              {specificationRows[item]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabsSpecification;
