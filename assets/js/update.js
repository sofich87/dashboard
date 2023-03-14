let runScripts = () => {

    let chart_bars = document.getElementById("chart-bars");
    console.log(chart_bars);
    
    let icons = document.getElementsByTagName("i");
    for (let icon of icons){
        console.log(icons);
    }

    let cards = document.getElementsByClassName('card')
    for (let card of cards){
        console.log(cards);
    }
    

}

let modifyText =() => {
    let listOfP = document.getElementsByTagName("p")
    let elementP= listOfP[3]
    elementP.innerHTML ="Dinero Actual"
    let listOfH4 = document.getElementsByTagName("h4")
    let elementH4 = listOfH4[0]
    elementH4.innerHTML="301K"

}

let updateData =() => {
    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];
    
    let [ users, clients, sales ] = data;  
    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;
    
    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 
    let listOfElements = document.getElementsByClassName('text-end pt-1');
    let [ , second, third, fourth ] = listOfElements;
    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;
}

let cambioIndicadores = ()=>{

    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]
      
     
    let list = document.getElementsByClassName('card-footer p-3');
    let cont =0;
    for (let element of cambios){
      crecimientoMes = (element.valor_previo-element.valor_actual)/element.valor_previo*100;
      crecimientoMesround=Math.round(crecimientoMes);
      let mensajeCrec= element.mensaje_tiempo;
      let clase = crecimientoMesround > 0 ? 'text-success' : 'text-danger';
      let descripcion = `<p class="mb-0"><span class="text-sm ${clase} font-weight-bolder"> ${crecimientoMesround} </span> ${mensajeCrec} </p>`;
      list[cont].innerHTML = descripcion;
      cont=cont+1;
    
    }

}
modifyText();
runScripts();
updateData();
cambioIndicadores();