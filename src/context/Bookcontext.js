import { createContext, useEffect, useReducer } from "react";


export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, dispatch] = useReducer(bookReducer, [], () => {
		const localDATA = localStorage.getItem('books');
		return localDATA ? JSON.parse(localDATA) : [];
	});

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books))
	}, [books]);

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
	)
}