import React, { useState } from 'react';

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion-item">
      <div
        className="accordion-item-header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3>{item.title}</h3>
        <h3 className="accordion-icon">{isOpen ? '-' : '+'}</h3>
      </div>

      {isOpen && <p className="accordion-item-content">{item.details}</p>}
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      id: '1',
      title: 'Home',
      details: 'All the submissions will be displayed',
    },
    {
      id: '2',
      title: 'Client',
      details: 'All the submissions of Client will be displayed',
    },
    {
      id: '3',
      title: 'Admin',
      details: 'All the submissions of Admin will be displayed',
    },
  ];

  return (
    <div className="accordion">
      <h2>Accordion</h2>
      <section className="accordion-list">
        {accordionData.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Accordion;