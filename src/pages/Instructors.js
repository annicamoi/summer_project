import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchInstructor from "../components/SearchInstructor";
import CardSingle from "../components/CardSingle";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import InstructorList from '../components/InstructorList';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  let { url } = useRouteMatch();

  useEffect(() => {
    axios
      .get("https://agile-beach-68747.herokuapp.com/instructors")
      .then((res => setInstructors(res.data)));
  }, []);

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
  }

  const instructorFilter = instructors.filter((instructor) => {
    return instructor.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());
  });

  return (
    <div>
      <Switch>
        <Route path={`${url}/:_id`}>
          <CardSingle />
        </Route>
        <Route path={url} exact>
          <SearchInstructor search={searchValueHandler} />
          <InstructorList instructors={instructorFilter} />
        </Route>
      </Switch>
    </div>
  );
};
export default Instructors;
