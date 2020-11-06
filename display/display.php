<?php 
    $var=$_GET['value'];
    
    //echo $var;
?>  

<html>
    <head>
    <style>
   
    #section1 {
        height: 90%; 
        text-align:center; 
        display:table;
        width:100%;
    }
    
    /*#section1 h1 {*/
    /*    display:table-cell; */
    /*    vertical-align:middle;*/
    /*    font-weight: bold;*/
    /*    color: #fff;*/
    /*    font-size: 152px;*/
    /*     font-family:Monotype Corsiva, Times, serif;*/
    /*}*/
    @import url("https://fonts.googleapis.com/css?family=Sacramento&display=swap");

h1 {
  font-size: calc(20px + 18vh);
  line-height: calc(20px + 20vh);
/*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
  color: #fccaff; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  font-family: "Sacramento", cursive;
  text-align: center;
  animation: blink 6s infinite;
  -webkit-animation: blink 6s infinite;
  font-size: 152px;
  display:table-cell; 
    vertical-align:middle;
    
    animation: fadeInAnimation ease 5s 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
}

body {
  padding: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 7px,
    rgba(0, 0, 0, 0.8) 9px,
    rgba(0, 0, 0, 0.8) 13px,
    transparent 13px
  );
  animation: fadeInAnimation ease 5s 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
} 
  
@keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
     } 
} 

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

    </style>
    </head>
<body BGSOUND src="download/music.mid" loop=infinite>
<div id="section1">
<h1 align="center"><?php echo $var; ?></h1>
</div>
</body>
</html>