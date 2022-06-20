function cargar() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(data => data.json())
    .then(data => {
       document.getElementById("doc").innerHTML= `Compra:$${data[0].casa.compra}`
       document.getElementById("dov").innerHTML= `Venta:$${data[0].casa.venta}`
       document.getElementById("vof").innerHTML= `Variacion:${data[0].casa.variacion}%`

       document.getElementById("dbc").innerHTML= `Compra:$${data[1].casa.compra}`
       document.getElementById("dbv").innerHTML= `Venta:$${data[1].casa.venta}`
       document.getElementById("vb").innerHTML= `Variacion:${data[1].casa.variacion}%`

       document.getElementById("dclc").innerHTML= `Compra:$${data[3].casa.compra}`
       document.getElementById("dclv").innerHTML= `Venta:$${data[3].casa.venta}`
       document.getElementById("vcl").innerHTML= `Variacion:${data[3].casa.variacion}%`

       document.getElementById("dpc").innerHTML= `Compra:$${data[7].casa.compra}`
       document.getElementById("dpv").innerHTML= `Venta:$${data[7].casa.venta}`
       document.getElementById("vp").innerHTML= `Variacion:${data[0].casa.variacion}%`

       document.getElementById("dboc").innerHTML= `Referencia:$${data[4].casa.compra}`
       document.getElementById("vbo").innerHTML= `Variacion:${data[4].casa.variacion}%`

       document.getElementById("dtv").innerHTML= `Compra:$${data[6].casa.venta}`
       document.getElementById("vt").innerHTML= `Variacion:${data[0].casa.variacion}%`
    })
}


