// 1
// callbacks + errors
function getSrc(img, type, callback) {
  const url = img + ".txt";
  const request = new XMLHttpRequest();

  request.open("GET", url);
  request.responseType = type;

  request.onload = () => callback(null, request.response);
  // ! не срабатывает
  request.onerror = () =>
    callback(new Error(`Не удалось загрузить изображение ${url}`));
  request.send();
}

function newImg(error, src) {
  if (error) {
    console.log(error);
  } else {
    const img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img);
  }
}

getSrc("src", "text", newImg);

// 2
// https://learn.javascript.ru/task/delay-promise

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// delay(3000).then(() => alert("выполнилось через 3 секунды"));
