

export function boton(){
    $(function(){
        $("button").click(function(){
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
        $( "button" ).click(function() {
            $('#test').remove();
        });




    }
}