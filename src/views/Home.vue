<template>
  <div class="home-view">
    <h1>This is a Home Page</h1>
    <hr>
    <router-link :to="{ name: 'topic-page', params: { id: '7' } }">Go to the topic</router-link>
    <router-link :to="{ name: 'task-page', params: { id: '3' } }">Go to the task</router-link>
    <TheoryItem />
    <TheoryItem :index-number="1" :item="second" />
  </div>
</template>

<script>
  import TheoryItem from "../components/TheoryItem";

  export default {
    name: "Home",
    components: {
      TheoryItem,
    },
    data() {
      return {
        second: {
          "id": "91b01091-9266-4759-b257-c39b7bcceec5",
          "title": "2. Что такое прототипы?",
          "data": [
            {
              "id": "text-1-1",
              "contentType": "description",
              "content": "Прототипы используется для создания новых объектов на основе существующих. Такая техника называется прототипным наследованием. Прототип экземпляра объекта доступен через Object.getProtocontentTypeOf(object) или свойство __proto__ (внутреннее скрытое свойство [[ProtocontentType]])."
            },
            {
              "id": "img-1-1",
              "contentType": "img",
              "content": "data:image/png;base64,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"
            },
            {
              "id": "nav-1-1",
              "contentType": "nav",
              "content": [
                {
                  "id": "subnav-1-0",
                  "name": "jsr",
                  "src": "https://learn.javascript.ru/protocontentType-inheritance",
                  "title": "Prototype"
                },
                {
                  "id": "subnav-1-1",
                  "name": "mdn",
                  "src": "https://developer.mozilla.org/ru/docs/Learn/JavaScript/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/Object_protocontentTypes",
                  "title": ""
                }
              ]
            }
          ],
          "tags": [

          ]
        },
      };
    }
  }
</script>
