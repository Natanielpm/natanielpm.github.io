// // esta función se usa para asegurarse de que el código se ejecute después de que el documento HTML haya sido completamente cargado.
$(document).ready(function () {

    $("#acercademi").mouseover(function () {
        $("#estesoyyo").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento.
    })

    $("#HaBlandas").mouseover(function () {
        $("#HabilidadesB").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento.
    })

    $("#HaTecnicas").mouseover(function () {
        $("#software").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento.
    })




    $("#IngPresupuestos").click(function () {
        $("#RespPresupuestos").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento.
    })

    $("#IngProyectos").click(function () {
        $("#RespPresupuestos").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento. 
        $("#RespProyectos").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento. 
    })

    $("#IngMantenimiento").click(function () {
        $("#RespProyectos").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento. 
        $("#RespMantenimiento").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento. 
    })

    $("#IngProyectista").click(function () {
        $("#RespMantenimiento").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento. 
        $("#RespProyectista").toggle(); //método de jQuery que cambia el estado de visibilidad del elemento. 
    })

})