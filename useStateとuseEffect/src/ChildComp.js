import React, { useEffect } from 'react';

function ChildComp({ data }) {
  useEffect(() => {
    console.log(data.name); // John
    console.log(data.age); // 30
  }, [data]);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.age} years old</p>
    </div>
  );
}

export default ChildComp;
