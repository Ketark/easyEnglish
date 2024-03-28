"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Decks",
      [
        {
          name: "Еда",
          cover: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Путешествия",
          cover: "https://plus.unsplash.com/premium_photo-1684407616508-b9e82c8bc8a0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Природа",
          cover: "https://images.unsplash.com/photo-1533523611631-15e4ef69be08?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          enWord: "Apple",
          ruWord: "Яблоко",
          deck_id: 1,
        },
        {
          enWord: "Banana",
          ruWord: "Банан",
          deck_id: 1,
        },
        {
          enWord: "Orange",
          ruWord: "Апельсин",
          deck_id: 1,
        },
        {
          enWord: "Chicken",
          ruWord: "Курица",
          deck_id: 1,
        },
        {
          enWord: "Beef",
          ruWord: "Говядина",
          deck_id: 1,
        },
        {
          enWord: "Soup",
          ruWord: "Суп",
          deck_id: 1,
        },
        {
          enWord: "Cookie",
          ruWord: "Печенье",
          deck_id: 1,
        },
        {
          enWord: "Salad",
          ruWord: "Салат",
          deck_id: 1,
        },
        {
          enWord: "Potato",
          ruWord: "Картошка",
          deck_id: 1,
        },
        {
          enWord: "Bread",
          ruWord: "Хлеб",
          deck_id: 1,
        },
        {
          enWord: "Milk",
          ruWord: "Молоко",
          deck_id: 1,
        },
        {
          enWord: "Cheese",
          ruWord: "Сыр",
          deck_id: 1,
        },
        {
          enWord: "Pork",
          ruWord: "Свинина",
          deck_id: 1,
        },
        {
          enWord: "Tomato",
          ruWord: "Помидор",
          deck_id: 1,
        },
        {
          enWord: "Cucumber",
          ruWord: "Огурец",
          deck_id: 1,
        },
        {
          enWord: "Onion",
          ruWord: "Лук",
          deck_id: 1,
        },
        {
          enWord: "Buckwheat",
          ruWord: "Гречка",
          deck_id: 1,
        },
        {
          enWord: "Rice",
          ruWord: "Рис",
          deck_id: 1,
        },
        {
          enWord: "Cake",
          ruWord: "Торт",
          deck_id: 1,
        },
        {
          enWord: "Pie",
          ruWord: "Пирог",
          deck_id: 1,
        },
        {
          enWord: "Caviar",
          ruWord: "Икра",
          deck_id: 1,
        },
        {
          enWord: "Butter",
          ruWord: "Масло",
          deck_id: 1,
        },
        {
          enWord: "Sorrel",
          ruWord: "Щавель",
          deck_id: 1,
        },
        {
          enWord: "Vegetable",
          ruWord: "Овощ",
          deck_id: 1,
        },
        {
          enWord: "Fish",
          ruWord: "Рыба",
          deck_id: 1,
        },
        {
          enWord: "Pepper",
          ruWord: "Перец",
          deck_id: 1,
        },
        {
          enWord: "Salt",
          ruWord: "Соль",
          deck_id: 1,
        },
        {
          enWord: "Passenger",
          ruWord: "Пассажир",
          deck_id: 2,
        },
        {
          enWord: "Journey",
          ruWord: "Путешествие",
          deck_id: 2,
        },
        {
          enWord: "Excursion",
          ruWord: "Экскурсия",
          deck_id: 2,
        },
        {
          enWord: "Hotel",
          ruWord: "Отель",
          deck_id: 2,
        },
        {
          enWord: "Route",
          ruWord: "Маршрут",
          deck_id: 2,
        },
        {
          enWord: "Transfer",
          ruWord: "Трансфер",
          deck_id: 2,
        },
        {
          enWord: "Tourist",
          ruWord: "Турист",
          deck_id: 2,
        },
        {
          enWord: "Destination",
          ruWord: "Пункт назначения",
          deck_id: 2,
        },
        {
          enWord: "Baggage",
          ruWord: "Багаж",
          deck_id: 2,
        },
        {
          enWord: "Itinerary",
          ruWord: "План маршрута",
          deck_id: 2,
        },
        {
          enWord: "Check-in",
          ruWord: "Стойка регистрации",
          deck_id: 2,
        },
        {
          enWord: "To take off",
          ruWord: "Взлетать",
          deck_id: 2,
        },
        {
          enWord: "To land",
          ruWord: "Садиться",
          deck_id: 2,
        },
        {
          enWord: "Charter flight",
          ruWord: "Чартерный рейс",
          deck_id: 2,
        },
        {
          enWord: "Scheduled flight",
          ruWord: "Регулярный рейс",
          deck_id: 2,
        },
        {
          enWord: "Information desk",
          ruWord: "Справочное бюро",
          deck_id: 2,
        },
        {
          enWord: "Porter",
          ruWord: "Носильщик",
          deck_id: 2,
        },
        {
          enWord: "Travel agency",
          ruWord: "Туристическое агенство",
          deck_id: 2,
        },
        {
          enWord: "Arrival",
          ruWord: "Прибытие",
          deck_id: 2,
        },
        {
          enWord: "Gate",
          ruWord: "Выход к самолёту",
          deck_id: 2,
        },
        {
          enWord: "Seat",
          ruWord: "Место",
          deck_id: 2,
        },
        {
          enWord: "Pilot",
          ruWord: "Пилот",
          deck_id: 2,
        },
        {
          enWord: "Passport control",
          ruWord: "Паспортный контроль",
          deck_id: 2,
        },
        {
          enWord: "Food tray",
          ruWord: "Поднос",
          deck_id: 2,
        },
        {
          enWord: "Platform",
          ruWord: "Платформа",
          deck_id: 2,
        },
        {
          enWord: "Carriage",
          ruWord: "Вагон",
          deck_id: 2,
        },
        {
          enWord: "To declare",
          ruWord: "Декларировать",
          deck_id: 2,
        },
        {
          enWord: "Mountain",
          ruWord: "Гора",
          deck_id: 3,
        },
        {
          enWord: "Forest",
          ruWord: "Лес",
          deck_id: 3,
        },
        {
          enWord: "Ocean",
          ruWord: "Океан",
          deck_id: 3,
        },
        {
          enWord: "River",
          ruWord: "Река",
          deck_id: 3,
        },
        {
          enWord: "Grass",
          ruWord: "Трава",
          deck_id: 3,
        },
        {
          enWord: "Weather",
          ruWord: "Погода",
          deck_id: 3,
        },
        {
          enWord: "Sky",
          ruWord: "Небо",
          deck_id: 3,
        },
        {
          enWord: "Nature",
          ruWord: "Природа",
          deck_id: 3,
        },
        {
          enWord: "Tree",
          ruWord: "Дерево",
          deck_id: 3,
        },
        {
          enWord: "Coast",
          ruWord: "Берег",
          deck_id: 3,
        },
        {
          enWord: "Sun",
          ruWord: "Солнце",
          deck_id: 3,
        },
        {
          enWord: "Moon",
          ruWord: "Луна",
          deck_id: 3,
        },
        {
          enWord: "Star",
          ruWord: "Звезда",
          deck_id: 3,
        },
        {
          enWord: "Beach",
          ruWord: "Пляж",
          deck_id: 3,
        },
        {
          enWord: "Plant",
          ruWord: "Растение",
          deck_id: 3,
        },
        {
          enWord: "Air",
          ruWord: "Воздух",
          deck_id: 3,
        },
        {
          enWord: "Hill",
          ruWord: "Холм",
          deck_id: 3,
        },
        {
          enWord: "Field",
          ruWord: "Поле",
          deck_id: 3,
        },
        {
          enWord: "Flower",
          ruWord: "Цветок",
          deck_id: 3,
        },
        {
          enWord: "Lake",
          ruWord: "Озеро",
          deck_id: 3,
        },
        {
          enWord: "Sea",
          ruWord: "Море",
          deck_id: 3,
        },
        {
          enWord: "Ocean",
          ruWord: "Океан",
          deck_id: 3,
        },
        {
          enWord: "Garden",
          ruWord: "Сад",
          deck_id: 3,
        },
        {
          enWord: "Stone",
          ruWord: "Камень",
          deck_id: 3,
        },
        {
          enWord: "Seaside",
          ruWord: "Побережье",
          deck_id: 3,
        },
        {
          enWord: "Sunset",
          ruWord: "Закат",
          deck_id: 3,
        },
        {
          enWord: "Sunrise",
          ruWord: "Рассвет",
          deck_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
