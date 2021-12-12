Vue.component('search', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form class="search" action="#" @submit.prevent="$parent.$refs. products.filter(userSearch)">
                    <button class="search__btn" type="submit"><img class="search__img" src="img/search.svg" width="26px"
                    alt="search"></button>
                    <input class="search__input input" v-model="userSearch" type="text" placeholder="Search..." name="search__input" id="search__input"></input>
                </form>`
});