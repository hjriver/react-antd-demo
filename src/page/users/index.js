import React from 'react';
// import {render} from 'react-dom';
import {Link} from 'react-router-dom'; //引入路由函数

function Users() {
  return (
    <div>
      <h3>用户信息</h3>
      <ul>
        <li style={{listStyle:'none',textAlign:'left'}}><Link to='/tabble'>to tabble</Link></li>
      </ul>
    </div>
  );
}

export default Users
