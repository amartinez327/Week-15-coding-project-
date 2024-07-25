import React, { useState, useEffect } from 'react';
import InventoryItem from './InventoryItem';
import InventoryForm from './InventoryForm';

const InventoryList = () => {
  const [items, setItems] = useState([]);//here we use useState

  const addItem = (item) => {
    setItems([...items, item]);
  };

  //perform get request to get all vehicle and inventory data from api
  // https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/vehicles

  async function getData() {
    const apiEndpoint = "https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/vehicles";
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const apiResponse = await response.json();
      console.log("api data:",apiResponse);
      setItems(apiResponse)
    } catch (error) {
      console.error("Uh oh! Things broke!!!!",error);
    } 
  }

  useEffect(() => {//here we use useEffect
    getData();
  }, []);

console.log("Inventory Items:", items);//console.log items 
  return (
    <div>
      <h2>Inventory List</h2>                                        
      <InventoryForm addItem={addItem} getData={getData} />     
      {items.map((item, index) => (
        <InventoryItem key={index} item={item} getData={getData} />
      ))}
    </div>
  );
};

export default InventoryList;
