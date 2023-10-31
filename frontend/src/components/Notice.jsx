import React, { useState } from 'react';

const SectionWithScrollableCards = () => {
  const [data1, setData1] = useState([
    {
      id: 1,
      title: 'Card 1',
      content: 'Content for Card 1',
      postedBy: 'Caretaker 1',
      date: '2023-10-26',
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'Content for Card 2',
      postedBy: 'Caretaker 2',
      date: '2023-10-27',
    },
    {
        id: 2,
        title: 'Card 2',
        content: 'Content for Card 2',
        postedBy: 'Caretaker 2',
        date: '2023-10-27',
      },
  ]);

  const [data2, setData2] = useState([
    {
      id: 3,
      title: 'Card 3',
      content: 'Content for Card 3',
      postedBy: 'Warden 1',
      date: '2023-10-28',
    },
    {
      id: 4,
      title: 'Card 4',
      content: 'Content for Card 4',
      postedBy: 'Warden 2',
      date: '2023-10-29',
    },
    {
        id: 4,
        title: 'Card 4',
        content: 'Content for Card 4',
        postedBy: 'Warden 2',
        date: '2023-10-29',
      },
  ]);

  return (
    <div className="flex h-96 "> {/* Increased container height to h-96 */}
      <div className="w-1/2 h-96 p-2 overflow-y-auto bg-gray-300">
        <h2 className="text-center text-2xl mb-2 text-black"><b>NOTICES</b></h2>
        {data1.map((card) => (
          <div key={card.id} className="mb-4 p-4 border rounded shadow flex flex-col justify-between h-50 bg-white">
            <div className="text-center">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600">Description: {card.content}</p>
            </div>
            <div className="text-center">
              <p className="text-black">Posted by: {card.postedBy}</p>
              <p className="text-black">Date: {card.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/2 h-96 p-2 overflow-y-auto mr-2 bg-gray-300">
        <h2 className="text-center text-2xl mb-2 text-black"><b>RECENT</b></h2>
        {data2.map((card) => (
          <div key={card.id} className="mb-4 p-4 border rounded shadow flex flex-col justify-between h-55 bg-white">
            <div className="text-center">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600">Description: {card.content}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Posted by: {card.postedBy}</p>
              <p className="text-gray-600">Date: {card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWithScrollableCards;
