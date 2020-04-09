class Ave {
    vueloBehavior;
    comerBehavior;
    nombre;

    setVueloBehavior(vueloBehavior) {
        this.vueloBehavior = vueloBehavior;
    }

    setComerBehavior(comerBehavior) {
        this.comerBehavior = comerBehavior;
    }

    performComer() {
        this.comerBehavior.comer();
    }

    performVuelo() {
        this.vueloBehavior.vuelo();
    }
}

class vueloPorLasFlores {
    vuelo() {
        console.log('Yo vuelo en circulo');
    }
}

class vueloPorLasMontanias {
    vuelo() {
        console.log('Yo vuelo por lo alto de las montañas');
    }
}


class comerFlores {
    comer() {
        console.log('Yo extraigo comida de las flores')
    }
}

class cazarAnimales {
    comer() {
        console.log('Yo cazo animales para alimentarme')
    }
}


class Aguila extends Ave {
    nombre() {
        console.log('soy tu amiga águila');
    }
}

class Colibri extends Ave {
    nombre() {
        console.log('soy tu amigo colibrí');
    }
}