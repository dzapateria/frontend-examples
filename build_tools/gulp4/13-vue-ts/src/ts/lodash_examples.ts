
export default class Lo{
    constructor(){
        console.log('clase lo de lodash cargada correcto');
    }

    public primero(ar){
        // @ts-ignore
        return _.first(ar);
    }
}

