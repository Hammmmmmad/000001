import React from 'react'

export default function VoteHere() {
var clicks1 = 0;

function onClick1() {
  clicks1 += 1;
  document.getElementById("clicks1").innerHTML = clicks1;
};
var clicks2 = 0;

function onClick2() {
  clicks2 += 1;
  document.getElementById("clicks2").innerHTML = clicks2;
};
var clicks3 = 0;

function onClick3() {
  clicks3 += 1;
  document.getElementById("clicks3").innerHTML = clicks3;
};
var clicks4 = 0;

function onClick4() {
  clicks4 += 1;
  document.getElementById("clicks4").innerHTML = clicks4;
};
  return (
    <>
    <h1>Click on Image to vote</h1>
    <div className="container">
          
            <div className="image">
                <button onClick={onClick1}><img src="https://i.pinimg.com/550x/4b/ff/35/4bff35c36702b099d068611b7255bb2e.jpg"/></button>
                <button onClick={onClick2}><img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Bilawal_Bhutto_Zardari.png"/></button>
                <button onClick={onClick3}><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/CM_Punjab_Shehbaz_Hajra_%2835706248992%29.jpg"/></button>
                <button onClick={onClick4}><img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/7/2022_7$largeimg_1128782724.jpeg"/></button>
            </div>
            <div className="votes">
                <h2>Total Votes</h2>
                <p>Imran Khan :  <a id="clicks1">0</a></p>
                <p>Bilawal Bhutto :  <a id="clicks2">0</a></p>
                <p>Shahbaz Shareef :  <a id="clicks3">0</a></p>
                <p>Pervaiz Ilahi :  <a id="clicks4">0</a></p>
            </div>
    </div>
    </>
  )
}

