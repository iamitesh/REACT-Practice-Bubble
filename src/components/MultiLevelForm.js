import { useState } from "react";

const RecursiveForm = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="space-y-2">
      {data.map((item) => (
        <FormNode key={item.id} item={item} selectedId={selectedId} setSelectedId={setSelectedId} />
      ))}
    </div>
  );
};

const FormNode = ({ item, selectedId, setSelectedId }) => {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = selectedId === item.id;

  const handleChange = () => {
    setSelectedId(isOpen ? null : item.id);
  };

  return (
    <div className="pl-4 border-l border-gray-300">
      {hasChildren && (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="form-radio"
            onChange={handleChange}
            checked={isOpen}
          />
          <span>{item.label}</span>
        </label>
      )}
      {!hasChildren && <span>{item.label}</span>}
      {isOpen && hasChildren && (
        <div className="ml-4 border-l pl-2 mt-2">
          {item.children.map((child) => (
            <FormNode key={child.id} item={child} selectedId={selectedId} setSelectedId={setSelectedId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveForm;