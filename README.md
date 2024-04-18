# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Results summary component solution](#frontend-mentor---results-summary-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![image](https://github.com/franclobo/results-summary-component/assets/58642949/ef3cc2fc-e731-474f-9039-3697177771c2)

### Links

- Solution URL: [results-summary-component](https://github.com/franclobo/results-summary-component)
- Live Site URL: [results-summary-component](https://results-summary-component-mu-seven.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned how to use the `useContext` hook in Next con Typescript to pass data from a parent component to a child component. Here is the code snippet:

```js
'use client';
import { createContext, useState, useEffect } from 'react';
import data from '../public/data.json';

type ItemType = {
  category: string;
  score: number;
  icon: string;
};

export type DataContextType = {
  data: ItemType[];
};

type DataProviderProps = {
  children: React.ReactNode;
};

export const DataContext = createContext<DataContextType>({
  data: [],
});

const DataProvider = ({ children }: DataProviderProps) => {
  const [state, setState] = useState<ItemType[]>([]);

  useEffect(() => {
    setState(data);
  }, []);

  return (
    <DataContext.Provider value={{ data: state }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

```

### Continued development

I will continue to learn how to use the `useContext` hook in Next.js with Typescript to pass data from a parent component to a child component. I will also learn how to use the `useReducer` hook in Next.js with Typescript to manage the state of the application. I will also learn how to use the `useEffect` hook in Next.js with Typescript to fetch data from an API.

## Author

- Website - [WebMinds Studio](https://www.webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I would like to thank Frontend Mentor for providing the challenge and anybody who will review my solution.

