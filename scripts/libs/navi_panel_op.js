class panelContorol{
    constructor(el) {
     this.DOM = {};
     this.DOM.navi_btn = document.getElementById(el);
     this.DOM.btn_img = navi_btn.children[0];
     this.DOM.navi_panel = document.getElementById('navi_panel');
     this.DOM.main = document.getElementById('main');
     this.DOM.body = document.getElementById('body');
     this.show();
    }

    _toggle() {
        this.DOM.navi_panel.classList.toggle('show');
        this.DOM.main.classList.toggle('hidden');
        this.DOM.btn_img.classList.toggle('change_img');
        this.DOM.body.classList.toggle('scroll_hidden');
    }

    show(){
        this.DOM.navi_btn.addEventListener('click',
        this._toggle.bind(this)
    )};
}



