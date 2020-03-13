/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator(){
  //make em
  const carousel = document.createElement('div')
  const carouselLeftBtn = document.createElement('div')
  const carouselImg1 = document.createElement('img')
  const carouselImg2 = document.createElement('img')
  const carouselImg3 = document.createElement('img')
  const carouselImg4 = document.createElement('img')
  const carouselRightBtn = document.createElement('div')

  //class them
  carousel.classList.add('carousel')
  carouselLeftBtn.classList.add('left-button')
  carouselRightBtn.classList.add('right-button')

  //content
  carouselLeftBtn.textContent= ' < '
  carouselImg1.src = "./assets/carousel/mountains.jpeg"
  carouselImg2.src = "./assets/carousel/computer.jpeg"
  carouselImg3.src = "./assets/carousel/trees.jpeg"
  carouselImg4.src = "./assets/carousel/turntable.jpeg"
  carouselRightBtn.textContent =  ' > '

  //style images
  // carouselImg1.style.display = 'none'
  // carouselImg2.style.display = 'none'
  // carouselImg3.style.display = 'none'
  // carouselImg4.style.display = 'none'

  // //add event listeners and logic
  const myCaroPosition = [carouselImg1, carouselImg2, carouselImg3, carouselImg4]
  let currentCaroPosition = 0
  myCaroPosition[currentCaroPosition].style.display='block'

  carouselLeftBtn.addEventListener('click', function(){
    if(currentCaroPosition === 0){
      myCaroPosition[currentCaroPosition].style.display = 'none'
      console.log('looped')
      currentCaroPosition = 3
      myCaroPosition[currentCaroPosition].style.display = 'block'
      console.log(currentCaroPosition)
    }else{
      myCaroPosition[currentCaroPosition].style.display = 'none'
      currentCaroPosition = currentCaroPosition - 1
      myCaroPosition[currentCaroPosition].style.display = 'block'
      console.log(currentCaroPosition)
    }
  })
  carouselRightBtn.addEventListener('click', function(){
    if(currentCaroPosition === 3){
      myCaroPosition[currentCaroPosition].style.display = 'none'
      console.log('looped')
      currentCaroPosition === 0
      myCaroPosition[currentCaroPosition].style.display = 'block'
      console.log(currentCaroPosition)
    }else{
      myCaroPosition[currentCaroPosition].style.display = 'none'
      currentCaroPosition ++
      myCaroPosition[currentCaroPosition].style.display = 'block'
      console.log(currentCaroPosition)
    }
  })
  //merge parts
  carousel.append(carouselLeftBtn, carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselRightBtn)

  //roll out carousel
  return carousel
}

document.querySelector('.carousel-container').appendChild(carouselCreator())


