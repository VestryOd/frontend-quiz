<template>
  <section :id="indexNumber">
    <div class="theory-item theory-item__wrapper">
      <div class="theory-item__title-wrapper">
        <h3 class="theory-item__title">
          {{ item.title }}
        </h3>
      </div>
      <div class="theory-item__content" v-for="elem in item.data" :key="elem.id">
        <Description :content="elem.content" v-if="elem.contentType === 'description'" />
        <div class="content-code__wrapper" v-if="elem.contentType === 'code'">
          <Code :content="elem.content" />
        </div>
        <div class="content-picture__wrapper" v-if="elem.contentType === 'img'">
          <Picture :content="elem.content" />
        </div>
        <div class="content-nav__wrapper" v-if="elem.contentType === 'nav'">
          <Nav :items="elem.content" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Code from "./Content/Code";
  import Description from "./Content/Description";
  import Picture from "./Content/Picture";
  import Nav from "./Content/Nav";

  export default {
    name: "TheoryItem",
    props: {
      item: {
        type: Object,
        default: () => ({
          "id": "ad13c892-6f39-4de0-bdff-45c5939c6978",
          "title": "1. Как создать объект?",
          "data": [
            {
              "id": "text-0-1",
              "contentType": "description",
              "content": "Существует несколько способов это сделать. Вот некоторые из них:"
            },
            {
              "id": "text-0-2",
              "contentType": "description",
              "content": "Литерал объекта:"
            },
            {
              "id": "code-0-1",
              "contentType": "code",
              "content": "const object = {}"
            },
            {
              "id": "text-0-3",
              "contentType": "description",
              "content": "Конструктор объекта (использовать не рекомендуется):"
            },
            {
              "id": "code-0-2",
              "contentType": "code",
              "content": "const object = new Object()"
            },
            {
              "id": "text-0-4",
              "contentType": "description",
              "content": "Метод Object.create()"
            },
            {
              "id": "text-0-5",
              "contentType": "description",
              "content": "При использовании данного метода ему в качестве аргумента передается объект, который станет прототипом нового объекта."
            },
            {
              "id": "code-0-3",
              "contentType": "code",
              "content": "// создаем объект без прототипа - пустой объект\nconst object = Object.create(null)"
            },
            {
              "id": "text-0-6",
              "contentType": "description",
              "content": "Функция-конструктор"
            },
            {
              "id": "text-0-7",
              "contentType": "description",
              "content": "Создаем функцию-конструктор и применяем оператор \"new\" для создания экземпляра этой функции - объекта:"
            },
            {
              "id": "code-0-4",
              "contentType": "code",
              "content": "function Person (name) {\n    const object = {}\n    object.name = name\n    object.age = 30\n    return object\n}\nconst user = new Person('Ванька')"
            },
            {
              "id": "text-0-8",
              "contentType": "description",
              "content": "Класс:"
            },
            {
              "id": "code-0-5",
              "contentType": "code",
              "content": "class Person {\n    constructor(name) {\n        this.name = name\n    }\n}\n\nconst user = new Person('Ванька')"
            },
            {
              "id": "nav-0-1",
              "contentType": "nav",
              "content": [
                {
                  "id": "subnav-1-0",
                  "name": "jsr",
                  "src": "https://learn.javascript.ru/object",
                  "title": ""
                },
                {
                  "id": "subnav-1-1",
                  "name": "mdn",
                  "src": "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object",
                  "title": ""
                }
              ]
            }
          ],
          "tags": [

          ]
        })
      },
      indexNumber: {
        type: Number,
        default: 0
      },
    },
    components: {
      Code,
      Description,
      Picture,
      Nav,
    }
  }
</script>
