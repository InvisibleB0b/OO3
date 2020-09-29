new Vue({

    el: "#app",
    data: {
        input: '',
        selected: '',
        result: ''
    },
    methods: {
        justDoIt() {
            switch (this.selected) {
                case 'To Upper':
                    this.result = this.input.toUpperCase();
                    break;
                case 'To Lower':
                    this.result = this.input.toLowerCase(); 7
                    break:
            }
            this.input = '';
        }

    },
    computed: {
        hasContent: function () {
            return this.result.length > 0;
        }
    }
})
