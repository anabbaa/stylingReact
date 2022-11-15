/*
if <ou want to have id as reference as in html click to go top or down then you will
add usestate initial value false onclick on li it wll be set to false then on a tag
write # where this link whee go to example
   <li className="liFooter" onClick={() => setMenuOpen(false)}>
                <a className="footerLink" href="#general">
                  GENERAL
                </a>
*/
/*
amother way to style is to have file styling object of obects then have usestte false then have
the following
    <a
                onMouseOver={() => {
                  setHover(true);
                }}
                onFocus={() => {
                  setActive(true);
                }}
                onMouseOut={() => {
                  setActive(false);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                style={{
                  ...poweredStyle.normal,
                  ...(active
                    ? poweredStyle.active
                    : hover
                    ? poweredStyle.hover
                    : null),
                }}
                href="https://mediastack.com/"
              >
                Meidastack
              </a>{" "}
*/
import React from 'react';
import CourseGoalItem from '../CourseGoalList/CourseGoalList';
import './CourseGoalList.css';
const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
export default CourseGoalList;