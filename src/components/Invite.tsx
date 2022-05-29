import React, {useState} from 'react';
import AddToList from './AddToList';
import List from './List';

export interface IState {
    people : {
 
      name : string;
 
      age : number;
 
      url : string;
 
      note? : string;


 
    }[]
  }

const Invite: React.FC = () => {

      //definerar typer
  const [people, setPeople] = useState<IState["people"]>([
    
    {

      name: "Petrus Dughem",
      url: "",
      age: 31,
      note: "Petrus Dughem Lär Sig TypeScript För Att Han Är BÄST!",
    
    }

  ])
    return (
      <div className="container text-center mt-5">

        <div className="row">
          <div className="col">
            <h1 className="text-success fw-bold">People invited to my party</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <List people={people} setPeople={setPeople} />
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col">
            <AddToList people={people} setPeople={setPeople} />
          </div>
        </div>
      </div>
    );
}
export default Invite;