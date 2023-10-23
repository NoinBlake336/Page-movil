const verMas = document.getElementById('verMas');
const verMenos = document.getElementById('verMenos');
const verCategoria = document.getElementsByClassName('VerCategoria');
const contenedorCategoria = document.getElementsByClassName('contenedor-categoria');
console.log(verMas);
verMas.addEventListener('click',()=>{
    contenedorCategoria[0].style.height = "100%";
    contenedorCategoria[0].style.border = "none";
    contenedorCategoria[0].style.overflow ="visible";
    verCategoria[0].style.right = '10px'

    if(verMenos.classList.contains('hidden')){
        verMenos.classList.remove('hidden');
        verMas.classList.add('hidden');
    }
});

verMenos.addEventListener('click',()=>{
    contenedorCategoria[0].style.height = "86rem";
    contenedorCategoria[0].style.overflow ="hidden";
    verCategoria[0].style.right = '141.188px';
    if(verMas.classList.contains('hidden')){
        verMas.classList.remove('hidden');
        verMenos.classList.add('hidden');
    }
})