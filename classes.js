class Train {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    details() {
        return `${this.name} is running at ${this.speed} kmph`;
    }
    change_speed(new_speed) {
        this.speed = new_speed;
        console.log("Speed changed to " + this.speed);
    }
}

class HighSpeed extends Train {
    constructor(passengers, name, speed) {
        super(name, speed);
        this.passengers = passengers;
    }
}

var train1 = new Train("Normal Train", 120);
var train2 = new HighSpeed(100, "High Speed", 150);