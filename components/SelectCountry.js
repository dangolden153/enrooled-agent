import React from 'react';
import Select from 'react-select';
import styles from '../styles/agents/Select.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas, search } from '@fortawesome/free-brands-svg-icons'
// import { faSearch} from '@fortawesome/free-solid-svg-icon'

// library.add(fas, search);
{/* <i class="fas fa-search-location"></i> */}
const countries = [
  { label: 'Apo Ae', value: 'Apo Ae' },
  { label: 'Arcata', value: 'Arcata' },
  { label: 'Arpin', value: 'Arpin' },
  { label: 'Bainbridge', value: 'Bainbridge' },
  { label: 'Barnet', value: 'Barnet' },
  { label: 'Bayport', value: 'Bayport' },
  { label: 'Bogart', value: 'Bogart' },
  { label: 'Bozeman', value: 'Bozeman' },
  { label: 'Burr Ridge', value: 'Burr Ridge' },
  { label: 'Castle Hayne', value: 'Castle Hayne' },
  { label: 'Castlewood', value: 'Castlewood' },
  { label: 'Church Road', value: 'Church Road' },
  { label: 'City of Industry', value: 'City of Industry' },
  { label: 'Coffeyville', value: 'Coffeyville' },
  { label: 'Cupertino', value: 'Cupertino' },
  { label: 'Diamond Springs', value: 'Diamond Springs' },
];

const SelectCountry = () => {
  return (
    <div className={styles.select}>
      <Select options={countries} placeholder="Sort by" />
    </div>
  );
}

export default SelectCountry;