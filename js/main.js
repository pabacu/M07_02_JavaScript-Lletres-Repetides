function openTabs(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;
  document.getElementById('code').innerHTML = "";

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

//globals
const name = ["P","A","B","L","O","1"];
const lastname = ["A","C","U","Ñ","A"];

const person = [
  {firstname : "PABLO", lastname: "ACUÑA"}
];

var str_emails = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

//globals functions
function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}


//ejer-1
function showelements() {
  name.forEach(element => {
    document.getElementById('code').innerHTML = document.getElementById('code').innerHTML + "<br/>" +  element;
    console.log(element);
  });
}

//ejer-2
function showvocalcons() {
  var result = "";

  name.forEach(element => {
    if(element.match(/[aeiou]/ig))
    {
      result =  "He trobat la VOCAL: " + element;
    }
    else
    {
      if(element.match(/[0-9]/ig))
      {
        result =  "Els noms de persones no contenen el número: " + element;  
      }else{
        result =  "He trobat la CONSONANT: " + element;
      }
    }
    document.getElementById('code').innerHTML = document.getElementById('code').innerHTML + result + "<br/>";
    console.log(result);
  });
}

//ejer-3
function countcharacters() {
    const resultMap = new Map();
    
    // If repeat the value ++, if no repeat the value is 1
    for (let i = 0; i < name.length; i++) {
      if (resultMap.get(name[i]) === undefined) {
        resultMap.set(name[i], 1);
      } else {
        const value = resultMap.get(name[i]);
        if (value && !isNaN(value)) {
          resultMap.set(name[i], parseInt(value)+1);
        }
      }
    }
    let jsonObject = {};  
    resultMap.forEach((value, key) => {  
        jsonObject[key] = value  
    });  
    document.getElementById('code').innerHTML = document.getElementById('code').innerHTML + JSON.stringify(jsonObject)  + "<br/>";
    console.log(resultMap);
}

//ejer-4
function joinStrings() {
  // Join two strings
  var result = getFullName(person[0]);
  document.getElementById('code').innerHTML = document.getElementById('code').innerHTML + result  + "<br/>";
  console.log(result);

}

//ejer-N2
function getUniqueEmailsFromString() {
  
    // Regex match
    var result = str_emails.match(/([a-zA-ZÑñ0-9._-]+@[a-zA-ZÑñ0-9._-]+\.[a-zA-ZÑñ0-9_-]+)/gi);
    //No email repeat
    let unique = [...new Set(result)];
    document.getElementById('code').innerHTML = document.getElementById('code').innerHTML + unique.join('<br/>')  + "<br/>";
    console.log(unique.join('\r\n'));
}

