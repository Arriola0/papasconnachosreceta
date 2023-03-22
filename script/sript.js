

const imgAsecionMuestrario = document.getElementById("imgA-secionMuestrario");
const imgBsecionMuestrario = document.getElementById("imgB-secionMuestrario");
const imgCsecionMuestrario = document.getElementById("imgC-secionMuestrario");

const imgAsecionEscogerImagen = document.getElementById("imgA-secionEscogerImagen");
const imgBsecionEscogerImagen = document.getElementById("imgB-secionEscogerImagen");
const imgCsecionEscogerImagen = document.getElementById("imgC-secionEscogerImagen");



const iconoOpciones = document.getElementById("iconoOpciones");
const opciones = document.getElementById("opciones");
const btncerrarMenu = document.getElementById("cerrarMenu-opciones");


//ingrediente uno
const infoIngredienteUno = document.getElementById("infoIngredientesUno-sectionDos");
const btnVerinfoIngredienteUno = document.getElementById("btnVerinfoIngredienteUno");
const btnCerrarIngredienteUno = document.getElementById("btnCerrarIngredienteUno");

//ingrediente dos
const infoIngredientesDos = document.getElementById("infoIngredientesDos-sectionDos");
const btnVerinfoIngredienteDos = document.getElementById("btnVerinfoIngredienteDos");
const btnCerrarIngredienteDos = document.getElementById("btnCerrarIngredienteDos");


//ingrediente tres
const infoIngredientesTres = document.getElementById("infoIngredientesTres-sectionDos");
const btnVerinfoIngredienteTres = document.getElementById("btnVerinfoIngredienteTres");
const btnCerrarIngredienteTres = document.getElementById("btnCerrarIngredienteTres");


//ingrediente cuatro
const infoIngredienteCuatro = document.getElementById("infoIngredienteCuatro-sectionDos");
const btnVerinfoIngredienteCuatro = document.getElementById("btnVerinfoIngredienteCuatro");
const btnCerrarIngredienteCuatro = document.getElementById("btnCerrarIngredienteCuatro");

//ingrediente cinco
const infoIngredienteCinco = document.getElementById("infoIngredienteCinco-sectionDos");
const btnVerinfoIngredienteCinco = document.getElementById("btnVerinfoIngredienteCinco");
const btnCerrarIngredienteCinco = document.getElementById("btnCerrarIngredienteCinco");


//paso uno - preparacion
const infoPreparacionUno = document.getElementById("infoPreparacionUno-sectionTres");
const btnVerinfoPreparacionUno = document.getElementById("btnVerinfoPreparacionUno");
const btnCerrarPreparacionUno = document.getElementById("btnCerrarPreparacionUno");


//paso dos - preparacion
const infoPreparacionDos = document.getElementById("infoPreparacionDos-sectionTres");
const btnVerinfoPreparacionDos = document.getElementById("btnVerinfoPreparacionDos");
const btnCerrarPreparacionDos = document.getElementById("btnCerrarPreparacionDos");


//paso tres - preparacion
const infoPreparacionTres = document.getElementById("infoPreparacionTres-sectionTres");
const btnVerinfoPreparacionTres = document.getElementById("btnVerinfoPreparacionTres");
const btnCerrarPreparacionTres = document.getElementById("btnCerrarPreparacionTres");


//paso cuatro - preparacion
const infoPreparacionCuatro = document.getElementById("infoPreparacionCuatro-sectionTres");
const btnVerinfoPreparacionCuatro = document.getElementById("btnVerinfoPreparacionCuatro");
const btnCerrarPreparacionCuatro = document.getElementById("btnCerrarPreparacionCuatro");





//acciones del menu
iconoOpciones.addEventListener("click", ()=>{
    opciones.style.display = "block";
});

btncerrarMenu.addEventListener("click", () =>{
    setTimeout(()=>{
        opciones.style.display = "none";
    },1000)
});


//muestrario de imagenes
imgAsecionEscogerImagen.addEventListener("click", ()=>{
   setTimeout(()=>{
    imgAsecionMuestrario.style.display = "block";
    imgBsecionMuestrario.style.display = "none";
    imgCsecionMuestrario.style.display = "none";
   }, 1000)
});

imgBsecionEscogerImagen.addEventListener("click", ()=>{
   setTimeout(()=>{
    imgBsecionMuestrario.style.display = "block";
    imgAsecionMuestrario.style.display = "none";
    imgCsecionMuestrario.style.display = "none";
   }, 1000)
});


imgCsecionEscogerImagen.addEventListener("click", ()=>{
    setTimeout(()=>{
    imgCsecionMuestrario.style.display = "block";
    imgAsecionMuestrario.style.display = "none";
    imgBsecionMuestrario.style.display = "none";
    }, 1000)
});

//ingrediente uno
btnVerinfoIngredienteUno.addEventListener("click", ()=>{
   setTimeout(()=>{
    infoIngredienteUno.style.display = "block";
    btnVerinfoIngredienteUno.style.display = "none";
   },1000)
});

btnCerrarIngredienteUno.addEventListener("click", ()=>{
    infoIngredienteUno.style.display = "none";
    btnVerinfoIngredienteUno.style.display = "block";
});

//ingrediente dos
btnVerinfoIngredienteDos.addEventListener("click", ()=>{
    setTimeout(()=>{
        infoIngredientesDos.style.display = "block";
    btnVerinfoIngredienteDos.style.display = "none";
    },1000)
});

btnCerrarIngredienteDos.addEventListener("click", ()=>{
    infoIngredientesDos.style.display = "none";
    btnVerinfoIngredienteDos.style.display = "block";
});

//ingrediente tres
btnVerinfoIngredienteTres.addEventListener("click", ()=>{
   setTimeout(()=>{
    infoIngredientesTres.style.display = "block";
    btnVerinfoIngredienteTres.style.display = "none";
   }, 1000)
});

btnCerrarIngredienteTres.addEventListener("click", ()=>{
    infoIngredientesTres.style.display = "none";
    btnVerinfoIngredienteTres.style.display = "block";
});

//ingrediente cuatro
btnVerinfoIngredienteCuatro.addEventListener("click", ()=>{
    setTimeout(()=>{
        infoIngredienteCuatro.style.display = "block";
    btnVerinfoIngredienteCuatro.style.display = "none";
    },1000)
});

btnCerrarIngredienteCuatro.addEventListener("click", ()=>{
    infoIngredienteCuatro.style.display = "none";
    btnVerinfoIngredienteCuatro.style.display = "block";
})

//ingrediente cinco
btnVerinfoIngredienteCinco.addEventListener("click", ()=>{
    setTimeout(()=>{
    infoIngredienteCinco.style.display = "block";
    btnVerinfoIngredienteCinco.style.display = "none";
    },1000)
});

btnCerrarIngredienteCinco.addEventListener("click", ()=>{
    infoIngredienteCinco.style.display = "none";
    btnVerinfoIngredienteCinco.style.display = "block";
});


//paso uno - preparacion
btnVerinfoPreparacionUno.addEventListener("click", ()=>{
   setTimeout(()=>{
    infoPreparacionUno.style.display = "block";
    btnVerinfoPreparacionUno.style.display = "none";
   },1000)
});

btnCerrarPreparacionUno.addEventListener("click", ()=>{
    infoPreparacionUno.style.display = "none";
    btnVerinfoPreparacionUno.style.display = "block";
});


//paso dos - preparacion.
btnVerinfoPreparacionDos.addEventListener("click", ()=>{
    setTimeout(()=>{
        infoPreparacionDos.style.display = "block";
    btnVerinfoPreparacionDos.style.display = "none";
    },1000)
});

btnCerrarPreparacionDos.addEventListener("click", ()=>{
    infoPreparacionDos.style.display = "none";
    btnVerinfoPreparacionDos.style.display = "block";
});


//paso tres - preparacion
btnVerinfoPreparacionTres.addEventListener("click", ()=>{
   setTimeout(()=>{
    infoPreparacionTres.style.display = "block";
    btnVerinfoPreparacionTres.style.display = "none";
   },1000)
});

btnCerrarPreparacionTres.addEventListener("click", ()=>{
    infoPreparacionTres.style.display = "none";
    btnVerinfoPreparacionTres.style.display = "block";
});

//paso cuatro - preparacion
btnVerinfoPreparacionCuatro.addEventListener("click", ()=>{
    setTimeout(()=>{
        infoPreparacionCuatro.style.display = "block";
    btnVerinfoPreparacionCuatro.style.display = "none";
    },1000)
});

btnCerrarPreparacionCuatro.addEventListener("click", ()=>{
    infoPreparacionCuatro.style.display = "none";
    btnVerinfoPreparacionCuatro.style.display = "block";
});
















