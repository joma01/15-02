class kwartira {
    constructor(square, floor , yardArea, windows, doors ){
        this.square = square,
            this.floor = floor,
            this.yardArea = yardArea,
            this.windows = windows,
            this.doors = doors
    }
}
class dom extends kwartira{
    constructor(square, floor , yardArea, windows, doors, zabor, kotiol, color, belyi_kirpich, lesnica) {
        super(square, floor , yardArea, windows, doors);
        this.zabor = zabor,
            this.dymoxod = kotiol,
            this. color = color,
            this.kirpich = belyi_kirpich,
            this.stypenki = lesnica
    }
}
const sklad = new dom(
    100,
    17,
    180,
    27,
    23,
)
console.log(sklad)
class srach extends kwartira{
    constructor(square, floor , yardArea, windows, doors, ochok, koika, bazar, equipment, chloviek, plitka, lampa, doctor, kolyaska, hue ) {
        super(square, floor , yardArea, windows, doors);
        this.palata = ochok,
            this.koika = koika,
            this.bazar = bazar,
            this.equipment = equipment,
            this.pacient = chloviek,
            this.plitka = plitka,
            this.lampa = lampa,
            this.doctor = doctor,
            this.kolyaska = kolyaska,
            this.shpric = hue
    }
}
const parasha = new srach(
    100,
    10,
    30,
    100,
    60,
    85,
    400,
    50,
    40,
    100,
    200,
    400,
    50,
    300,
    700
)
console.log(parasha)


