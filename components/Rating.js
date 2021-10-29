import React from 'react';
import Select from 'react-select';
import styles from '../styles/SearchFound.module.scss'

const rates = [
  { label: 'Good', value: 'Good' },
  { label: 'Very good', value: 'Very good' },
  { label: 'Excellent', value: 'Excellent' },
  { label: 'Poor', value: 'Poor' },
  { label: 'Very Poor', value: 'Very poor' },
  { label: 'Not recommended', value: 'Not recommended' },
  { label: 'Terrible', value: 'Terrible' },
];

const SelectRates = () => {
  return (
    <div className={styles.select}>
      <Select options={rates} placeholder="Sort by: Review" />
    </div>
  );
}

export default SelectRates;