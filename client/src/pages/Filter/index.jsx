import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import { dataList } from '../../assets/constants';
import './styles.css';

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'Music' },
    { id: 2, checked: false, label: 'Conferences' },
    { id: 3, checked: false, label: 'Forums' },
  ]);

  const [localisation, setLocalisation] = useState([
    { id: 1, checked: false, label: 'Rabat' },
    { id: 2, checked: false, label: 'Casablanca' },
    { id: 3, checked: false, label: 'Fes' },
  ]);

 

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangeChecked1 = (id) => {
    const localisationStateList = localisation;
    const changeCheckedLocalisation = localisationStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLocalisation(changeCheckedLocalisation);
  };


  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };
  
  

  useEffect(() => {
    document.body.style.zoom = "80%";
    const applyFilters = () => {
      let updatedList = dataList;
  
      // Rating Filter
      if (selectedRating) {
        updatedList = updatedList.filter(
          (item) => parseInt(item.rating) === parseInt(selectedRating)
        );
      }
  
      // Category Filter
      if (selectedCategory) {
        updatedList = updatedList.filter(
          (item) => item.category === selectedCategory
        );
      }
  
      // Cuisine Filter
      const cuisinesChecked = cuisines
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());
  
      if (cuisinesChecked.length) {
        updatedList = updatedList.filter((item) =>
          cuisinesChecked.includes(item.cuisine)
        );
      }

      // localisation Filter
      const localisationChecked = localisation
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
      
      if (localisationChecked.length) {
        updatedList = updatedList.filter((item) =>
        localisationChecked.includes(item.localisation)
        );
      }
  
  
      // Search Filter
      if (searchInput) {
        updatedList = updatedList.filter(
          (item) =>
            item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1
        );
      }
  
      // Price Filter
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];
  
      updatedList = updatedList.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
  
      setList(updatedList);
  
      !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    };
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, localisation,  searchInput, selectedPrice]);

  return (
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            localisation={localisation}
            changeChecked1={handleChangeChecked1}
            changePrice={handleChangePrice}
          />
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Filter;
