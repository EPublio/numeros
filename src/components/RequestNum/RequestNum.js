import React, { useState } from 'react';
import styles from './RequestNum.module.css';
import SalvarNum from '../SalvarNum/SalvarNum';
const apiURL = "http://localhost/api.php";

const RequestNum = () => {
    const [num, setNum] = useState([]);
    const [cor, setCor] = useState("white");

    const fetchNumero = async () => {
      try {
        const response = await fetch(apiURL, { method: 'GET' });
        const data = await response.json();
        setNum(data.number);

        if (data.number >= 0 && data.number <= 50) {
          setCor("green");
        } else if (data.number <= 70) {
          setCor("yellow");
        } else {
          setCor("red");
        }
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className={styles.container}>
        <div className={styles.borda}>
          <h1 className={styles.num} style={{color:cor}}>{num}</h1>
          <div className={styles.main}>
            <div>
              <button className={styles.botao1} onClick={fetchNumero}>Buscar número</button>
            </div>
          <SalvarNum num={num}/>
          </div>
        </div>
        
    </div>
  );
}

export default RequestNum;