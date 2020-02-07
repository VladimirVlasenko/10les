
let book = document.querySelectorAll('.book');
let text = document.querySelectorAll('h2');
console.log('text: ', text);

let parent = document.querySelectorAll('.books');
console.log('parent: ', parent);

parent[0].appendChild(book[0]);
parent[0].appendChild(book[4]);
parent[0].appendChild(book[3]);
parent[0].appendChild(book[5]);
parent[0].appendChild(book[2]);

//  замена бэкграунда
document.querySelector('body').style.backgroundImage = "url(./image/adv.jpg)";
//  замена содержимого h2 3й книги
book[4].querySelector('h2').textContent = 'Книга 3. this и Прототипы Объектов';

// удаление рекламы со страницы
let adv = document.querySelector('.adv');
adv.classList.remove('adv');

// восстановление порядка глав во второй и пятой книгах

li2 = book[0].querySelectorAll('li');

li2[1].appendChild(li2[3]);
li2[1].appendChild(li2[6]);
li2[1].appendChild(li2[8]);
li2[9].appendChild(li2[2]);

li5 = book[5].querySelectorAll('li');
console.log('li5: ', li5);
li5[1].appendChild(li5[9]);
li5[1].appendChild(li5[9]);
li5[1].appendChild(li5[3]);
li5[1].appendChild(li5[4]);
li5[7].appendChild(li5[5]);

// Добавляем главу в книгу 6
li6 = book[2].querySelectorAll('li');
console.log('li6: ', li6);
li6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');













