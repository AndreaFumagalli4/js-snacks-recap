/***
Chiedere all'API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all'utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            namesList : [],
            userName : ''
        }
    },
    
    methods : {
        getRandomName() {
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                    .then((response) => { 
                        console.log(response.data.response);
                        this.namesList.push(response.data.response.toLowerCase());
                    })
                    console.log(this.namesList);
            }
        },

        checkName(inputName) {
            if (this.namesList.includes(inputName.toLowerCase())) {
                alert('Benvenuto!');
            } else {
                alert('Il tuo nome non è sulla lista, mi dispiace ma non può entrare');
            }
        }
    },

    created() {
        this.getRandomName();
    }

}).mount('#app');