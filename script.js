// отдельное число для подсчета div
// цикл создания div
// rnd плохих и хороших
// <div> отзыв </div>
const osnkvad = document.getElementById("osnkvad");
const review = document.getElementById("reveiw");
const reviews = document.getElementById("reviews");
const clear = document.getElementById("clear")
const goodotzivi = ["Это прекрасно!" , "Я никогда не видел ничего лучшего, чем это!" , "О Боже! Это прекрасно!" , "Почему людям не нравиться данный продукт? Это прекрасно! " , "Нет слов, одни эмоции!"]
const badotzivi = ["Это ужасно!" , "Я хочу возврат средств!" , "Полный ужас! Как это вообще стало популярным?" , "Худшее что я видел в своей жизни!" , "Почему люди покупают это? "]
const names = [
    'Ярослав',
    'Алексей',
    'Александр',
    'Никита',
    'Игорь',
    'Тимофей',
    'Дмитрий',
    'Роман',
    'Иван',
    'Кирилл',
    'Владислав',
    'Николай',
    'Артём',
    'Марк',
    'Михаил',
    'Василий',
    'Константин',
    'Глеб',
    'Фёдор',
    'Андрей',
    'Эмир',
    'Матвей',
    'Данила',
    'Егор',
    'Руслан',
    'Тимур',
    'Лев',
    'Ян',
    'Максим',
    'Демьян'
];

const polozh_otzivi = document.getElementById ("polozh-otzivi")
const otriz_otzivi = document.getElementById ("otriz-otzivi")
const generate_button = document.getElementById ("generate")
const review_length = document.getElementById ("reveiw-length") 

function getGoodViews() {
  let goodOtziviNumber = parseInt(Math.random() * goodotzivi.length);
    return goodotzivi[goodOtziviNumber];
}

function getBadViews() {
  let badOtziviNumber = parseInt(Math.random() * badotzivi.length);
  return badotzivi[badOtziviNumber];
}    

function getImage() {

  let rnd = parseInt(Math.random() * 100);

  return `<img class="image" src="https://randomuser.me/api/portraits/men/${rnd}.jpg" width=40 heigth=40></img> `;

}


function makeReview() {

  if (review_length.value > 5 || review_length.value < 1 ) {

    alert('Введите правильное число ( от 1 до 5)')

  } else if(polozh_otzivi.checked == false && otriz_otzivi.checked == false) {
    alert('Поставьте, пожалуйста, галочки напротив отзыва, который вам нужен')

  } else {

  console.log(review_length.value);

  for (i = 0; i < review_length.value; i++) {

  let new_review = "";

  if (polozh_otzivi.checked && otriz_otzivi.checked){

    let number = parseInt(Math.random() * 2);

      if (number == 0) {
      
        new_review += getBadViews();  
      
      } else if (number == 1 ) {

        new_review += getGoodViews();

      }

  } else if (polozh_otzivi.checked){

    new_review += getGoodViews();

  } else if (otriz_otzivi.checked){

    new_review += getBadViews();  

  }

console.log(new_review);

function getName() {

  return names[parseInt(Math.random() * names.length)];

}


let newDiv = document.createElement("div");
newDiv.className = "reveiw";
newDiv.id = "reveiw";
newDiv.innerHTML = `${getImage()} ${getName()}: ${new_review}`;
osnkvad.appendChild(newDiv);
reviews.appendChild(newDiv);
// return new_review;

    }
  }
}

function ClearReview()
{
    document.getElementById('reviews').innerHTML = "";
}




generate_button.addEventListener("click", makeReview)
// clear.addEventListener("click", ClearReview)