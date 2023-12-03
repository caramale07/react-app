import { useState } from "react";

function ListGroup() {
  let items = ["Baku", "Moscow", "Paris", "Washington", "London"];
  //   let selectedIndex = -1;

  // hook, state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List of Items</h1>
      {items.length === 0 && <p>Empty</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
