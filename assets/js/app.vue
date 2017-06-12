<template>
    <div>
        <div v-for="girl in girls" :style="{backgroundColor: getStyle(girl)}">
            <span v-text="girl.name"></span>
            <span v-text="girl.age"></span>
            <span v-text="girl.blood"></span>
            <span v-text="girl.birthday"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['girls'],

    methods: {
        getStyle(girl) {
            switch (girl.blood) {
                case 'A':
                    return '#fdf';
                case 'B':
                    return '#dff';
                case 'AB':
                    return '#ffd';
                case 'O':
                    return '#dfd';
            }
        },
    },
}
</script>
