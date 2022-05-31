import React, { useState } from "react";
import { idText } from "typescript";

//Hämtar Interface från invite
import { IState as Props } from "../components/Invite";

//props = interfaces
//lägger till setPeople från invite
interface IProps {
  people: Props["people"];

  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

//Säger att detta är en funktionell komponent av typen IProps.
const List: React.FC<IProps> = ({ people, setPeople }) => {
  //Specifierar att jag ska returnera JSX.Element
  const renderList = (): JSX.Element[] => {
    return people.map((person, key) => {
      return (
        <li key={key} className="List mt-2">
          <div className="List-header">
            <img className="List-img" src={person.url} />

            <h2>{person.name}</h2>
          </div>

          <p>{person.age} years old</p>

          <p className="List-note">{person.note}</p>

          <button
            className="btn btn-danger"
            onClick={() => handleClick(person.name)}
          >
            Remove
          </button>
        </li>
      );
    });
  };

  const handleClick = (personName: string): void => {
    let updatedPeople = people.filter((pers) => {
      return pers.name != personName;
    });

    setPeople(updatedPeople);
  };

  return <ul className="mt-2">{renderList()}</ul>;
};

export default List;
