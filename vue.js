var settings = new Vue({
    el: '#settings',
    data: {
        settings: 'Einstellungen'
    },
})

var weather = new Vue({
    el: '#weather',
    data: {
        weather: 'Wetter'
    }
})

var dailyqoute = new Vue({
    el: '#dailyqoute',
    data: {
        qoute: 'Zitat'
    }
})

var time = new Vue({
    el: '#time',
    data: {
        time: 'Uhrzeit'
    }
})

var todo = new Vue({
    el: '#todo',
    data:{
        // todos: [
        //     {text: 'test1'},
        //     {text: 'test2'},
        //     {text: 'test3'},
        // ]
        todo: "ToDo",
    }
})