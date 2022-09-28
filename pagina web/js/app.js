// GESTION DE COMBOBOX

let categoria = ['Comida','Ropa']

let ropa = ['Camisas','Pantalones']
    let marca_camisa = ['camisa 1', 'camisa 2']    
    let marca_pantalones = ['pantalon 1', 'pantalon 2']

        let marca_camisa_1_ventas = ['230','240','110','394']
        let marca_camisa_2_ventas = ['52','86','33','200']
        let marca_pantalones_1_ventas = ['251','230','248','160']
        let marca_pantalones_2_ventas = ['90','400','573','357']

let comida = ['Hamburgesa','Pizzas']
    let marca_hamburguesa = ['hamburguesa 1','hamburguesa 2']    
    let marca_pizzas = ['pizza 1','pizza 2']

        let comida_hamburguesa_1_ventas = ['100','200','300','400']
        let comida_hamburguesa_2_ventas = ['350','450','150','200']
        let comida_pizza_1_ventas = ['300','360','340','380']
        let comida_pizza_2_ventas = ['220','690','186','57']

      let combobox1 = document.getElementById("combobox1");
      let combobox2 = document.getElementById("combobox2");
      let combobox3 = document.getElementById("combobox3");

let temp = []

      function Recorrer(combobox, valores) {
        for (let index of valores) {
          combobox.innerHTML += `
                <option>${index}</option>
                `;
        }
      }

      function getCategory(){
        fetch
      }

      function llenarDepar() {
        Recorrer(combobox1, categoria);
      }
      llenarDepar();

      combobox1.addEventListener("change", (e) => {
        let dato = e.target.value;

        switch (dato) {
          case "Comida":
            combobox2.innerHTML = ""
            combobox3.innerHTML = ""
            Recorrer(combobox2, comida)
            Recorrer(combobox3, marca_hamburguesa)
            temp = [...comida_hamburguesa_1_ventas]
            actualizarData(temp)
            break;
          case "Ropa":
            combobox2.innerHTML = ""
            combobox3.innerHTML = ""
            Recorrer(combobox2, ropa);
            Recorrer(combobox3, marca_camisa)
            temp = [...marca_camisa_1_ventas]
            actualizarData(temp)
            break;
          default:
            break;
        }
      });

      combobox2.addEventListener("change", (e) => {
        let dato = e.target.value;

        switch (dato) {
          case "Camisas":
            combobox3.innerHTML = ""
            Recorrer(combobox3, marca_camisa)
            temp = [...marca_camisa_1_ventas]
            actualizarData(temp)
            break;
          case "Pantalones":
            combobox3.innerHTML = ""
            Recorrer(combobox3, marca_pantalones)
            temp = [...marca_pantalones_1_ventas]
            actualizarData(temp)
            break;
            case "Hamburgesa":
            combobox3.innerHTML = ""
            Recorrer(combobox3, marca_hamburguesa)
            temp = [...comida_hamburguesa_1_ventas]
            actualizarData(temp)
            break;
          case "Pizzas":
            combobox3.innerHTML = ""
            Recorrer(combobox3, marca_pizzas)
            temp = [...comida_pizza_1_ventas]
            actualizarData(temp)
            break;
          default:
            break;
        }
      });

      combobox3.addEventListener("change", (e) => {
        let dato = e.target.value;
        
        switch (dato) {
          case "camisa 1":
            temp = [...marca_camisa_1_ventas]
            actualizarData(temp)
            break;
          case "camisa 2":
            temp = [...marca_camisa_2_ventas]
            actualizarData(temp)
            break;
            case "pantalon 1":
                temp = [...marca_pantalones_1_ventas]
                actualizarData(temp)
            break;
            case "pantalon 2":
                temp = [...marca_pantalones_2_ventas]
                actualizarData(temp)
            break; 
            case "hamburguesa 1":
                temp = [...comida_hamburguesa_1_ventas]
                actualizarData(temp) 
            break;
          case "hamburguesa 2":
            temp = [...comida_hamburguesa_2_ventas] 
            actualizarData(temp)
            break;
            case "pizza 1":
                temp = [...comida_pizza_1_ventas]
                actualizarData(temp)
            break;
            case "pizza 2":
                temp = [...comida_pizza_2_ventas] 
                actualizarData(temp)
            break;
          default:
            break;
        }
      });
// GESTION DEL GRAFICO

    // Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2022 = {
    label: "  Ventas",
    data: temp, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(131, 167, 238)', // Color de fondo
    borderColor: 'rgba(131, 167, 238)', // Color del borde
    borderWidth: 1,// Ancho del borde
}
var myChart = new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2022
        ]
    },
    options: {
        legend: {display: true , labels: { fontColor: 'rgb(0,0,0)',usePointStyle: true, boxWidth: 6}, position: 'bottom'}, 
        title: { display: true,text: 'Sales By Month for:'},
        scales: { yAxes: [ { ticks: {beginAtZero: true } ,scaleLabel: {display: true,labelString: 'Ventas'}} ],
                  xAxes: [ {scaleLabel: {display: true,labelString: 'Meses'}} ] 
                }
    }
});


function actualizarData(data) {
    datosVentas2022.data = [...data]
    myChart.update();
}