import React, { useState } from "react";
import Title from "../../components/Title";

export default function Esign() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  
  const handleNameChange = (e) => {
    setName(e.target.value);
    
  };
  const handleDateChange = (e) =>{
    setDate(e.target.value);
  }

  const inputStyle = {
    border: "none",
    borderBottom: "1px solid red",
    marginRight: "50px",
  };
  return (
    <div className="container text-center mt-8">
      {/* <Title text ={'Esign App'}/> */}
      <Title classes ='text-6xl text-red-700 font-bold mb-4' text={name} />
      <Title classes ='text-3xl text-green-700 font-bold mb-6' text ={!date ? 'Date' : date} />
      <p className="mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        rerum exercitationem similique autem delectus vitae voluptatem enim
        eligendi iste quod veniam nostrum similique suscipit? Totam, nulla?
      </p>
      <footer className="flex justify-around align-center">
        <input 
        type="date" 
        value={date} 
        style={inputStyle}
        
        onChange={handleDateChange} />
        <input
          type="text"
          placeholder={"your name here"}
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
