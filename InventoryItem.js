import React from 'react';

const InventoryItem = ({ item, getData }) => {

  console.log("Inventory Item property data:", item, "get data property?",getData);
  
  return (
 
  <div className="inventory-item">
    <h3>{item.vehicleYear} {item.vehicleMake} {item.vehicleModel}</h3>
  </div>
);
}

export default InventoryItem;
