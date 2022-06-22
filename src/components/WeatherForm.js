import React, { useState } from 'react';
import styles from './weatherForm.module.css';


export default function WeatherForm({onChangeCity}) {

  const [city, setCity] = useState(null);

  const onChange = (e) => {
    const value = e.target.value;
    if(value !== ''){
        setCity(value);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(city.length<3){
      alert('Insert city please');
    } else{
    onChangeCity(city);
    setCity(null);
  }
  }

  return (
    <div>
        <form className={styles.container} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" onChange={onChange}/>
        </form>
    </div>
  )
}
