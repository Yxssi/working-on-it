import { TextInput } from 'flowbite-react';
import React from 'react';

export default function Searchbar() {
  return (
    <>
      <div>
        <TextInput
          id="search"
          type="input"
          placeholder="Find a company"
          required={true}
        />
      </div>
    </>
  );
}
