import React from 'react';
import ReactDom from 'react-dom';

function Jsx(){

  return (
      <section>
        <div>
          <h1> Jsx Rules</h1>
          <ul>
            <li>
              <a href="">Return single element</a>
            </li>
            <br />
            <li>
              <a href="">div / element / article or Fragment</a>
            </li>
            <br />
            <li>
              <a href="">use camelCase for html attribute</a>
            </li>
            <br />
            <li>
              <a href="">className instead of class</a>
            </li>
            <br />
            <li>
              <a href="">close every element</a>
            </li>
            <br />
            <li>
              <a href="">formatting</a>
            </li>
          </ul>
          <h3>Thankyou</h3>
        </div>
      </section>
  );

}

ReactDom.render(<Jsx/>, document.getElementById('root'))