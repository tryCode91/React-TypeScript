import React from "react";

import { IState as Props } from "../components/Invite";
//props = interfaces

interface IProps {
  people: Props["people"];

  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

//detta är en REACT funktionell component med IProps
//people och setPeople är props som passas in från invite.tsx dessa måste destruktureras
//för att typescript ska använda de!
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = React.useState({
    name: "",

    age: "",

    note: "",

    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,

      [e.target.name]: e.target.value,
    });
  };

  //specifiera alltid vad funktionen ska returnera
  const handleClick = (): void => {
    if (
      //om input.name är tomt gör något logiskt
      !input.name ||
      !input.age ||
      !input.img
    ) {
      return;
    }

    setPeople([
      //passar in det intiala statet
      ...people,

      {
        name: input.name,

        age: parseInt(input.age),

        url: input.img,

        note: input.note,
      },
    ]);

    setInput({
      name: "",

      age: "",

      note: "",

      img: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="image URL"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />

      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
