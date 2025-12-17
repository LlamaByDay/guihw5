class letterData {
    constructor(count, value) {
        this.count = count;
        this.value = value;
    }
}

class letterStorage {
    constructor() {
        this.letterCount = 100;
        this.letters = new Map();
        this.letters.set("A", new letterData(9, 1));
        this.letters.set("B", new letterData(2, 3));
        this.letters.set("C", new letterData(2, 3));
        this.letters.set("D", new letterData(4, 2));
        this.letters.set("E", new letterData(12, 1));
        this.letters.set("F", new letterData(2, 4));
        this.letters.set("G", new letterData(3, 2));
        this.letters.set("H", new letterData(2, 4));
        this.letters.set("I", new letterData(9, 1));
        this.letters.set("J", new letterData(1, 8));
        this.letters.set("K", new letterData(1, 5));
        this.letters.set("L", new letterData(4, 1));
        this.letters.set("M", new letterData(2, 3));
        this.letters.set("N", new letterData(6, 1));
        this.letters.set("O", new letterData(8, 1));
        this.letters.set("P", new letterData(2, 3));
        this.letters.set("Q", new letterData(1, 10));
        this.letters.set("R", new letterData(6, 1));
        this.letters.set("S", new letterData(4, 1));
        this.letters.set("T", new letterData(6, 1));
        this.letters.set("U", new letterData(4, 1));
        this.letters.set("V", new letterData(2, 4));
        this.letters.set("W", new letterData(2, 4));
        this.letters.set("X", new letterData(1, 8));
        this.letters.set("Y", new letterData(2, 4));
        this.letters.set("Z", new letterData(1, 10));
        this.letters.set("~", new letterData(2, 0));
    }
    pull() {
        var rand = Math.ceil(Math.random()*this.letterCount);
        this.letterCount -= 1;
        for (const [letter, data] of this.letters.entries()) {
            rand -= data.count;
            if (rand <= 0) {
                data.count -= 1;
                return [letter, data];
            }
        }
        return null;
    }
}