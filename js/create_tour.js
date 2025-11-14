
export const createTourList = (tourList) => {
    const tourTemp = document.querySelector("template#tour-template");

    const tourContainer = document.querySelector("#js-tour-list")
    const fragment = document.createDocumentFragment();
        
    tourList.forEach(tour => {
        const clone = tourTemp.content.cloneNode(true);

        clone.querySelector(".tour-date").textContent = tour.tourDate;
        clone.querySelector('.con-name').textContent = tour.conName;
        clone.querySelector('.tour-role').textContent = tour.tourRole == "Workshop"? "" : tour.tourRole;
        clone.querySelector('.con-location').textContent = `${tour.conLocation} (${tour.conCenter})`;

        fragment.appendChild(clone)
    })

    tourContainer.appendChild(fragment)
    
   
}
