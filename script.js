function cargar() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].casa.compra)
        document.getElementById("doc").innerHTML=`compra:${data[0].casa.compra}`
        document.getElementById("dov").innerHTML=`venta:${data[0].casa.venta}`
        document.getElementById("vof").innerHTML=`variacion:${data[0].casa.variacion}`
      });
  }