import React, { useState } from "react";

const CheckboxTree = ({ node, checkedItems, setCheckedItems, parent }) => {
  const isChecked = checkedItems[node.id] || false;

  // Function to update all descendants (children, grandchildren, etc.)
  const updateChildren = (children, state, updated) => {
    children.forEach((child) => {
      updated[child.id] = state;
      if (child.child) {
        updateChildren(child.child, state, updated);
      }
    });
  };

  // Function to check if all children of a parent are checked
  const areAllChildrenChecked = (parentNode, updated) => {
    return parentNode.child?.every((child) => updated[child.id]);
  };

  // Function to update all ancestors (parents, grandparents, etc.)
  const updateParents = (parentNode, updated) => {
    if (!parentNode) return;

    if (areAllChildrenChecked(parentNode, updated)) {
      updated[parentNode.id] = true; // Check parent if all children are checked
    } else {
      updated[parentNode.id] = false; // Uncheck parent if any child is unchecked
    }

    if (parentNode.parent) {
      updateParents(parentNode.parent, updated); // Recursively update ancestors
    }
  };

  const handleCheck = (id, isChecked) => {
    setCheckedItems((prev) => {
      const updated = { ...prev, [id]: isChecked };

      // If checked, update all descendants
      if (node.child) {
        updateChildren(node.child, isChecked, updated);
      }

      // If unchecked or checked, update all ancestors
      if (parent) {
        updateParents(parent, updated);
      }

      return updated;
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheck(node.id, !isChecked)}
        />
        {node.label}
      </label>
      {node.child && (
        <div style={{ marginLeft: "20px" }}>
          {node.child.map((child) => (
            <CheckboxTree
              key={child.id}
              node={child}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
              parent={node} // Pass parent node reference
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedCheckbox = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const nestedCheckbox = {
    id: "1",
    label: "Parent 1",
    child: [
      {
        id: "11",
        label: "Child 11",
        child: [
          { id: "111", label: "Child 111" },
          { id: "112", label: "Child 112" },
          { id: "113", label: "Child 113" },
        ],
      },
      { id: "12", label: "Child 12" },
      { id: "13", label: "Child 13" },
    ],
  };

  return (
    <div className="accordion">
      <h2>Nested Checkboxes</h2>
      <section className="accordion-list">
        <CheckboxTree
          node={nestedCheckbox}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      </section>
    </div>
  );
};

export default NestedCheckbox;
