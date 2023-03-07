let imageArray = [
    "https://thumbs.dreamstime.com/z/inspirational-motivating-quotes-nature-background-goal-plan-just-wish-135367132.jpg",
    "https://img.freepik.com/premium-vector/make-today-great-hand-lettering-positive-quote-poster-sunset-blurred-background-calligraphy-vector-illustration_88791-4223.jpg",
    "https://i.pinimg.com/564x/fc/68/2d/fc682d07af13137e28f196311d485999.jpg",
    "https://img.freepik.com/free-vector/motivational-poster-with-inspirational-quote_1284-45846.jpg?w=2000",
  ];
  var farBt = document.getElementById("forward");
  farBt.addEventListener("click", forwardFun);
  
  var bckBt = document.getElementById("backward");
  bckBt.addEventListener("click", backwardFun);
  
  function forwardFun() {
    var imgCntin = document.getElementById("imgHeading").src;
    var indexNum = imageArray.indexOf(imgCntin);
    console.log(indexNum);
    if (indexNum >= 3) {
      indexNum = 0;
    } else {
      indexNum++;
    }
    var imgChange = document.getElementById("imgHeading");
    imgChange.src = imageArray[indexNum];
  }
  
  function backwardFun() {
    var imgCntin = document.getElementById("imgHeading").src;
    var indexNum = imageArray.indexOf(imgCntin);
    console.log(indexNum);
    if (indexNum <= 0) {
      indexNum = 3;
    } else {
      indexNum--;
    }
    var imgChange = document.getElementById("imgHeading");
    imgChange.src = imageArray[indexNum];
  }

  //new
  var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer)
  }
  //
  var autoForBt = document.getElementById("autoForward");
  autoForBt.addEventListener("click", autoForwardFun);
  
  function autoForwardFun() {
    var i = 0;
    function counter() {
      if (i > 3) {
        clearInterval(id);
      } else {
        let imgChange = document.getElementById("imgHeading");
        imgChange.src = imageArray[i];
        i++;
      }
    }
    var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer) * 1000
  }
    var id = setInterval(counter, delayTimer);
  }
  
  var autoBckBt = document.getElementById("autoBackward");
  autoBckBt.addEventListener("click", autoBackwardFun);
  
  function autoBackwardFun() {
    var i = 3;
    function counter() {
      if (i < 0) {
        clearInterval(id);
      } else {
        let imgChange = document.getElementById("imgHeading");
        imgChange.src = imageArray[i];
        i--;
      }
    }
    var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer) * 1000
  }
    var id = setInterval(counter, delayTimer);
  }