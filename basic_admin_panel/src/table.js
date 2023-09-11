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
      
        // Function to handle scrolling to the next page
        const nextPage = () => {
          setStartIndex(startIndex + rowsPerPage);
        };
      
        // Function to handle scrolling to the previous page
        const prevPage = () => {
          setStartIndex(Math.max(0, startIndex - rowsPerPage));
        };

    return (
        <div>
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
            <tbody>
              {data.slice(startIndex, startIndex + rowsPerPage).map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* Arrow scroll controls */}
          <div>
            <button onClick={prevPage} disabled={startIndex === 0}>Previous</button>
            <button onClick={nextPage} disabled={startIndex + rowsPerPage >= data.length}>Next</button>
          </div>
        </div>
      );
}


export default Table;

