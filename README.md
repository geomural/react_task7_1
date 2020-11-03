Александра Шарифуллина

Домашнее задание 7.1

<h1>HOC - Higher Order Components</h1>

<h2>Форматирование даты публикации </h2>

Есть страница, содержащая список видеозаписей. У каждого блока есть дата публикации.

<img src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/time/assets/time.png" alt=""/>

В данный момент выводится просто текущее значение (Пример 2017-09-01 14:15:10). Было вынесено решение изменять представление даты следующим образом в зависимости от его значения: 12 минут назад если прошло меньше часа, 5 часов назад если прошло больше часа, X дней назад если больше суток.

<h2>Реализация</h2>

Используя HOC обернуть DateTime в компонент DateTimePretty, так, чтобы он преобразовывал дату к нужному виду.

Воспользуйтесь готовым файлом App.js и стилями css/index.css из данного каталога в качестве отправной точки (замените ими те, что создаются в create-react-app).

Для работы с датой и временем можете воспользоваться библиотекой momentjs.

<i>Исходное задание: https://github.com/netology-code/ra16-homeworks/tree/master/hoc/time </i>
