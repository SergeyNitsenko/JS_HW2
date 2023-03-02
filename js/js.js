"use strict"


//Task 1

let name = 'Сергей';
let age = 36;
let city = 'Гомель';
let phone = '+375 29 368-23-33';
let email = 's.erg-86@mail.ru';
let company = 'ООО "Альфатехсистем"';

{
        prompt('Меня зовут ' + name + '. Мне ' + age +
                ' лет. Я проживаю в городе ' + city +
                ' и работаю в компании ' + company +
                '. Мои контактные данные: ' + phone + ', ' + email + '.');
}



//Task 2

let year = 2023 - age;

{
        document.write((name) + ' родился в ' + year + ' году.');
}


// Task 3

{
        let line = '321124';
        let linesum1 = line[0] + line[1] + line[2];
        let linesum2 = line[3] + line[4] + line[5];

        if (linesum1 == linesum2) {
                console.log(true);
        } else {
                console.log(false);
        }
}


// Task 4 
{
        let a = 1;
        a = 0;
        a = -3;


        if (a > 0) {
                console.log('Верно')
        } else {
                console.log('Неверно')
        }

}


//Task 5


const a = 10;
const b = 2;
{
        console.log(a + b);
        console.log(a - b);
        console.log(a * b);
        console.log(a / b);

        const sum = a + b;
        if (sum > 1) {
                console.log(sum ** 2);
        }
}


//Task 6

{
        if (a > 2 && a < 11 || b >= 6 && b < 14) {
                console.log('Верно');
        } else {
                console.log('Неверно');
        }
}


//Task 7

{
        let n = 47;
        switch (n <= 15 || n <= 30 || n <= 45 || n <= 60) {
                case n <= 15:
                        console.log('В первую');
                        break;
                case n <= 30:
                        console.log('Во вторую');
                        break;
                case n <= 45:
                        console.log('В третью');
                        break;
                case n <= 60:
                        console.log('В четвертую');
                        break;
        }
}


// Task 8

let day = 31;
{
        switch (day < 11 || day < 21 || day <= 31) {
                case day < 11:
                        console.log('В первую');
                        break;
                case day < 21:
                        console.log('Во вторую');
                        break;
                case day <= 31:
                        console.log('В третью');
                        break;
        }
}



//Task 9


let days = 258;
{
        console.log(days + ' Дней');

        let daysYears = days / 365;
        if (daysYears < 1) {
                console.log('0 лет');
        } else {
                console.log(daysYears + ' год');
        }
        //console.log(daysYears + ' Лет');

        let daysMonths = days / 31;
        if (daysMonths < 1) {
                console.log('0 месяцев');
        } else {
                console.log(daysMonths + ' месяцев');
        }
        //console.log(daysMonths + ' Месяцев');

        let daysWeeks = (days / 7);
        if (daysWeeks < 1) {
                console.log('0 недель');
        } else {
                console.log(daysWeeks + ' недель');
        }
        // console.log(daysWeeks + ' Недель');

        let daysHours = days * 24;
        console.log(daysHours + ' часов');

        let daysMinutes = daysHours * 60;
        console.log(daysMinutes + ' Минут');

        let daysSeconds = daysMinutes * 60 * 60;
        console.log(daysSeconds + ' Секунд');

        if (days < 1) {
                console.log(daysHours + ' Часов');
        }
        if (days < 365) {
                console.log('Меньше года ');
        }
        if (days == 365) {
                console.log('Один год');
        }

        if (days > 365) {
                console.log('Более одного года');
        }
        if (days < 31) {
                console.log('Меньше месяца');
        }
        if (days < 7) {
                console.log('Меньше недели');
        }
}


// Task 10


{
        switch (days <= 31 || days <= 60 || days <= 91 || days <= 121 || days <= 152 || days <= 182 ||
        days <= 213 || days <= 244 || days <= 274 || days <= 305 || days <= 335 || days <= 365) {
                case days <= 31:
                        console.log('Январь, Зима');
                        break;
                case days <= 60:
                        console.log('Февраль, Зима');
                        break;
                case days <= 91:
                        console.log('Март, Весна');
                        break;
                case days <= 121:
                        console.log('Апрель, Весна');
                        break;
                case days <= 152:
                        console.log('Май, Весна');
                        break;
                case days <= 182:
                        console.log('Июнь, Лето');
                        break;
                case days <= 213:
                        console.log('Июль, Лето');
                        break;
                case days <= 244:
                        console.log('Август, Лето');
                        break;
                case days <= 274:
                        console.log('Сентябрь, Осень');
                        break;
                case days <= 305:
                        console.log('Октябрь, Осень');
                        break;
                case days <= 335:
                        console.log('Ноябрь, Осень');
                        break;
                case days <= 365:
                        console.log('Декабрь, Зима');
                        break;
        }
}