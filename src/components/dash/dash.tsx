
import style from './dash.module.scss';

import getData from '../../data/data';
import { useState } from 'react';

const Dash = () => {

  const [current, setCurrent] = useState<string | undefined>(undefined);

  const map = new Map(Object.entries(getData));

  return (
    <div className={style.dash}>
      <h1>Dashboard</h1>

      <div className={style.dash_nav}>
        <ul>
          {/* get all values from data */}
            {Object.keys(getData).map((key) => (
                <li key={key} className={style.dash_nav_item}>
                <a onClick={
                    () => setCurrent(key)
                }>{key}</a>
                </li>
            ))}
        </ul>
      </div>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>status</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {current && map.get(current)?.map((item : any, index: any) => (
                <tr key={index}>
                <td>
                    <input type="text" value={item.name} />
                </td>
                <td>
                    <input type="text" value={item.price} />
                </td>
                <td>
                    <input type="checkbox" checked={item.status} />
                </td>
                <td>
                    <input type="text" value={item.description} />
                </td>
                <td>
                    <button>Save</button>
                    <button>Delete</button>
                </td>
                </tr>
            ))}
        </tbody>
      </table>

        <h2>Add new item</h2>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="price" />
        <input type="text" placeholder="description" />
        <div>
            <input type="checkbox" />
            <label>available</label>

            <button>Add</button>    
        </div>
    </div>
  );
};

export default Dash;