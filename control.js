let elements_armadura = document.getElementsByClassName("opcion_armadura");
let elements_llave = document.getElementsByClassName("opcion_llave");
let negro = document.getElementById("negro");

let music = document.getElementById("ambiente_day");
music.play();


let aux = window.location.toString().split('#');
let url = "";
for (let i = 0; i < aux.length - 1; i++) {
    url += aux[i];
}

var armadura = false;

var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
        e.preventDefault();

        negro.classList.remove("hide");

        window.location.href = url + "#" + e.target.dataset.to;
        
        if (e.target.id !== "btn_nombres"){
            setTimeout(e => {
                negro.classList.add("hide");
            }, 3000); 
        } else {
            negro.classList.add("hide");
        }

    });
}

const resetear_todo = () => {
    document.getElementById('ambiente_cueva').pause();
    document.getElementById('ambiente_cueva').currentTime = 0;
    document.getElementById('ambiente_day').play();

    armadura = false;
    document.getElementById('pantalla_05').classList.remove('alternative');
    document.getElementById('pantalla_06').classList.remove('alternative');
    document.getElementById('pantalla_17').classList.remove('alternative');
    document.getElementById('pantalla_18').classList.remove('alternative');
    document.getElementById('pantalla_19').classList.remove('alternative');
    document.getElementById('pantalla_24').classList.remove('alternative');

    document.getElementById('btn_10').classList.remove('hide');
    document.getElementById('btn_29').classList.remove('hide');
    document.getElementById('btn_31').classList.remove('hide');

    document.getElementById('btn_09').classList.add('hide');
    document.getElementById('btn_15').classList.add('hide');
    document.getElementById('btn_14').classList.add('hide');
    document.getElementById('btn_17').classList.add('hide');
    document.getElementById('btn_28').classList.add('hide');
    document.getElementById('btn_30').classList.add('hide');
}

const handdle_btn_00 = () => {
    document.getElementById('aleteo').play();
    setTimeout(() => {
        document.getElementById('rugido2').play();
    }, 1000);
} 

const handdle_btn_01 = () => {
    document.getElementById('rocas').play();
    document.getElementById('ambiente_day').pause();
    document.getElementById('ambiente_day').currentTime = 0;
    document.getElementById('ambiente_cueva').play();
} 

const handdle_btn_02 = () => {
    document.getElementById('respiracion').play();
    setTimeout(() => {
        document.getElementById('pasos_tierra').play();
    }, 1000);
    document.getElementById('ambiente_day').pause();
    document.getElementById('ambiente_day').currentTime = 0;
    document.getElementById('ambiente_cueva').play();
} 

const handdle_btn_03 = () => {
    document.getElementById('ramas').play();
    document.getElementById('ambiente_day').pause();
    document.getElementById('ambiente_day').currentTime = 0;
    document.getElementById('ambiente_cueva').play();   
} 

const handdle_btn_04 = () => {
    document.getElementById('rocas').play();
    document.getElementById('ambiente_day').play();
    document.getElementById('ambiente_cueva').pause();
    document.getElementById('ambiente_cueva').currentTime = 0;

} 

const handdle_btn_05 = () => {
    document.getElementById('corriendo').play();
    setTimeout(() => {
        document.getElementById('quejido').play();
    }, 2000);
    setTimeout(() => {
        document.getElementById('grito_cayendo').play();
        document.getElementById('rocas').play();
    }, 2300);
    setTimeout(() => {
        document.getElementById('caida_al_piso').play();
    }, 3000);
} 

const handdle_btn_06 = () => {
    document.getElementById('pasos_tierra').play();
    setTimeout(() => {
        document.getElementById('derrumbe2').play();
    }, 3000);
} 

const handdle_btn_07 = () => {
    document.getElementById('pasos_armadura').play();
} 

const handdle_btn_08 = () => {
    document.getElementById('fuego').play();
} 

const handdle_btn_09 = () => {
    document.getElementById('espadazos').play();
} 

const handdle_btn_10 = () => {
    document.getElementById('fuego').play();
} 

const handdle_btn_11 = () => {
    document.getElementById('corriendo').play();
    document.getElementById('no_no').play();
    setTimeout(() => {
        document.getElementById('corriendo').play();
    }, 2000);
    document.getElementById('ambiente_cueva').pause();
    document.getElementById('ambiente_day').play();
} 

const handdle_btn_12 = () => {
    if (!armadura){
        document.getElementById('pasos_tierra').play();
    } else {
        document.getElementById('pasos_armadura').play();
    }

    setTimeout(() => {
        document.getElementById('pasos_tierra').play();
    }, 200);
    document.getElementById('ambiente_cueva').pause();
    document.getElementById('ambiente_day').play();
} 

const handdle_btn_13 = () => {
    document.getElementById('corriendo').play();
    document.getElementById('no_no').play();
    setTimeout(() => {
        document.getElementById('corriendo').play();
    }, 2000);
    document.getElementById('ambiente_cueva').pause();
    document.getElementById('ambiente_day').play();
} 

const handdle_btn_14 = () => {
    document.getElementById('llave').play();
} 

const handdle_btn_15 = () => {
    document.getElementById('corriendo').play();
    setTimeout(() => {
        document.getElementById('quejido').play();
    }, 2000);
    setTimeout(() => {
        document.getElementById('romper_puerta').play();
    }, 2200);
} 

const handdle_btn_16 = () => {
    if (!armadura) {
        document.getElementById('pasos_tierra').play();
    } else {
        document.getElementById('pasos_armadura').play();
    }
    setTimeout(() => {
        document.getElementById('rugido').play();
    }, 2500);
} 

const handdle_btn_17 = () => {
    document.getElementById('forcejeo').play();
    setTimeout(() => {
        document.getElementById('rugido').play();
    }, 2500);
} 

const handdle_btn_18 = () => {
    document.getElementById('pasos_tierra').play();
} 

const handdle_btn_19 = () => {
    document.getElementById('forcejeo').play();
    setTimeout(() => {
        document.getElementById('rocas').play();
    }, 1500);
    setTimeout(() => {
        document.getElementById('derrumbe').play();
    }, 2500);
    document.getElementById('btn_14').classList.remove('hide');
} 

const handdle_btn_20 = () => {
    document.getElementById('ramas').play();
    document.getElementById('ambiente_day').play();
    document.getElementById('ambiente_cueva').pause();
    document.getElementById('ambiente_cueva').currentTime = 0;
} 

const handdle_btn_21 = () => {
    document.getElementById('forcejeo').play();
    setTimeout(() => {
        document.getElementById('rocas').play();
    }, 1500);
} 

const handdle_btn_22 = () => {
    document.getElementById('rocas').play();
    setTimeout(() => {
        document.getElementById('no_no').play();
    }, 1500);
    setTimeout(() => {
        document.getElementById('derrumbe2').play();
    }, 2500);
} 

const handdle_btn_23 = () => {
    document.getElementById('pasos_tierra').play();
    document.getElementById('rocas').play();
}

const handdle_btn_24 = () => {
    resetear_todo();
}

const handdle_btn_25 = () => {
    document.getElementById('pasos_tierra').play();

    armadura = true;
    document.getElementById('pantalla_05').classList.add('alternative');
    document.getElementById('pantalla_06').classList.add('alternative');
    document.getElementById('pantalla_17').classList.add('alternative');
    document.getElementById('pantalla_18').classList.add('alternative');
    document.getElementById('pantalla_19').classList.add('alternative');
    document.getElementById('pantalla_24').classList.add('alternative');

    document.getElementById('btn_10').classList.add('hide');
    document.getElementById('btn_29').classList.add('hide');
    document.getElementById('btn_31').classList.add('hide');

    document.getElementById('btn_09').classList.remove('hide');
    document.getElementById('btn_15').classList.remove('hide');
    document.getElementById('btn_17').classList.remove('hide');
    document.getElementById('btn_28').classList.remove('hide');
    document.getElementById('btn_30').classList.remove('hide');
}

const handdle_btn_26 = () => {
    document.getElementById('pasos_tierra').play();
}

const handdle_btn_27 = () => {
    resetear_todo();
    document.getElementById('cuerda').pause();
    document.getElementById('cuerda').currentTime = 0;
}

const handdle_btn_28 = () => {
    document.getElementById('espadazos').play();
    setTimeout(() => {
        document.getElementById('cuerda').play();
        document.getElementById('ambiente_cueva').pause();
        document.getElementById('ambiente_cueva').currentTime = 0;
    }, 3000);
}

const handdle_btn_29 = () => {
    document.getElementById('fuego').play();
    setTimeout(() => {
        document.getElementById('no_no').play();
    }, 1000);
}

const handdle_btn_30 = () => {
    document.getElementById('espadazos').play();
    setTimeout(() => {
        document.getElementById('cuerda').play();
        document.getElementById('ambiente_cueva').pause();
        document.getElementById('ambiente_cueva').currentTime = 0;
    }, 2500);
}

const handdle_btn_31 = () => {
    document.getElementById('fuego').play();
    setTimeout(() => {
        document.getElementById('no_no').play();
    }, 1000);
}

const handdle_btn_32 = () => {
    if (!armadura) {
        document.getElementById('pasos_tierra').play();
    } else {
        document.getElementById('pasos_armadura').play();
    }
}

const handdle_btn_33 = () => {
    resetear_todo();
}

const handdle_btn_34 = () => {
    resetear_todo();
}

const handdle_btn_35 = () => {
    if (!armadura) {
        document.getElementById('pasos_tierra').play();
    } else {
        document.getElementById('pasos_armadura').play();
    }
}

const handdle_btn_36 = () => {
    document.getElementById('pasos_armadura').play();
}

const handdle_btn_37 = () => {
    resetear_todo();
}

const handdle_btn_38 = () => {  
    resetear_todo();
}

const handdle_btn_39 = () => {
    resetear_todo();
}

const handdle_btn_40 = () => {
    resetear_todo();
}