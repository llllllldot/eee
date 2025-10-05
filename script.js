// Данные пользователей (детских садов)
const usersData = {
    'ds11': { id: 'ds11', name: 'МАДОУ детский сад № 11', password: '123456', address: 'Чкаловский район' },
    'ds16': { id: 'ds16', name: 'МАДОУ детский сад № 16', password: '123456', address: 'Чкаловский район' },
    'ds33': { id: 'ds33', name: 'МАДОУ № 33', password: '123456', address: 'Чкаловский район' },
    'ds223': { id: 'ds223', name: 'МАДОУ № 223', password: '123456', address: 'Чкаловский район' },
    'ds47': { id: 'ds47', name: 'МАДОУ - детский сад № 47', password: '123456', address: 'Чкаловский район' },
    'ds48': { id: 'ds48', name: 'МАДОУ детский сад № 48', password: '123456', address: 'Чкаловский район' },
    'ds66': { id: 'ds66', name: 'МАДОУ № 66', password: '123456', address: 'Чкаловский район' },
    'ds89': { id: 'ds89', name: 'МБДОУ - детский сад № 89', password: '123456', address: 'Чкаловский район' },
    'ds121': { id: 'ds121', name: 'МБДОУ - детский сад №121', password: '123456', address: 'Чкаловский район' },
    'ds127': { id: 'ds127', name: 'МБДОУ - детский сад № 127 "Кораблик"', password: '123456', address: 'Чкаловский район' },
    'ds131': { id: 'ds131', name: 'МАДОУ детский сад № 131', password: '123456', address: 'Чкаловский район' },
    'ds133': { id: 'ds133', name: 'МАДОУ № 133', password: '123456', address: 'Чкаловский район' },
    'ds147': { id: 'ds147', name: 'МАДОУ детский сад № 147', password: '123456', address: 'Чкаловский район' },
    'ds148': { id: 'ds148', name: 'МБДОУ - детский сад № 148', password: '123456', address: 'Чкаловский район' },
    'ds182': { id: 'ds182', name: 'МБДОУ детский сад № 182', password: '123456', address: 'Чкаловский район' },
    'ds247': { id: 'ds247', name: 'МАДОУ № 247', password: '123456', address: 'Чкаловский район' },
    'ds250': { id: 'ds250', name: 'МБДОУ - детский сад № 250', password: '123456', address: 'Чкаловский район' },
    'ds257': { id: 'ds257', name: 'МАДОУ № 257', password: '123456', address: 'Чкаловский район' },
    'ds277': { id: 'ds277', name: 'МБДОУ - детский сад № 277', password: '123456', address: 'Чкаловский район' },
    'ds316': { id: 'ds316', name: 'МБДОУ детский сад №316', password: '123456', address: 'Чкаловский район' },
    'ds321': { id: 'ds321', name: 'МБДОУ - детский сад № 321', password: '123456', address: 'Чкаловский район' },
    'ds324': { id: 'ds324', name: 'МАДОУ № 324', password: '123456', address: 'Чкаловский район' },
    'ds326': { id: 'ds326', name: 'МАДОУ -детский сад № 326', password: '123456', address: 'Чкаловский район' },
    'ds341': { id: 'ds341', name: 'МБДОУ - детский сад № 341', password: '123456', address: 'Чкаловский район' },
    'ds358': { id: 'ds358', name: 'МАДОУ № 358', password: '123456', address: 'Чкаловский район' },
    'ds360': { id: 'ds360', name: 'МБДОУ - детский сад комбинированного вида № 360', password: '123456', address: 'Чкаловский район' },
    'ds362': { id: 'ds362', name: 'МБДОУ - детский сад № 362', password: '123456', address: 'Чкаловский район' },
    'ds385': { id: 'ds385', name: 'МБДОУ детский сад № 385', password: '123456', address: 'Чкаловский район' },
    'ds385skazka': { id: 'ds385skazka', name: 'МБДОУ детский сад № 385 "Сказка"', password: '123456', address: 'Чкаловский район' },
    'ds391': { id: 'ds391', name: 'МБДОУ - детский сад № 391', password: '123456', address: 'Чкаловский район' },
    'ds394': { id: 'ds394', name: 'МАДОУ детский сад № 394', password: '123456', address: 'Чкаловский район' },
    'ds398': { id: 'ds398', name: 'МБДОУ - детский сад № 398', password: '123456', address: 'Чкаловский район' },
    'ds402': { id: 'ds402', name: 'МБДОУ детский сад № 402', password: '123456', address: 'Чкаловский район' },
    'ds405': { id: 'ds405', name: 'МБДОУ детский сад № 405', password: '123456', address: 'Чкаловский район' },
    'ds410': { id: 'ds410', name: 'МАДОУ № 410', password: '123456', address: 'Чкаловский район' },
    'ds424': { id: 'ds424', name: 'МБДОУ - детский сад № 424', password: '123456', address: 'Чкаловский район' },
    'ds426': { id: 'ds426', name: 'МБДОУ - детский сад № 426', password: '123456', address: 'Чкаловский район' },
    'ds429': { id: 'ds429', name: 'МАДОУ - детский сад № 429', password: '123456', address: 'Чкаловский район' },
    'ds437': { id: 'ds437', name: 'МАДОУ № 437', password: '123456', address: 'Чкаловский район' },
    'ds438': { id: 'ds438', name: 'МБДОУ детский сад № 438', password: '123456', address: 'Чкаловский район' },
    'ds443': { id: 'ds443', name: 'МБДОУ - детский сад комбинированного вида № 443', password: '123456', address: 'Чкаловский район' },
    'ds454': { id: 'ds454', name: 'МБДОУ детский сад № 454', password: '123456', address: 'Чкаловский район' },
    'ds463': { id: 'ds463', name: 'МБДОУ - детский сад № 463', password: '123456', address: 'Чкаловский район' },
    'ds464': { id: 'ds464', name: 'МБДОУ - детский сад комбинированного вида № 464', password: '123456', address: 'Чкаловский район' },
    'ds476': { id: 'ds476', name: 'МБДОУ - детский сад № 476', password: '123456', address: 'Чкаловский район' },
    'ds482': { id: 'ds482', name: 'МАДОУ № 482', password: '123456', address: 'Чкаловский район' },
    'ds489': { id: 'ds489', name: 'МБДОУ - детский сад № 489', password: '123456', address: 'Чкаловский район' },
    'ds493': { id: 'ds493', name: 'МБДОУ - детский сад комбинированного вида № 493', password: '123456', address: 'Чкаловский район' },
    'ds497': { id: 'ds497', name: 'МБДОУ - детский сад № 497', password: '123456', address: 'Чкаловский район' },
    'ds508': { id: 'ds508', name: 'МБДОУ детский сад №508', password: '123456', address: 'Чкаловский район' },
    'ds509': { id: 'ds509', name: 'МАДОУ - детский сад № 509', password: '123456', address: 'Чкаловский район' },
    'ds512': { id: 'ds512', name: 'МБДОУ - детский сад № 512', password: '123456', address: 'Чкаловский район' },
    'ds515': { id: 'ds515', name: 'МАДОУ № 515 "Галактика"', password: '123456', address: 'Чкаловский район' },
    'ds519': { id: 'ds519', name: 'МБДОУ - детский сад № 519', password: '123456', address: 'Чкаловский район' },
    'ds526': { id: 'ds526', name: 'МАДОУ детский сад № 526', password: '123456', address: 'Чкаловский район' },
    'ds528': { id: 'ds528', name: 'МБДОУ - детский сад № 528', password: '123456', address: 'Чкаловский район' },
    'ds539': { id: 'ds539', name: 'МАДОУ детский сад комбинированного вида № 539', password: '123456', address: 'Чкаловский район' },
    'ds546': { id: 'ds546', name: 'МБДОУ - детский сад № 546 "Семицветик"', password: '123456', address: 'Чкаловский район' },
    'ds548': { id: 'ds548', name: 'МБДОУ - детский сад № 548', password: '123456', address: 'Чкаловский район' },
    'ds552': { id: 'ds552', name: 'МАДОУ № 552', password: '123456', address: 'Чкаловский район' },
    'ds566': { id: 'ds566', name: 'МБДОУ детский сад № 566', password: '123456', address: 'Чкаловский район' },
    'ds572': { id: 'ds572', name: 'МБДОУ - детский сад комбинированного вида № 572', password: '123456', address: 'Чкаловский район' },
    'ds578': { id: 'ds578', name: 'МБДОУ - детский сад N 578', password: '123456', address: 'Чкаловский район' },
    'ds586': { id: 'ds586', name: 'МАДОУ - детский сад № 586', password: '123456', address: 'Чкаловский район' },
    'ds180': { id: 'ds180', name: 'Дошкольное отделение МАОУ лицей№ 180 "Полифорум"', password: '123456', address: 'Чкаловский район' }
};

// Данные профессий с реальными детскими садами
const professionsData = {
    'Геолог': [
        {
            id: 1,
            kindergartenId: 'ds11',
            name: 'МАДОУ детский сад № 11',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-15', day: 'Вторник', time: '10:00-11:30', age: '5-6 лет', spots: 12 },
                { date: '2024-10-17', day: 'Четверг', time: '14:00-15:30', age: '6-7 лет', spots: 8 }
            ]
        }
    ],
    'Спасатель': [
        {
            id: 2,
            kindergartenId: 'ds16',
            name: 'МАДОУ детский сад № 16',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-16', day: 'Среда', time: '10:00-11:30', age: '5-6 лет', spots: 15 }
            ]
        },
        {
            id: 3,
            kindergartenId: 'ds131',
            name: 'МАДОУ детский сад № 131',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-18', day: 'Пятница', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        },
        {
            id: 4,
            kindergartenId: 'ds133',
            name: 'МАДОУ № 133',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-19', day: 'Суббота', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Артист музыкального жанра': [
        {
            id: 5,
            kindergartenId: 'ds33',
            name: 'МАДОУ № 33',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-22', day: 'Вторник', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Курьер': [
        {
            id: 6,
            kindergartenId: 'ds47',
            name: 'МАДОУ - детский сад № 47',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-23', day: 'Среда', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Оператор БПЛА': [
        {
            id: 7,
            kindergartenId: 'ds48',
            name: 'МАДОУ детский сад № 48',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-24', day: 'Четверг', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Ювелир': [
        {
            id: 8,
            kindergartenId: 'ds89',
            name: 'МБДОУ - детский сад № 89',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-25', day: 'Пятница', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Пекарь': [
        {
            id: 9,
            kindergartenId: 'ds121',
            name: 'МБДОУ - детский сад №121',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-26', day: 'Суббота', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Цветовод': [
        {
            id: 10,
            kindergartenId: 'ds127',
            name: 'МБДОУ - детский сад № 127 "Кораблик"',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-29', day: 'Вторник', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Оператор почтовой связи': [
        {
            id: 11,
            kindergartenId: 'ds147',
            name: 'МАДОУ детский сад № 147',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-10-30', day: 'Среда', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Военный': [
        {
            id: 12,
            kindergartenId: 'ds182',
            name: 'МБДОУ детский сад № 182',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-01', day: 'Пятница', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Стилист по волосам': [
        {
            id: 13,
            kindergartenId: 'ds250',
            name: 'МБДОУ - детский сад № 250',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-02', day: 'Суббота', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Мыловар': [
        {
            id: 14,
            kindergartenId: 'ds257',
            name: 'МАДОУ № 257',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-05', day: 'Вторник', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Гончар': [
        {
            id: 15,
            kindergartenId: 'ds316',
            name: 'МБДОУ детский сад №316',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-06', day: 'Среда', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Врач нутрициолог': [
        {
            id: 16,
            kindergartenId: 'ds341',
            name: 'МБДОУ - детский сад № 341',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-07', day: 'Четверг', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    '3D-дизайнер': [
        {
            id: 17,
            kindergartenId: 'ds358',
            name: 'МАДОУ № 358',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-08', day: 'Пятница', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Инженер-программист': [
        {
            id: 18,
            kindergartenId: 'ds358',
            name: 'МАДОУ № 358',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-09', day: 'Суббота', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Инженер-строитель': [
        {
            id: 19,
            kindergartenId: 'ds358',
            name: 'МАДОУ № 358',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-12', day: 'Вторник', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Кондитер-мороженщик': [
        {
            id: 20,
            kindergartenId: 'ds360',
            name: 'МБДОУ - детский сад комбинированного вида № 360',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-13', day: 'Среда', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Швея': [
        {
            id: 21,
            kindergartenId: 'ds385',
            name: 'МБДОУ детский сад № 385',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-14', day: 'Четверг', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Астроном': [
        {
            id: 22,
            kindergartenId: 'ds385skazka',
            name: 'МБДОУ детский сад № 385 "Сказка"',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-15', day: 'Пятница', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Химик': [
        {
            id: 23,
            kindergartenId: 'ds391',
            name: 'МБДОУ - детский сад № 391',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-16', day: 'Суббота', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Юный пекарь': [
        {
            id: 24,
            kindergartenId: 'ds394',
            name: 'МАДОУ детский сад № 394',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-19', day: 'Вторник', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Мультипликатор': [
        {
            id: 25,
            kindergartenId: 'ds402',
            name: 'МБДОУ детский сад № 402',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-20', day: 'Среда', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Агроинженер': [
        {
            id: 26,
            kindergartenId: 'ds405',
            name: 'МБДОУ детский сад № 405',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-21', day: 'Четверг', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Художник-иллюстратор': [
        {
            id: 27,
            kindergartenId: 'ds424',
            name: 'МБДОУ - детский сад № 424',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-22', day: 'Пятница', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Пряничных дел мастер': [
        {
            id: 28,
            kindergartenId: 'ds437',
            name: 'МАДОУ № 437',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-23', day: 'Суббота', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Инженер': [
        {
            id: 29,
            kindergartenId: 'ds443',
            name: 'МБДОУ - детский сад комбинированного вида № 443',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-26', day: 'Вторник', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Ученый': [
        {
            id: 30,
            kindergartenId: 'ds454',
            name: 'МБДОУ детский сад № 454',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-27', day: 'Среда', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Библиотекарь': [
        {
            id: 31,
            kindergartenId: 'ds476',
            name: 'МБДОУ - детский сад № 476',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-28', day: 'Четверг', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Микробиолог': [
        {
            id: 32,
            kindergartenId: 'ds482',
            name: 'МАДОУ № 482',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-29', day: 'Пятница', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Строитель': [
        {
            id: 33,
            kindergartenId: 'ds489',
            name: 'МБДОУ - детский сад № 489',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-11-30', day: 'Суббота', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Артист': [
        {
            id: 34,
            kindergartenId: 'ds493',
            name: 'МБДОУ - детский сад комбинированного вида № 493',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-03', day: 'Вторник', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Лаборант-микробиолог': [
        {
            id: 35,
            kindergartenId: 'ds497',
            name: 'МБДОУ - детский сад № 497',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-04', day: 'Среда', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Водитель': [
        {
            id: 36,
            kindergartenId: 'ds515',
            name: 'МАДОУ № 515 "Галактика"',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-05', day: 'Четверг', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Инспектор ГИБДД': [
        {
            id: 37,
            kindergartenId: 'ds515',
            name: 'МАДОУ № 515 "Галактика"',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-06', day: 'Пятница', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Инженер-конструктор': [
        {
            id: 38,
            kindergartenId: 'ds526',
            name: 'МАДОУ детский сад № 526',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-07', day: 'Суббота', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ],
    'Продавец-кассир': [
        {
            id: 39,
            kindergartenId: 'ds526',
            name: 'МАДОУ детский сад № 526',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-10', day: 'Вторник', time: '10:30-12:00', age: '5-7 лет', spots: 10 }
            ]
        }
    ],
    'Кондитер': [
        {
            id: 40,
            kindergartenId: 'ds539',
            name: 'МАДОУ детский сад комбинированного вида № 539',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-11', day: 'Среда', time: '09:30-11:00', age: '4-5 лет', spots: 20 }
            ]
        }
    ],
    'Столяр': [
        {
            id: 41,
            kindergartenId: 'ds552',
            name: 'МАДОУ № 552',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-12', day: 'Четверг', time: '15:00-16:30', age: '5-6 лет', spots: 8 }
            ]
        }
    ],
    'Сити-фермер': [
        {
            id: 42,
            kindergartenId: 'ds578',
            name: 'МБДОУ - детский сад N 578',
            address: 'Чкаловский район',
            schedules: [
                { date: '2024-12-13', day: 'Пятница', time: '10:00-11:30', age: '6-7 лет', spots: 12 }
            ]
        }
    ]
};

// ... остальной код без изменений (функции авторизации, отображения профессий, сообщений и т.д.)
// [Здесь должен быть весь остальной JavaScript код из предыдущего примера]

// Данные сообщений
let messagesData = [
    {
        id: 1,
        profession: 'Врач',
        kindergartenId: 'ds45',
        kindergarten: 'Детский сад № 45',
        guestKindergartenId: 'ds23',
        guestKindergarten: 'Детский сад № 23',
        dateTime: 'Понедельник, 2024-01-15 10:00-11:30',
        childrenCount: 5,
        educatorName: 'Иванова Мария Петровна',
        phone: '+7 (999) 123-45-67',
        email: 'ivanova@mail.ru',
        status: 'new',
        createdAt: '2024-01-10 14:30'
    },
    {
        id: 2,
        profession: 'Повар',
        kindergartenId: 'ds23',
        kindergarten: 'Детский сад № 23',
        guestKindergartenId: 'ds45',
        guestKindergarten: 'Детский сад № 45',
        dateTime: 'Четверг, 2024-01-18 10:30-12:00',
        childrenCount: 8,
        educatorName: 'Петрова Анна Сергеевна',
        phone: '+7 (999) 987-65-43',
        email: 'petrova@mail.ru',
        status: 'confirmed',
        createdAt: '2024-01-09 11:20'
    }
];

let currentSelectedProfession = '';
let currentSelectedSchedule = null;

// Основная инициализация
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
});

// Проверка авторизации
function checkAuth() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainInterface();
    } else {
        showAuthForm();
    }
}

function showAuthForm() {
    // Создаем опции для выбора детского сада
    const kindergartenOptions = Object.values(usersData)
        .map(user => `<option value="${user.id}">${user.name}</option>`)
        .join('');
    
    document.body.innerHTML = `
        <div class="auth-container">
            <div class="auth-form">
                <h1>🧭 Компас профессий дошкольника</h1>
                <p class="auth-subtitle">Чкаловский район Екатеринбурга</p>
                
                <div class="form-group">
                    <label>Выберите детский сад:</label>
                    <select id="authKindergarten">
                        <option value="">Выберите детский сад</option>
                        ${kindergartenOptions}
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Пароль:</label>
                    <input type="password" id="authPassword" placeholder="Введите пароль" value="123456">
                </div>
                
                <button class="auth-btn" onclick="login()">Войти</button>
                
                <div class="auth-info">
                    <p><strong>Тестовые данные:</strong></p>
                    <p>Любой детский сад из списка</p>
                    <p>Пароль: 123456</p>
                </div>
            </div>
        </div>
    `;
}
// Авторизация
function login() {
    const kindergartenId = document.getElementById('authKindergarten').value;
    const password = document.getElementById('authPassword').value;
    
    if (!kindergartenId) {
        alert('Выберите детский сад');
        return;
    }
    
    const user = usersData[kindergartenId];
    
    if (user && user.password === password) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        showMainInterface();
    } else {
        alert('Неверный пароль');
    }
}

// Выход из системы
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showAuthForm();
}

// Показать основной интерфейс
function showMainInterface() {
    document.body.innerHTML = `
        <!-- Шапка -->
        <header class="header">
            <div class="container">
                <div class="logo">
                    <h1>🧭 Компас профессий дошкольника</h1>
                    <span>Чкаловский район Екатеринбурга</span>
                </div>
                <nav class="nav">
                    <a href="#professions" class="nav-link">Профессии</a>
                    <a href="#messages" class="nav-link">Сообщения</a>
                    <div class="user-info">
                        <span>${currentUser.name}</span>
                        <button class="logout-btn" onclick="logout()">Выйти</button>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Главный баннер -->
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1>Добро пожаловать, ${currentUser.name}!</h1>
                    <p>Организация профессиональных проб для дошкольников детских садов Чкаловского района</p>
                    <button class="cta-button" onclick="scrollToProfessions()">Выбрать профессию</button>
                </div>
                <div class="hero-image">
                    <div class="floating-icons">
                        <span class="icon">👨‍⚕️</span>
                        <span class="icon">👨‍🍳</span>
                        <span class="icon">👨‍🔬</span>
                        <span class="icon">👨‍🎨</span>
                        <span class="icon">👨‍🚀</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Блок статистики -->
        <section class="stats">
            <div class="container">
                <div class="stat-item">
                    <div class="stat-number" id="professionsCount">0</div>
                    <div class="stat-label">Профессий</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" id="kindergartensCount">0</div>
                    <div class="stat-label">Детских садов</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" id="eventsCount">0</div>
                    <div class="stat-label">Мероприятий в месяц</div>
                </div>
            </div>
        </section>

        <!-- Основной раздел с профессиями -->
        <section id="professions" class="professions-section">
            <div class="container">
                <h2>Выберите профессию</h2>
                
                <div class="professions-layout">
                    <!-- Сайдбар с профессиями -->
                    <div class="professions-sidebar">
                        <div class="search-box">
                            <input type="text" id="professionSearch" placeholder="Поиск профессии..." onkeyup="filterProfessions()">
                        </div>
                        <div class="professions-list" id="professionsList">
                            <!-- Список профессий генерируется JavaScript -->
                        </div>
                    </div>

                    <!-- Основной контент -->
                    <div class="professions-content">
                        <div class="selected-profession" id="selectedProfession">
                            <div class="profession-header">
                                <h3>Выберите профессию из списка</h3>
                                <p>Посмотрите, какие детские сады проводят мастер-классы</p>
                            </div>
                        </div>

                        <div class="kindergartens-list" id="kindergartensList">
                            <!-- Список детских садов генерируется динамически -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Раздел сообщений -->
        <section id="messages" class="messages-section">
            <div class="container">
                <h2>📨 Сообщения и записи</h2>
                <p class="section-subtitle">Заявки на ваши мастер-классы</p>
                
                <div class="messages-filter">
                    <select id="messagesProfessionFilter" onchange="filterMessages()">
                        <option value="">Все профессии</option>
                    </select>
                    <select id="messagesStatusFilter" onchange="filterMessages()">
                        <option value="">Все статусы</option>
                        <option value="new">Новые</option>
                        <option value="confirmed">Подтвержденные</option>
                        <option value="completed">Завершенные</option>
                        <option value="rejected">Отклоненные</option>
                    </select>
                </div>
                
                <div class="messages-list" id="messagesList">
                    <!-- Сообщения будут загружены через JavaScript -->
                </div>
            </div>
        </section>

        <!-- Модальное окно записи -->
        <div class="modal" id="registrationModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎯 Запись на профпробу</h3>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <form id="registrationForm" onsubmit="submitForm(event)">
                        <!-- Информация о мероприятии -->
                        <div class="form-section">
                            <h4>📋 Информация о мероприятии</h4>
                            <div class="form-group">
                                <label>Профессия:</label>
                                <input type="text" id="modalProfession" readonly class="readonly-input">
                            </div>
                            <div class="form-group">
                                <label>Детский сад:</label>
                                <input type="text" id="modalKindergarten" readonly class="readonly-input">
                            </div>
                            <div class="form-group">
                                <label>Дата и время:</label>
                                <input type="text" id="modalDateTime" readonly class="readonly-input">
                            </div>
                        </div>

                        <!-- Данные для записи -->
                        <div class="form-section">
                            <h4>👥 Данные для записи</h4>
                            <div class="form-group">
                                <label>Ваш детский сад:</label>
                                <input type="text" value="${currentUser.name}" readonly class="readonly-input">
                            </div>
                            
                            <div class="form-group">
                                <label for="childrenCount">Количество детей *</label>
                                <input type="number" id="childrenCount" min="1" max="25" required placeholder="Введите количество детей">
                            </div>

                            <div class="form-group">
                                <label for="educatorName">ФИО воспитателя *</label>
                                <input type="text" id="educatorName" required placeholder="Иванова Мария Петровна">
                            </div>

                            <div class="form-group">
                                <label for="phone">Контактный телефон *</label>
                                <input type="tel" id="phone" required placeholder="+7 (999) 123-45-67">
                            </div>

                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="vash@email.ru">
                            </div>
                        </div>

                        <div class="form-actions">
                            <button type="button" class="cancel-btn" onclick="closeModal()">Отмена</button>
                            <button type="submit" class="submit-btn">
                                <span class="btn-icon">📨</span>
                                Отправить заявку
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Уведомление -->
        <div id="notification" class="notification"></div>
    `;

    // Инициализация основных компонентов
    initializeProfessionsList();
    updateStatistics();
    initializeMessagesSection();
}

// Инициализация списка профессий
function initializeProfessionsList() {
    const professionsList = document.getElementById('professionsList');
    const professions = Object.keys(professionsData);
    
    // Фильтруем профессии, чтобы показывать только чужие мастер-классы
    const availableProfessions = professions.filter(profession => {
        return professionsData[profession].some(kg => kg.kindergartenId !== currentUser.id);
    });
    
    professionsList.innerHTML = availableProfessions.map(profession => `
        <button class="profession-item" onclick="selectProfession('${profession}')">
            ${getProfessionEmoji(profession)} ${profession}
        </button>
    `).join('');
    
    // Выбираем первую профессию по умолчанию
    if (availableProfessions.length > 0) {
        selectProfession(availableProfessions[0]);
    }
}

// Получение эмодзи для профессии
function getProfessionEmoji(profession) {
    const emojiMap = {
        'Врач': '👨‍⚕️',
        'Повар': '👨‍🍳',
        'Строитель': '👷‍♂️',
        'Художник': '👨‍🎨',
        'Ученый': '👨‍🔬'
    };
    return emojiMap[profession] || '👨‍💼';
}

// Выбор профессии
function selectProfession(profession) {
    currentSelectedProfession = profession;
    
    // Обновляем активный элемент в списке
    document.querySelectorAll('.profession-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Обновляем заголовок
    const selectedProfessionDiv = document.getElementById('selectedProfession');
    selectedProfessionDiv.innerHTML = `
        <div class="profession-header">
            <h3>${getProfessionEmoji(profession)} ${profession}</h3>
            <p>Детские сады, проводящие мастер-классы по профессии "${profession}"</p>
        </div>
    `;
    
    // Показываем детские сады
    displayKindergartens(profession);
}

// Отображение детских садов для выбранной профессии
function displayKindergartens(profession) {
    const kindergartensList = document.getElementById('kindergartensList');
    const kindergartens = professionsData[profession] || [];
    
    // Показываем только чужие детские сады
    const availableKindergartens = kindergartens.filter(kg => kg.kindergartenId !== currentUser.id);
    
    if (availableKindergartens.length === 0) {
        kindergartensList.innerHTML = `
            <div class="no-data">
                <p>Пока нет доступных мастер-классов по этой профессии</p>
            </div>
        `;
        return;
    }
    
    kindergartensList.innerHTML = availableKindergartens.map(kindergarten => `
        <div class="kindergarten-card">
            <div class="kindergarten-header">
                <div class="kindergarten-name">${kindergarten.name}</div>
                <div class="kindergarten-badge">Другой сад</div>
            </div>
            <div class="kindergarten-address">📍 ${kindergarten.address}</div>
            
            ${kindergarten.schedules.map(schedule => `
                <div class="schedule-item">
                    <div class="schedule-time">
                        📅 ${schedule.day}, ${schedule.date} | 🕒 ${schedule.time}
                    </div>
                    <div class="schedule-details">
                        👶 Возраст: ${schedule.age} | ✅ Свободных мест: ${schedule.spots}
                    </div>
                    <button class="register-btn" onclick="openRegistrationModal('${profession}', '${kindergarten.name}', '${kindergarten.kindergartenId}', '${schedule.day}, ${schedule.date} ${schedule.time}')">
                        Записаться на пробу
                    </button>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// Фильтрация профессий
function filterProfessions() {
    const searchTerm = document.getElementById('professionSearch').value.toLowerCase();
    const professionItems = document.querySelectorAll('.profession-item');
    
    professionItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Открытие модального окна регистрации
function openRegistrationModal(profession, kindergarten, kindergartenId, dateTime) {
    currentSelectedSchedule = { profession, kindergarten, kindergartenId, dateTime };
    
    document.getElementById('modalProfession').value = profession;
    document.getElementById('modalKindergarten').value = kindergarten;
    document.getElementById('modalDateTime').value = dateTime;
    
    document.getElementById('registrationModal').style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('registrationModal').style.display = 'none';
    document.getElementById('registrationForm').reset();
}

// Отправка формы
function submitForm(event) {
    event.preventDefault();
    
    const formData = {
        id: Date.now(),
        profession: document.getElementById('modalProfession').value,
        kindergartenId: currentSelectedSchedule.kindergartenId,
        kindergarten: document.getElementById('modalKindergarten').value,
        guestKindergartenId: currentUser.id,
        guestKindergarten: currentUser.name,
        dateTime: document.getElementById('modalDateTime').value,
        childrenCount: document.getElementById('childrenCount').value,
        educatorName: document.getElementById('educatorName').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        status: 'new',
        createdAt: new Date().toLocaleString('ru-RU')
    };
    
    // Сохраняем заявку
    messagesData.unshift(formData);
    
    // Обновляем раздел сообщений
    initializeMessagesSection();
    
    console.log('Новая заявка:', formData);
    
    // Показываем уведомление
    showNotification('Заявка успешно отправлена! С вами свяжутся для подтверждения.', 'success');
    
    // Закрываем модальное окно
    closeModal();
}

// Показ уведомления
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type === 'error' ? 'error' : ''}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Обновление статистики
function updateStatistics() {
    const professionsCount = Object.keys(professionsData).length;
    const kindergartensCount = new Set(
        Object.values(professionsData).flat().map(kg => kg.kindergartenId)
    ).size;
    const eventsCount = Object.values(professionsData).flat().reduce(
        (total, kg) => total + kg.schedules.length, 0
    );
    
    document.getElementById('professionsCount').textContent = professionsCount;
    document.getElementById('kindergartensCount').textContent = kindergartensCount;
    document.getElementById('eventsCount').textContent = eventsCount;
}

// Прокрутка к разделу профессий
function scrollToProfessions() {
    document.getElementById('professions').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        closeModal();
    }
}

// РАЗДЕЛ СООБЩЕНИЙ

// Инициализация раздела сообщений
function initializeMessagesSection() {
    populateMessagesFilters();
    displayMessages();
}

// Заполнение фильтров в сообщениях
function populateMessagesFilters() {
    const professionFilter = document.getElementById('messagesProfessionFilter');
    const professions = [...new Set(messagesData
        .filter(msg => msg.kindergartenId === currentUser.id)
        .map(msg => msg.profession)
    )];
    
    professionFilter.innerHTML = '<option value="">Все профессии</option>' +
        professions.map(prof => `<option value="${prof}">${prof}</option>`).join('');
}

// Отображение сообщений
function displayMessages() {
    const messagesList = document.getElementById('messagesList');
    const professionFilter = document.getElementById('messagesProfessionFilter').value;
    const statusFilter = document.getElementById('messagesStatusFilter').value;
    
    // Показываем только заявки на наши мастер-классы
    let filteredMessages = messagesData.filter(msg => msg.kindergartenId === currentUser.id);
    
    // Фильтрация по профессии
    if (professionFilter) {
        filteredMessages = filteredMessages.filter(msg => msg.profession === professionFilter);
    }
    
    // Фильтрация по статусу
    if (statusFilter) {
        filteredMessages = filteredMessages.filter(msg => msg.status === statusFilter);
    }
    
    if (filteredMessages.length === 0) {
        messagesList.innerHTML = `
            <div class="no-messages">
                <p>📭 Нет заявок на ваши мастер-классы</p>
                <p class="no-messages-hint">Заявки появятся здесь, когда другие сады запишутся на ваши мероприятия</p>
            </div>
        `;
        return;
    }
    
    messagesList.innerHTML = filteredMessages.map(message => `
        <div class="message-card ${message.status}">
            <div class="message-header">
                <div class="message-profession">
                    ${getProfessionEmoji(message.profession)} ${message.profession}
                </div>
                <div class="message-status ${message.status}">
                    ${getStatusText(message.status)}
                </div>
            </div>
            
            <div class="message-details">
                <div class="message-row">
                    <span class="label">📅 Дата и время:</span>
                    <span class="value">${message.dateTime}</span>
                </div>
                <div class="message-row">
                    <span class="label">🏫 Записался сад:</span>
                    <span class="value">${message.guestKindergarten}</span>
                </div>
                <div class="message-row">
                    <span class="label">👶 Количество детей:</span>
                    <span class="value">${message.childrenCount}</span>
                </div>
                <div class="message-row">
                    <span class="label">👩‍🏫 Воспитатель:</span>
                    <span class="value">${message.educatorName}</span>
                </div>
                <div class="message-row">
                    <span class="label">📞 Телефон:</span>
                    <span class="value">${message.phone}</span>
                </div>
                ${message.email ? `
                <div class="message-row">
                    <span class="label">📧 Email:</span>
                    <span class="value">${message.email}</span>
                </div>
                ` : ''}
                <div class="message-row">
                    <span class="label">🕒 Дата заявки:</span>
                    <span class="value">${message.createdAt}</span>
                </div>
            </div>
            
            <div class="message-actions">
                ${message.status === 'new' ? `
                <button class="action-btn confirm-btn" onclick="updateMessageStatus(${message.id}, 'confirmed')">
                    ✅ Подтвердить
                </button>
                <button class="action-btn reject-btn" onclick="updateMessageStatus(${message.id}, 'rejected')">
                    ❌ Отклонить
                </button>
                ` : ''}
                
                ${message.status === 'confirmed' ? `
                <button class="action-btn complete-btn" onclick="updateMessageStatus(${message.id}, 'completed')">
                    🏁 Завершить
                </button>
                ` : ''}
                
                <button class="action-btn delete-btn" onclick="deleteMessage(${message.id})">
                    🗑️ Удалить
                </button>
            </div>
        </div>
    `).join('');
}

// Получение текста статуса
function getStatusText(status) {
    const statusMap = {
        'new': 'Новая',
        'confirmed': 'Подтверждена',
        'completed': 'Завершена',
        'rejected': 'Отклонена'
    };
    return statusMap[status] || status;
}

// Обновление статуса сообщения
function updateMessageStatus(messageId, newStatus) {
    const messageIndex = messagesData.findIndex(msg => msg.id === messageId);
    
    if (messageIndex !== -1) {
        messagesData[messageIndex].status = newStatus;
        displayMessages();
        showNotification(`Статус заявки обновлен на "${getStatusText(newStatus)}"`, 'success');
    }
}

// Удаление сообщения
function deleteMessage(messageId) {
    if (confirm('Вы уверены, что хотите удалить эту заявку?')) {
        messagesData = messagesData.filter(msg => msg.id !== messageId);
        displayMessages();
        showNotification('Заявка удалена', 'success');
    }
}

// Фильтрация сообщений
function filterMessages() {
    displayMessages();
}
