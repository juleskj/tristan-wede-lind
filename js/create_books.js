export const createBookList = (bookList) =>{
const bookTemp = document.querySelector("template#book-template");


const bookContainer = document.querySelector("#books");
const fragment = document.createDocumentFragment();

    bookList.forEach(book => {
        
        const clone = bookTemp.content.cloneNode(true);

        clone.querySelector('h3').textContent = book.bookTitle;
        clone.querySelector('img').src = book.bookCoverPath;
        clone.querySelector('.sub-heading').textContent = `${book.bookSubTitle} (${book.bookPublished})`;
        clone.querySelector('.book-desc').textContent = book.bookDesc;
        clone.querySelector('img').alt = `${book.bookImgAlt} ${book.bookTitle}`;

       fragment.appendChild(clone);
                
    })

bookContainer.appendChild(fragment);

    
};


