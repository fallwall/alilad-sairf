import React, { useState, useEffect} from 'react';

export default function MainContent() {

  const roleArr = ["software engineer", "community organizer", "netflix enthusiast"];
  const actArr = ["organizes events", "reads books", "cracks jokes"];
  const pplArr = ["UX designer", "comedians", "real nice people"];

  const [role, setRole] = useState(roleArr[0]);
  const [act, setAct] = useState(actArr[0]);
  const [ppl, setPpl] = useState(pplArr[0]);
  const changeRole = () => setRole(roleArr[Math.floor(Math.random() * roleArr.length)]);
  const changeAct = () => setAct(actArr[Math.floor(Math.random() * actArr.length)]);
  const changePpl = () => setPpl(pplArr[Math.floor(Math.random() * pplArr.length)]);

  useEffect(() => {
      if (role <= 0) {
        return;
      }
      const id = setInterval(changeRole, 5000);
      return () => clearInterval(id);
    }, [role]);
  
  return (
    <div>
      <p>MAIN CONTENT STUFF</p>
      <p>Dalila Frias is a {role}. She {act} and works with {ppl} on websites and publishing projects. </p>
    </div>
  )
}
