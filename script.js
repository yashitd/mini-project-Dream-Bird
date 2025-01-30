class counter {
    constructor(config) {
        this.selector = config.selector;
        this.element = null;
        this.count = 0;
        this.countEnd = config.countEnd;
        this.step = config.step;
        this.intervalMS=config.intervalMS;
        this.init();
    }
    getElements() {
        this.element = document.querySelector(this.selector);
        console.log(this.element)

    }
    startCounter() {
        this.element.innerHTML = this.count;
        setTimeout(() => {
            if (this.count < this.countEnd) {
                this.count += this.step;
                this.startCounter();
            }

        }, this.intervalMS)

    }
    init() {
        console.log('init');
        this.getElements();
        this.startCounter();
    }
}
const achivementElements = {
    selector: '.counter-numbers1',
    countEnd: 15,
    step:1,
    intervalMS:100
     
}
const villageElements = {
    selector: '.counter-numbers2',
    countEnd: 2000,
    step:50,
    intervalMS:50
     
}
const projectElements = {
    selector: '.counter-numbers3',
    countEnd: 4000,
    step:50,
    intervalMS:25
     
}
const statesElements = {
    selector: '.counter-numbers4',
    countEnd: 25,
    step:1,
    intervalMS:90
     
}
const achivementCounter = new counter(achivementElements);
const villageCounter = new counter(villageElements);
const projectCounter = new counter(projectElements);
const statesCounter = new counter(statesElements);