import { Component } from "@angular/core";

@Component({
    selector:'hola_mundo',
    templateUrl: './hola_mundo.component.html'

})

export class HolaMundo{
    mensaje: string='Hola Mundo.';
    

    persona: any={
        nombre: 'Eduar',
        apellido: 'Polanco',
        edad: '23'
    }

    getSuma(): number{
        return 10 + 25;
    }
    
    getMulti(number1: number, number2: number ): number{
        return number1 * number2;
    }

    urlIMG = 'https://img2.freepng.es/20181108/glf/kisspng-angularjs-in-action-javascript-application-softwar-angular-products-just-stickers-just-stickers-5be4f7a1467125.6693886615417322572885.jpg'
    urlAbsoluta = '/assets/img/LOGO_FRANZ BLANCO.png'
    urlRelativa = '../../assets/img/LOGO_FRANZ.png'
    urlDataB= '/assets/img/LOGO.png'
    color= 'red'
    

}