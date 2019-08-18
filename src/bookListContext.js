import React, { createContext ,useState} from "react";

export const BookListContext = createContext();

function BookListContextProvider(props) {
    const [booklist,setBL] = useState([{title:'nmsl',key:3},{title:'nmysl',key:4}]);
    return (
        <BookListContext.Provider value={{ booklist:booklist,setBL:setBL}}>
            {props.children}
        </BookListContext.Provider>
    );
}

export default BookListContextProvider;
