const cardObjectDefinitions = [
    {id:1, imagePath: '/img/card-kingHearts.png'},
    {id:2, imagePath: '/img/card-JackClubs.png'},
    {id:3, imagePath: '/img/card-QueenDiamonds.png'},
    {id:4, imagePath: '/img/card-AceSpades.png'}
]

const cardBackImgPath = '/img/card-back-Blue.png'
const caldContainerElement = document.querySelector('card-container')


//  <div class="card">
//     <div class="card-inner">
//         <div class="card-front">
//             <img src="./img/card-JackClubs.png" alt="" class="card img">
//         </div>
//         <div class="card-back">
//             <img src="./img/card-back-Blue.png" alt="" class="card img">
//         </div>
//     </div>
// </div> 

function createCard(cardItem){
    //create div element that make up a card

    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create front and back image element for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //add class and ID to Card element
addClassToElement(cardElem, 'card')
addIdtoElement(cardElem, cardItem.id)

    //add class to inner card element
addClassToElement(cardInnerElem,'card-inner')

    //add class to card front card element
addClassToElement(cardInnerElem,'card-front')

    //add class to card back card element
addClassToElement(cardInnerElem,'card-back')

    //add scr attribute and appropiate value to img element - back of card
addSrcToImageElem(cardBackElem, cardBackImgPath)

    //add scr attribute and appropiate value to img element - back of card
addSrcToImageElem(cardBackElem, cardItem.imagePath)

    //assign clasee to back image element of back card
addClassToElement(cardBackElem,'card-img')
    //assign clasee to back image element of front card
    addClassToElement(cardFrontElem,'card-img')

    //add front image element as child element to front card element
 addChildElement(cardFrontElem, cardFrontImg)

    //add back image element as child element to back card element
addChildElement(cardBackElem, cardBackImg)

    //add front card element as child element ot inner card element
addChildElement(cardInnerElem, cardFrontElem)

    //add back card element as child element ot inner card element
addChildElement(cardInnerElem, cardBackElem)

    //add inner card element as child of the card element
addChildElement(cardElem, cardInnerElem)


}

function createElement(elemType){

    return document.createElement(elemType)
}

//functions to dinamically create class and ID to an element
function addClassToElement(elem, className){
    elem.clssList.add(className)
}

function addIdtoElement(elem, id){
elem.id = id
}

function addSrcToImageElem(imgElem, src){
    imgElem.src = src
}
function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem)
}