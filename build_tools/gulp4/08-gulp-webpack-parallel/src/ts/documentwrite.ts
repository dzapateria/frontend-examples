
//bar.ts
console.log("se cargo funcion exportada escribir_en_pantalla() desde documentwrite.ts");
export default function escribir_en_pantalla(txt) {
    document.write(txt);
}