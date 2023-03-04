import React from 'react';
import './App.css';
import CompanyCard from './components/Card';
import FooterApp from './components/Footer';

import PaginationCustom from './components/Pagination';
import Searchbar from './components/Searchbar';
import SearchButton from './components/SearchButton';

export default function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline mx-4">
          Welcome to Made In 241
        </h1>
        <div className="mx-6 my-4">
          <Searchbar />
          <div className="flex justify-center my-2">
            <SearchButton />
          </div>
          <div className="my-4">
            <CompanyCard />
            <div className="mt-8">
              <PaginationCustom />
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0">
          <FooterApp />
        </div>
      </div>
    </>
  );
}
