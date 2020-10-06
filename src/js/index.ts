// new Vue({

//     el: "#app",
//     data: {
//         input: '',
//         selected: '',
//         result: ''
//     },
//     methods: {
//         justDoIt() {
//             switch (this.selected) {
//                 case 'To Upper':
//                     this.result = this.input.toUpperCase();
//                     break;
//                 case 'To Lower':
//                     this.result = this.input.toLowerCase(); 7
//                     break;
//             }
//             this.input = '';
//         }

//     },
//     computed: {
//         hasContent: function () {
//             return this.result.length > 0;
//         }
//     }
// });

let select: HTMLSelectElement = (document.getElementById("selection")) as HTMLSelectElement;
let input: HTMLInputElement = (document.getElementById("text")) as HTMLInputElement;
let word: string = "";
let show: HTMLParagraphElement = (document.getElementById("para")) as HTMLParagraphElement

document.getElementById("button").addEventListener("click", (e) => {
    e.preventDefault;
    let selected: string = select.options[select.selectedIndex].value;
    word = input.value;

    switch (selected) {
        case 'To Upper':
            show.innerHTML = word.toUpperCase();
            break;
        case 'To Lower':
            show.innerHTML = word.toLowerCase();
            break;
    }
    input.value = "";
});