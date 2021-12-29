var Car = function(){
    this.brand = 'Honda';
    this.type = 'jazz';
    this.year = 2011;

    // private property, gunakan keyword var, bukan 'this'
    var odometer = 0;

    // public function
    this.drive = function(){
        odometer ++;
        return 'driving';

    } 

    this.stop = function(){
        // panggil private function
        brake();
        return 'stopped';
    }
    this.getOdo = function(){
        return odometer;
    }

    // private function, dalam bentuk
    // child function
    function brake(){
        console.log('braking');
    }
}

var car = new Car();

car.brand = 'Toyoto';
// car.harga = 10000000;
console.log(car.brand);
console.log(car.type);
console.log(car.year);

console.log(car.getOdo());
console.log(car.drive());
console.log(car.getOdo());
console.log(car.stop());
console.log(car.getOdo());
car.odometer = 1000;
console.log(car.getOdo());

console.log(car);