/** Chiedere all'utente quanti elementi vuole includere nell'array.
Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. */

const { createApp } = Vue;

createApp({
    data() {
        return {
            numbersList : [],
            userInput: '', 
        }
    },
    methods : {
        generateArrayRandomNumbers() {
            const item = this.userInput;
            axios.post('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=n', item)
            .then((result) => {
                console.log(result.data.response);
                this.numbersList = result.data.response;
            })
        }
    },
}).mount('#app');
