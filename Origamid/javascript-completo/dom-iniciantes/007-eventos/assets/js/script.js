const img = document.querySelector('img')
console.log(img);

function callback(event){
  console.log(event.currentTarget)
}

img.addEventListener('click', callback)

const linkExterno = document.querySelector('a[href^="http"');

function handleLinkExterno(event){
  event.preventDefault();
  console.log(this.getAttribute('href'));
  console.log('clicou');
}

linkExterno.addEventListener('click', handleLinkExterno); 



const h1 = document.querySelector('h1');


function handleEvent(event){
  if(event.type === 'f')
    console.log(event.key);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent)

// window.addEventListener('resize', handleEvent)
// window.addEventListener('keydown', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

