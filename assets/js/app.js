import Vue from 'vue/dist/vue';
import Girls from './app.vue';

new Vue({
    el: '#app',
    data: {
        girls: [
            {
                name: 'ココア',
                age: 16,
                blood: 'B',
                birthday: '4月10日',
            },
            {
                name: 'チノ',
                age: 14,
                blood: 'AB',
                birthday: '12月4日',
            },
            {
                name: 'リゼ',
                age: 17,
                blood: 'A',
                birthday: '2月14日',
            },
            {
                name: '千夜',
                age: 16,
                blood: 'O',
                birthday: '9月19日',
            },
            {
                name: 'シャロ',
                age: 16,
                blood: 'A',
                birthday: '7月15日',
            },
        ],
    },
    components: {
        girlData: Girls,
    },
});
