
import {createBookList} from "./create_books.js"
import { createTourList } from "./create_tour.js";




const bookResponse = await fetch('json_files/bookList.json');
const bookList = await bookResponse.json();
console.log(bookList);

const tourResponse = await fetch('json_files/tourEvents.json');
const tourList = await tourResponse.json();
console.log(tourList);


createBookList(bookList);

createTourList(tourList);


document.querySelector("#menu ul").addEventListener('click', (e) => {

    document.querySelectorAll('nav > ul > li > a').forEach(option => {
        option.classList.remove('active');
    })

    e.target.classList.add('active')


    document.title = `${e.target.innerText}`;

    const dataTarget = e.target.getAttribute('data-target');

    document.querySelector(`#${dataTarget}`).classList.remove('hide')
    document.querySelectorAll(`.page:not(#${dataTarget})`).forEach(page =>{

        page.classList.add('hide')
    })

})
