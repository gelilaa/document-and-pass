/**
 * filters the title of the book
 * @param arrays of indexes for title and author
 * @returns arrays of titles
 * 
 * @example
 * getTheTitles(books) // ['Book','Book2']
 */
const getTheTitles = (books) => {
    let t= [];
    for (let book of books) {
         t.push(book.title);
            
        } return t;
    }
    
 


module.exports = getTheTitles;
