
// AL ESTAR EN externals NO NECESITA IMPORTS
export function boton(){
    $(() => {
        $("button").click(() => {
            $("p").hide();
        });
    });

    console.log('boton se ejecuto');
}



export default class Jq {
    constructor(){
        console.log('lanzado clase j');
    }

    public tipo(){
        console.log("soy del tipo jquery");
    }

    public botonborra(){
        $( "button" ).click(() => {
            $('#test').remove();
        });




    }
}