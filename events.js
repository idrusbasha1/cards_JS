// create 4 cards, 2 crads using innerHtmk and 2 cards using createElement()

const card1=document.querySelector("div")
card1.id="bmw"
card1.innerHTML=`<img src="https://parkplus-bkt-img.parkplus.io/5_BMW_M8_Coupe_284aed6741.webp" width="350" />
<p>Car is an emotion </p> 
<button>Buy Now</button>`
card1.style.border="2px solid black"
card1.style.display="inline-block"
card1.style.backgroundColor="magenta"
card1.style.textAlign="center"
card1.style.padding="20px"
card1.style.borderRadius="20px"

const card2=document.getElementById("card")
card2.innerHTML=`<img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg" width="350" />
<p>Car is an emotion </p> 
<button>Buy Now</button>`
card2.style.border="2px solid black"
card2.style.display="inline-block"
card2.style.backgroundColor="palegreen"
card2.style.textAlign="center"
card2.style.padding="20px"
card2.style.borderRadius="20px"

const card3=document.createElement("div")
card3.id="audi"
card3.innerHTML=`<img src="https://pictures.dealer.com/a/audiofcharlotteaoa/0710/c5b8311e1f1d966d0ecd57a8059c391cx.jpg" width="350" />
<p>Car is an emotion </p> 
<button>Buy Now</button>`
card3.style.border="2px solid black"
card3.style.display="inline-block"
card3.style.backgroundColor="orange"
card3.style.textAlign="center"
card3.style.padding="20px"
card3.style.borderRadius="20px"

document.body.appendChild(card3)

const card4=document.createElement("div")
card4.id="porsche"
card4.innerHTML=`<img src="https://stat.overdrive.in/wp-content/odgallery/2015/02/22496_911-Targa4S_1_468x263.jpg" width="350" />
<p>Car is an emotion </p> 
<button>Buy Now</button>`
card4.style.border="2px solid black"
card4.style.display="inline-block"
card4.style.backgroundColor="cyan"
card4.style.textAlign="center"
card4.style.padding="20px"
card4.style.borderRadius="20px"
card4.style.marginLeft="10px"
document.body.appendChild(card4)






