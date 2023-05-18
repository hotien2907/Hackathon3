import React from "react";

function Todo() {
  
  return (
    <div className="todo">
      <input type="text" placeholder="Type Reviwe hede"/>

      <div className="content-item">
        <div className="item">
          <div>5/18/2023</div>
          <div>
            <button  >
              PUCLICK <ion-icon name="arrow-up-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
