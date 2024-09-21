import React, { useState } from 'react';

function Playcards() {
  const [cards] = useState([
    { title: 'Collecting Paper', caption: 'Gather waste paper from homes, offices, and factories.', imgSrc: '/media/collectingPapers.jpeg' },
    { title: 'Sorting Paper', caption: 'Separate paper by type and quality for recycling.', imgSrc: '/media/sortingPaper.jpeg' },
    { title: 'Pulping Process', caption: 'Shred paper into small pieces and blend with water to make pulp.', imgSrc: '/media/pulpingProcess.jpeg' },
    { title: 'Forming Sheets', caption: 'The pulp is processed into new sheets of recycled paper.', imgSrc: '/media/formingSheets.jpeg' }
  ]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10 bg-gray-50">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-6 shadow-lg text-center">
          <img className="mx-auto h-40" src={card.imgSrc} alt={card.title} />
          <h2 className="text-2xl mt-4 font-semibold">{card.title}</h2>
          <p className="mt-2 text-gray-600">{card.caption}</p>
        </div>
      ))}
    </section>
  );
}

export default Playcards;
