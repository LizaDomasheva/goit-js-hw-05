// Напиши класс Car с указанными свойствами и методами.

class Car {


    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
    //     static getSpecs(Car) {
    // console.log(Car)
    // }

    static getSpecs({
        maxSpeed,
        speed,
        isOn,
        distance,
        price
    }) {
        console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`)
    }

    // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */


    constructor({
        maxSpeed,
        speed = 0,
        isOn = false,
        distance = 0,
        price
    }) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = speed;

    }


    // constructor(options) {
    //         this.speed=0;
    //         this._price=options.price;
    //         this.maxSpeed=options.maxSpeed;
    //         this.isOn=options.isOn;
    //         this.distance=options.distance;
    // }
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get price() {
        return this._price
    };

    set price(value) {
        this._price = value;
    };

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        return this.isOn = true;
    }


    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false
        return this.speed = 0;
    }


    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if (this.speed <= this.maxSpeed) {
            return this.speed += value;
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */

    decelerate(value) {
        if (this.speed > 0) {
            return this.speed -= value;
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.turnOn) {
            return this.distance += (hours * this.speed);
        }
    }
}


const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000