import React, { useState } from 'react';
import CourseGoalList from './Component/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './Component/CourseGoals/CourseInput/CourseInput';
import './App.css';
/*
- for debbuning in developer tools you can go to sources then see your file then 
add a sign for a line and see next function and hover for some variavles
- add react developer tools for chrome then go to component in developer tools 
there you can see your component info about it and  even live editing
- you need key when rendering because react when updating value it updated the whole array
and add to the end of the array and may issues occures so key solve this propem
*/
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };
//here i have special styling return if user submit without enter anything
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};
export default App;