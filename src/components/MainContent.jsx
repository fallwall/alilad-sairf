import React, { useState, useEffect } from 'react';

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
    if (role <= 0 || act <= 0 || ppl <= 0) {
      return;
    }
    const nextRole = setInterval(changeRole, 5000);
    const nextAct = setInterval(changeAct, 5000);
    const nextPpl = setInterval(changePpl, 5000);
    return () => {
      clearInterval(nextRole);
      clearInterval(nextAct);
      clearInterval(nextPpl);
    }
  }, [role, act, ppl]);

  return (
    <div>
      
      <div className="main-text">
        <p>Dalila Frias is a <div className="changeable">{role}</div>. She <div className="changeable">{act}</div> and works with <div className="changeable">{ppl}</div> on websites and publishing projects. </p>
      </div>
    </div>
  )
}
