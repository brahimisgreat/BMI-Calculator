import React from 'react'
import classes from './bmiCalculatoe.module.css'

export default function BmiCalculator() {
  return (
    <div className={classes.container}>
        <div className={classes.headline}><h3>Enter yor details below</h3></div>
        <div className={classes.Metric}>
          <div className={classes.MetricInput}><input type='radio' name='metric'></input> <label>Metric</label> </div> 
          <div className={classes.MetricInput}><input type='radio' name='metric'></input> <label>Imperial</label> </div>
         </div>
        <div className={classes.inputs}>          
            <div className={classes.height}>
              <label>Height</label>
              <div className={classes.hInput}>
                <input type='text' placeholder='0'></input>
                <h5>kg</h5>   
              </div>
            </div>
           <div className={classes.weight}>
              <label>Weight</label>
              <div className={classes.wInput}>
                <input type='text' placeholder='0' />
                <h5>kg</h5> 
              </div>
           </div> 
        </div>
        <div className={classes}>
          <div>
            <h3>Welcome!</h3>
            <p>Enter your height and weight and you’ll see your BMI result here</p>
          </div>
        </div>
    </div>
  )
}
