<template>
  <div class="content-table">
    <table>
      <thead>
      <tr>
        <th v-for="(th, thIndex) in titleData" :key="thIndex">{{ th }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(tr, trIndex) in rowsData" :key="trIndex">
        <td v-for="(td, tdIndex) in tr" :key="tdIndex">{{ td }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "ContentTable",
    props: {
      content: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      titleData() {
        return this.content[0];
      },
      rowsData() {
        return this.content.slice(1);
      }
    }
  }
</script>
