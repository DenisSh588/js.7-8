//  4 урок 
//let rollback = 13;
//let allServicePrices
//let fullPrice
//let servicePercentPrice

//title = prompt('Как называется ваш проект?');
//screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?');
//switch (screens) {
//    case 'Простые':
//        screens = 'Простые';
//        break;
//    case 'Сложные':
//        screens = 'Сложные';
//        break;
//    case 'Интерактивные':
//        screens = 'Интерактивные';
//        break;
//    default:
//        console.log('Вы ввели не верные данные');
//}
//screenPrice = +prompt('Сколько будет стоить данная работа?');
//adaptive = confirm("Нужен ли адаптив на сайте?");
//service1 = prompt('Какой дополнительный тип услуги нужен?');
//servicePrice1 = +prompt('Сколько это будет стоить?');
//service2 = prompt('Какой дополнительный тип услуги нужен?');
//servicePrice2 = +prompt('Сколько это будет стоить?');

//const getAllServicePrices = function () {
//    return servicePrice1 + servicePrice2
//}

//const getFullPrice = function () {
//   return screenPrice + allServicePrices    
//}

//const getTitle = function() {
//    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
//}

//const getServicePercentPrice = function () {
//    return fullPrice - (fullPrice * (rollback / 100))
//}

//const getRollbackMessage = function (price) {
//    if (price >= 30000) {
//        return "Даём скидку в 10%"
//    } else if (price >= 15000 && price < 30000) {
//        return "Даём скидку в 5%"
//    } else if (price >= 0 && price < 15000) {
//        return "Скидка не предусмотрена"
//    } else {
//        return "Что-то пошло не так"
//    }
//}

//allServicePrices = getAllServicePrices()
//fullPrice = getFullPrice()
//servicePercentPrice = getServicePercentPrice()
//title = getTitle()



//console.log(getRollbackMessage(fullPrice));
//console.log(typeof title);
//console.log(title);
//console.log(typeof screenPrice);
//console.log(typeof adaptive);

//console.log(screens.length);
//console.log(servicePercentPrice);

//console.log("Стоимость верстки экранов " + screenPrice + " Руб " + "и Стоимость разработки сайта " + fullPrice + " Руб");

// 5 урок
//let rollback = 13;
//let allServicePrices
//let fullPrice
//let servicePercentPrice

//let title
//let screens
//let screenPrice
//let adaptive
//let service1
//let service2

//const isNumber = function(num) {
//    return !isNaN(parseFloat(num)) && isFinite(num)
//}

//const asking = function() {
//    title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
//    screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?', 'Простые, Сложные');
    

//    do {
//        screenPrice = prompt('Сколько будет стоить данная работа?');
//    } while (!isNumber(screenPrice))
//    adaptive = confirm("Нужен ли адаптив на сайте?");
//}

//const getAllServicePrices = function () {
//    let sum = 0
//    for ( let i = 0; i < 2; i++) {

//        if ( i === 0) {
//            service1 = prompt("Какой дополнительный тип услуги нужен?")
//        } else if (i === 1) {
//            service2 = prompt("Какой дополнительный тип услуги нужен?")
//        }

//        sum += +prompt("Сколько это будет стоить?")
//    }

//    return sum
//}

//const getFullPrice = function () {
//   return Number(screenPrice) + allServicePrices    
//}

//const getTitle = function() {
//    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
//}

//const getServicePercentPrice = function () {
//    return fullPrice - (fullPrice * (rollback / 100))
//}

//const getRollbackMessage = function (price) {
//    if (price >= 30000) {
//        return "Даём скидку в 10%"
//    } else if (price >= 15000 && price < 30000) {
//        return "Даём скидку в 5%"
//    } else if (price >= 0 && price < 15000) {
//        return "Скидка не предусмотрена"
//    } else {
//        return "Что-то пошло не так"
//    }
//}

//asking()
//allServicePrices = getAllServicePrices()
//fullPrice = getFullPrice()
//servicePercentPrice = getServicePercentPrice()
//title = getTitle()





//console.log(getRollbackMessage(fullPrice));
//console.log(typeof title);
//console.log(title);
//console.log(typeof screenPrice);
//console.log(typeof adaptive);

//console.log(screens.length);
//console.log(servicePercentPrice);

//console.log("Стоимость верстки экранов " + screenPrice + " Руб " + "и Стоимость разработки сайта " + fullPrice + " Руб");

// 7 Урок

// let title
// let screens
// let screenPrice
// let adaptive
// let rollback = 13;
// let allServicePrices
// let fullPrice
// let servicePercentPrice
// let service1
// let service2

// const appData = {
//     title: '',
//     screens: '',
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 13,
//     allServicePrices: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     service1: '',
//     service2: '',

//     start: function() {
//         appData.asking()
//         appData.allServicePrices = appData.getAllServicePrices()
//         appData.fullPrice = appData.getFullPrice()
//         appData.servicePercentPrice = appData.getServicePercentPrice()
//         appData.title = appData.getTitle()

//         appData.logger()
//     },
//     isNumber: function(num) {
//         return !isNaN(parseFloat(num)) && isFinite(num)
//     },
//     asking: function() {
//         appData.title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
//         appData.screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?', 'Простые, Сложные');
    
//         do {
//             appData.screenPrice = prompt('Сколько будет стоить данная работа?');
//         } while (!appData.isNumber(appData.screenPrice))
//         appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//     },
//     getAllServicePrices: function () {
//         let sum = 0
//         for ( let i = 0; i < 2; i++) {
//             let price = 0
    
//             if ( i === 0) {
//                 appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
//             } else if (i === 1) {
//                 appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
//             }
    
//             do {
//                 price = prompt("Сколько это будет стоить?")
//             } while (!appData.isNumber(price))
    
//             sum += +price
    
//         }
    
//         return sum
//     },
//     getFullPrice: function () {
//         return +appData.screenPrice + appData.allServicePrices    
//      },
//      getServicePercentPrice: function () {
//         return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
//     },
//     getTitle: function() {
//         return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
//     },
//     getRollbackMessage: function (price) {
//         if (price >= 30000) {
//             return "Даём скидку в 10%"
//         } else if (price >= 15000 && price < 30000) {
//             return "Даём скидку в 5%"
//         } else if (price >= 0 && price < 15000) {
//             return "Скидка не предусмотрена"
//         } else {
//             return "Что-то пошло не так"
//         }
//     },
//     logger: function () {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     }
// }

// appData.start()

// 8 Урок

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function() {
        appData.asking()
        appData.getAllServicePrices()
        appData.getFullPrice()
        appData.getServicePercentPrice()
        appData.getTitle()

        appData.logger()
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
        // appData.screens = prompt('Какие типы экранов нужно разработать ("Простые, Сложные, Интерактивные")?', 'Простые, Сложные');
    
        // do {
        //     appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        // } while (!appData.isNumber(appData.screenPrice))

        for ( let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?');
            let price = 0

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price))

            appData.screens.push({id: i, name: name, price: price })
        }

      
        for ( let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?")
            let price = 0
    
            do {
                price = prompt("Сколько это будет стоить?")
            } while (!appData.isNumber(price))

            appData.services[name] = +price
    
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getAllServicePrices: function () {
        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices    
     },
     getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function() {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даём скидку в 10%"
        } else if (price >= 15000 && price < 30000) {
            return "Даём скидку в 5%"
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена"
        } else {
            return "Что-то пошло не так"
        }
    },
    logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    }
}

appData.start()
