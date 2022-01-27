import {useState} from 'react';
import {InitialValues} from '../interfaces/interfaces';

interface useProductArgs {
  initialValues?: InitialValues;
}

export const useProduct = ({initialValues}:useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || 0);

  const increaseBy = (value:number) => {
    let newValue = Math.max(counter + value, 0);
    if(initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    if(counter!==newValue){
      setCounter(newValue);
    }
  }

  const reset = () => {
    setCounter(initialValues?.count || 0);
  }

  return {counter, increaseBy, maxCount:initialValues?.maxCount, reset, isMaxCountReached:!!initialValues?.count && initialValues.maxCount===counter}
}