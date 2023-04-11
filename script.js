let rectangle = {
    width: 100,
    length: 50,
    perimeter: function () {
        return 2 * (this.width + this.length)
    },
    area: function () {
        return this.width * this.length
    },
    displayInfo: function () {
        document.write(`Rectangle of ${this.length}Length , ${this.width}Width , ${this.area()}Area and ${this.perimeter()}Perimeter`)
    }
}

rectangle.displayInfo()