
//if (document.layers) {
//	n=1;
//	ie=0;
//	Mostrar = "show";
//	Ocultar = "hide";
//	}
//
//if (document.all) {
//	n=0;
//	ie=1;
//	Mostrar = "visible";
//	Ocultar = "hidden";
//	}

//Recuperamos el tipo de navegador en el que estamos
    var NavegadorExpl     
    var NavegadorNetS4    
    var NavegadorNetS6    
    if (document.all){  //explorer
       NavegadorExpl = true
       NavegadorNetS4 = false
       NavegadorNetS6 = false
    }
    else{
       if (document.layers){  //netscape4
          NavegadorNetS4 = true
          NavegadorNetS6 = false
          NavegadorExpl = false
       }
       else{
          NavegadorNetS6 = true
          NavegadorNetS4 = false
          NavegadorExpl = false
       }
    }
	
