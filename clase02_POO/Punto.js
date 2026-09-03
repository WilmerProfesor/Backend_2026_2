class Punto{
    constructor(x, y){
        // this.x = x==null || x==undefined ? 0 : x;
        // this.y = y==null || y==undefined ? 0 : y;
        this.x = x ?? 0;
        this.y = y ?? 0;

    }
    
    toString(){
        return `(${this.x}, ${this.y})`;
    }

    mover(dx, dy){
        this.x += dx;
        this.y += dy;
    }
}

const p1 = new Punto(2, 3);

console.log(p1.toString()); // Output: (2, 3)
p1.mover(1, -1);
console.log(p1.toString()); // Output: (3, 2)