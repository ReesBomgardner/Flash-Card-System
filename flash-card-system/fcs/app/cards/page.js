import React from 'react';
import Link from "next/link"
import cardData from '../public/Cards.json';

const HomePage = () => {
  return (
    <div>
      {cardData.Card.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px', fontSize: 18}}>
          <h2>{item.prompt}</h2>
          <p>{item.answer}</p>
          <p>{item.amount_understood}%</p>
          <p>{new Date(item.next_view_time).toLocaleString()}</p>
        </div>
      ))}
      <Link href="/" className="standard-button">
        Back
      </Link>
    </div>
  );
};

export default HomePage;