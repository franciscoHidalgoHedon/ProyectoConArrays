
//precios servicio
let iva = 12
let envio = 1000

//array de articulos
let articulos = [
    [
        {   
            nombre: "Taza Tortuga",
            descripción: "Azul con dibujo de una tortuga celeste",
            precio: 500
        },
        {
            nombre: "Taza Salamandra",
            descripción: "Rojo con dibujo de una salamandra con fuego en la cola",
            precio: 400
        },
        {
            nombre: "Taza Sapo",
            descripción: "Verde con dibujo de un sapo con una flor en la espalda",
            precio: 1000
        },
    ],
    [
        {
            nombre: "Tetera verde",
            descripción: "Grande verde",
            precio: 900
        },
        {
            nombre: "Tetera violeta",
            descripción: "Violeta mediana",
            precio: 800
        }
    ],
    [
        {
            tipo: "plato",
            nombre: "plato amarillo",
            descripción: "Amarillo con rayas",
            precio: 300
        },
        {
            tipo: "plato",
            nombre: "plato marron",
            descripción: "Marrón con circulos",
            precio: 200
        },
        {
            tipo: "plato",
            nombre: "plato celeste",
            descripción: "Celeste con ondas",
            precio: 400
        }
    ]
]

//=================================================== funciones =========================================================

//para saber si es necesario repetir el prompt
function repeat(Selec, numeroOpciones){
    return (IsNumberNotValid(Selec) || Selec > numeroOpciones || Selec <= 0)
}
//para saber si el numero es valido
function IsNumberNotValid(a){1
    return isNaN(parseInt(a))
}
//pedir un numero valido
function askValidNumber(){
    alert("Por favor seleccione un número valido")
}
function DoRepeat(seleccionador, num, cuentas){
    let seleccionUsuario = seleccionador(cuentas)
    while(repeat(seleccionUsuario, num)){
        askValidNumber()
        seleccionUsuario = seleccionador(cuentas)
    }
    return seleccionUsuario
}
//CREADOR DE TEXTO 3000
function creadorDeTexto3000(arrayx, tipoArticulo){
    let texto = "Por favor seleccione uno de nuestros modelos de "+tipoArticulo+": "
    let volvermenu = 0
    for (let index = 0; index < arrayx["length"]; index++){
        let indexTexto = index + 1
        texto = texto+"\n"+indexTexto+") "+arrayx[index]["descripción"]+" - "+arrayx[index]["precio"]+"$"
        volvermenu = indexTexto+1
    }
    texto = texto + "\n"+volvermenu+") menú anterior"
    return texto
}
//Switches para los menus
function Menu1(){
    switch(parseInt(DoRepeat(seleccion1, 4))){
        case 1:
            Menu2_Tazas()
        break
        case 2:
            Menu2_Teteras()
        break
        case 3:
            Menu2_Platos()
        break
        default:
            alert("Gracias por usar Vajillas.com")
        break
    }
}
function Menu2_Tazas(){
    switch(parseInt(DoRepeat(seleccion2_Tazas, 4))){
        case 1:
            PresupuestoFinal(articulos[0][0]["precio"])
        break
        case 2:
            PresupuestoFinal(articulos[0][1]["precio"])
        break
        case 3:
            PresupuestoFinal(articulos[0][2]["precio"])
        break
        default:
            Menu1()
        break
    }
}

function Menu2_Teteras(){
    switch(parseInt(DoRepeat(seleccion2_Teteras, 3))){
        case 1:
            PresupuestoFinal(articulos[1][0]["precio"])
        break
        case 2:
            PresupuestoFinal(articulos[1][1]["precio"])
        break
        default:
            Menu1()
        break
    }
}
function Menu2_Platos(){
    switch(parseInt(DoRepeat(seleccion2_Platos, 4))){
        case 1:
            PresupuestoFinal(articulos[2][0]["precio"])
        break
        case 2:
            PresupuestoFinal(articulos[2][1]["precio"])
        break
        case 3:
            PresupuestoFinal(articulos[2][2]["precio"])
        break
        default:
            Menu1()
        break
    }
}
//prompts
function seleccion1(){
    return prompt(
        "Bienvenido a la interfaz de usuario de Vajillas.com"+
      "\n"+
      "\nPor favor seleccione uno de los siguientes articulos a la venta escribiendo el numero correspondiente"+
      "\n 1) Tazas"+
      "\n 2) Teteras"+
      "\n 3) Platos"+
      "\n 4) Salir del Menu"
)
}
function seleccion2_Tazas(){
    return prompt(
        creadorDeTexto3000(articulos[0], "tazas")
    )
}
function seleccion2_Teteras(){
    return prompt(
        creadorDeTexto3000(articulos[1], "teteras")
    )
}
function seleccion2_Platos(){
    return prompt(
        creadorDeTexto3000(articulos[2], "platos")
    )
}

//Presupuesto final
function CuantasUnidades(){
    return prompt("Cuantas Unidades desea comprar?\n(sin importar la cantidad, el precio del envio no se verá afectado, puede comprar hasta un máximo de 100 unidades)")
}
function PresupuestoFinal(precio){
    let cuentas = {}
    cuentas.precio = 100, 
    cuentas.unidades = DoRepeat(CuantasUnidades, 100),
    cuentas.psi = cuentas.unidades * cuentas.precio,
    cuentas.pci = cuentas.psi + (cuentas.psi * iva)/100,
    cuentas.pf= cuentas.pci + envio

    if((DoRepeat(ConfirmarCompra,2,cuentas))==1){
        alert("Gracias por comprar en Vajillas.com!"+
        "\n(su compra será enviada a su domicilio dentro de los proximos 5 dias habiles)")
    }
    else{
        Menu1()
    }
}
function ConfirmarCompra(precios){
    return prompt("El precio de la compra es de: ("+precios["precio"]+"$ x "+precios["unidades"]+")"+" "+precios["psi"]+"$"+
            "\n Agregando el impuesto IVA ("+iva+"%): "+precios["pci"]+"$"+
            "\n Y finalmente agregando el precio del envio ("+envio+"$): "+precios["pf"]+"$"+
            "\n Si desea confirmar la compra, escriba \"1\""+
            "\n para volver al menu principal, escriba \"2\"")
}

Menu1()
