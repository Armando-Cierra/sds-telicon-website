import { useState, useEffect } from 'react';
import {
  Search,
  Telicon,
  Toast,
  toastTrigger
} from '@2600hz/sds-react-components';
import teliconList from '@2600hz/sds-telicon/telicon-list.json';
import useActivePage from '../../utils/useActivePage';
import 'react-toastify/dist/ReactToastify.css';
import './icon-list.scss';

const IconList = () => {
  const { setActivePage } = useActivePage();
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(teliconList);

  useEffect(() => {
    setActivePage('IconList');
  }, [setActivePage]);

  useEffect(() => {
    setFilteredList(
      teliconList.filter((icon) => icon.indexOf(search.toLowerCase()) > -1)
    );
  }, [search]);

  const captureData = (e: any) => {
    const { value } = e;
    setSearch(value);
  };

  const copyText = (e: any) => {
    const value = e.target.getAttribute('data-clipboard-text');
    navigator.clipboard.writeText(value);
    toastTrigger('Icon Name Copied Successfully!', 'Success', 'bottom-center');
  };

  return (
    <>
      <Toast />
      <section className="iconList">
        <div className="container">
          <div className="searchBar">
            <h2>Icon Reference Sheet</h2>
            <Search
              placeholder="Search By Name..."
              id="search"
              onChange={captureData}
            />
          </div>
          <div className="list">
            {filteredList.map((icon, index) => (
              <div
                className="card"
                key={index}
                data-clipboard-text={icon}
                onClick={copyText}
              >
                <Telicon name={icon} size="Default" />
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IconList;
