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
            if (this.userInput > 0 && this.userInput <= 100) {
                const item = this.userInput;
                const apiLink = 'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=' + item;
                axios.get(apiLink)
                .then((result) => {
                    console.log(result.data.response);
                    this.numbersList = result.data.response;
                })
            } else {
                alert('Devi inserire un numero tra 1 e 100!!!');
            }
            
        }
    },
}).mount('#app');
