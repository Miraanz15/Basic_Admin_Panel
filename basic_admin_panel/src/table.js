import React, {useState, useEffect} from 'react';
import './table.css';

const Table = () => {
        const [data, setData] = useState([]);
        const [startIndex, setStartIndex] = useState(0);
        const rowsPerPage = 5;
      
        useEffect(() => {
          fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
        }, []);

    return (
        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                 <td>Id</td>
                 <td>FirstName</td>
                 <td>LastName</td>
                 <td>Email</td>
                 <td>Phone</td>
              </tr>
            </thead>
            <tbody className='scrollable'>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody> 
          </table>   
        </div>
      );
}


export default Table;

