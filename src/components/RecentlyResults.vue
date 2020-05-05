<template>
  <div>
    <h2>最近の結果</h2>
    <section v-if="errored">
      <p>バックエンドサーバとの通信でエラーが発生しました</p>
    </section>
    <ul>
      <li>
        <label for="from_date">From: </label>
        <input v-model="from" id="from_date" size="10">
      </li>
      <li>
        <label for="to_date">To: </label>
        <input v-model="to" id="to_date" size="10">
      </li>
    </ul>
    <button v-on:click="getNumbersData">再取得</button>
    <v-data-table
        :caption="caption"
        :headers="headers"
        :items="records"
        :items-per-page="5"
        :loading="loading"
        loading-text="データを読込中・・・"
        no-data-text="データがありません"
        locale="ja-jp"
        class="elevation-1"
        fixed-header
        >
    </v-data-table>
  </div>
</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'RecentlyResults',
    props: {
      kind: Number,
    },
    data: () => ({
      errored: false,

      // データ取得期間
      from: new Date().getFullYear() + '-01-01',
      to: new Date().getFullYear() + '-12-31',

      // テーブル用
      caption: '最近の結果',
      loading: true,
      headers: [
        {
          text: '回',
          value: 'event.times',
        },
        {
          text: '抽選日',
          value: 'event.date',
        },
        {
          text: '抽選数字',
          value: 'number',
          sortable: false,
        },
      ],
      records: [],
    }),
    mounted: async function () {
      await this.getNumbersData();
    },
    methods: {
      getNumbersData: async function () {
        const url = 'http://localhost:3000/number?from=' +
          this.from + '&to=' + this.to + '&type=' + this.kind;

        try {
          const response = await axios.get(url);
          this.records = response.data;
        }
        catch (e) {
          console.error(e);
          this.errored = true;
        }
        finally {
          this.loading = false;
        }
      }
    }
  };
</script>

<style scoped>

</style>
