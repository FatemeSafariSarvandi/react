import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './components/commentList';

const App = ()=>{

  let today = "Today at ";
  let user = [
    {name : "Alex" , time: "5:00" , comment:"Great blog post!"},
    {name : "Sam" , time: "7:51" ,comment:"Informative. Thanks."},
    {name : "Jane" , time: "9:01" , comment:"Looks great."}
  ];

  return(
    <div>
      <div>
        <CommentList
          name = {user[0].name}
          time = {user[0].time}
          today = {today}
          comment = {user[0].comment}
        />
      </div>

      <div>
        <CommentList
          name = {user[1].name}
          time = {user[1].time}
          today = {today}
          comment = {user[1].comment}
        />
      </div>

      <div>
        <CommentList
           name = {user[2].name}
           time = {user[2].time}
           today = {today}
           comment = {user[2].comment}
        />
      </div>

    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));