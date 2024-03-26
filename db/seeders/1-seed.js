"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Decks",
      [
        {
          name: "Еда",
        },
        {
          name: "Путешествия",
        },
        {
          name: "Природа",
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
          enWord: "Beet",
          ruWord: "Свекла",
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
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
