noCount = 0;

function yes() {
  let question = document.getElementById("question");
  question.innerText = "Yay!";
  let image = document.getElementById("image");
  image.src = "yes.png";
  let yes = document.getElementById("yes");
  yes.remove();
  let no = document.getElementById("no");
  no.remove();
}

function no() {
  noCount += 1;
  console.log(noCount);

  let image = document.getElementById("image");
  let no = document.getElementById("no");

  switch (noCount) {
    case 1:
      image.src = `image0${noCount + 1}.png`;
      no.style.width = "13vw";
      no.style.height = "8vh";
      no.style.fontSize = "20px";
      no.innerText = "Are you sure?";
      break;
    case 2:
      image.src = `image0${noCount + 1}.png`;
      no.style.width = "11vw";
      no.style.height = "6vh";
      no.style.fontSize = "10px";
      no.innerText = "Think carefully...";
      break;
    case 3:
      image.src = `image0${noCount + 1}.png`;
      no.style.width = "9vw";
      no.style.height = "4vh";
      no.style.fontSize = "10px";
      no.innerText = "Ur breaking my heart :(";
      break;
    case 4:
      image.src = `image0${noCount + 1}.png`;
      no.style.width = "7vw";
      no.style.height = "2vh";
      no.style.fontSize = "7px";
      no.innerText = "Pookie please...";
      break;
    case 5:
      no.remove();
      break;
  }
}
