import React, { useState, useEffect } from 'react';
import { SearchInput, Telicon } from '@2600hz/sds-react-components';
import teliconList from '@2600hz/sds-telicon/telicon-list.json';
import useActivePage from '../../utils/useActivePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './icon-list.scss';

const IconList = () => {
  const { setActivePage } = useActivePage();
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(teliconList);
  const notify = () =>
    toast.success('Icon Name Copied Sucessfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  useEffect(() => {
    setActivePage('IconList');
  }, [setActivePage]);

  useEffect(() => {
    setFilteredList(
      teliconList.filter((icon) => icon.indexOf(search.toLowerCase()) > -1)
    );
  }, [search]);

  const captureData = (e: any) => {
    const value = e.target.value;
    setSearch(value);
  };

  const cleanData = () => {
    setSearch('');
  };

  const copyText = (e: any) => {
    const value = e.target.getAttribute('data-clipboard-text');
    navigator.clipboard.writeText(value);
    notify();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="iconList">
        <div className="container">
          <div className="searchBar">
            <h2>Icon Reference Sheet</h2>
            <SearchInput
              defaultValue=""
              name=""
              placeholder="Search By Name..."
              id="search"
              onChange={captureData}
              cleanData={cleanData}
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
