class TextAnimation {
    constructor(el, text) {
        this.el = el;
        this.text = text;
        this.len = this.text.length;          

        this.startTimer();
    }

    animate() {
        this.an = document.querySelector(this.el);
        this.an.innerHTML= this.text.slice(0, this.n);
        if(this.n < this.len){
            this.n++;

        }else{
            clearInterval(this.intervalId);
            this.text = null;
        }
    }

    startTimer() {
        this.n = 1;
        this.intervalId = setInterval(this.animate.bind(this), 60);
    }       
}