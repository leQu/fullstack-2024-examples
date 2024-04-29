import React from "react";
import { useParams } from "react-router-dom";

import MainHeader from "../components/MainHeader";

import MySmartComponent from "../components/MySmartComponent";
import UntrackedComponent from "../components/UntrackedComponent";
import ReducerComponent from "../components/ReducerComponent";
import CustomButton from "../components/CustomButton";
import TitleUpdater from "../components/TitleUpdater";
import ToDoListComponent from "../components/ToDoListComponent";
import MultiFieldForm from "../components/MultiFieldForm";

import Navbar from "../components/Navbar";

export default function Examples() {
  const { name } = useParams();

  console.log(name);

  const simpleFunction = (event) => {
    console.log("Simple function", event);
  };
  return (
    <div>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <MainHeader description="Detta är vårt nya projekt" />
          <ToDoListComponent />
          {name === "form" && <MultiFieldForm />}
          {name === "title" && <TitleUpdater />}
          <ReducerComponent />
          <UntrackedComponent simpleFunction={simpleFunction} />
          <MySmartComponent initialCount={100} />
          <CustomButton customClick={() => console.log("Klick!")}>
            <p>Hej</p>
          </CustomButton>
        </header>
      </div>
    </div>
  );
}
