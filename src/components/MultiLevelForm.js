import { useState } from "react";

const RecursiveForm = ({ data }) => {
  const [openNodes, setOpenNodes] = useState({});

  const toggleNode = (id) => {
    setOpenNodes((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the open state for this node
    }));
  };

  return (
    <div className="">
      {data.map((item) => (
        <FormNode key={item.id} item={item} openNodes={openNodes} toggleNode={toggleNode} />
      ))}
    </div>
  );
};

const FormNode = ({ item, openNodes, toggleNode }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = openNodes[item.id] || false;

  return (
    <div className="">
      {hasChildren && (
        <label className="">
          <input type="checkbox" onChange={() => toggleNode(item.id)} checked={isOpen} />
          <span>{item.label}</span>
        </label>
      )}
      {!hasChildren && <span>{item.label}</span>}
      {isOpen && hasChildren && (
        <div className="">
          {item.children.map((child) => (
            <FormNode key={child.id} item={child} openNodes={openNodes} toggleNode={toggleNode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveForm;
