Vue.component('error', {
    data() {
        return {
            text: ''
        }
    },
    computed: {
        isVisible() {
            return this.text !== ''
        }
    },
    template: `<div class="error-server" v-if="isVisible">
                    <p>{{text}}
                    <button class="close-btn" @click="text=''">&times;</button>
                    </p>
                </div>`
});