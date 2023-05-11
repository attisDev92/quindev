//Banner Slider
const bannerCarrusel = document.querySelector('.banner__carrusel');
const squareSlider = document.querySelectorAll('.carrusel__slider li');

let operation;

let slideIndex = 0;
let slideInterval;

mostrarSlide = (index) => {
  squareSlider.forEach((punto) => punto.classList.remove('carrusel__slider--activo'));
  squareSlider[index].classList.add('carrusel__slider--activo');
  operation= index * -33.3;
  bannerCarrusel.style.transform = `translateX(${operation}%)`;
}

mostrarSiguienteSlide = () => {
  slideIndex++;
  if (slideIndex === squareSlider.length) {
	slideIndex = 0;
  }
  mostrarSlide(slideIndex);
}

squareSlider.forEach((square, i) => {
  square.addEventListener('click', () => {
	clearInterval(slideInterval);
	slideIndex = i;
	mostrarSlide(slideIndex);
	slideInterval = setInterval(mostrarSiguienteSlide, 4500);
  });
});

slideInterval = setInterval(mostrarSiguienteSlide, 4500);

//Pop up Acerca de Nosotros

const contenedorContenido= document.querySelectorAll(".nosotros__contenedores");
const lightbox = document.querySelector(".contenedor__lightbox");
const lightboxImg = document.querySelector(".lightbox--img img");
const titulo = document.querySelector(".lightbox--titulo");
const parrafo = document.querySelector(".lightbox--parrafo");

const buttonCerrar = document.querySelector(".lightbox--button");

contenedorContenido.forEach((contenido, i) => {
	contenedorContenido[i].addEventListener("click", (e)=>{
		e.preventDefault();
		let contenidoImg = contenido.querySelector(".nosotros__contenedores img").src;
		let contenidoTitulo = contenido.querySelector(".nosotros__contenedores h2").textContent;
		let contenidoParrafo = contenido.querySelector(".nosotros__contenedores p").textContent;

		lightbox.classList.add("contenedor__lightbox--active");
		lightboxImg.setAttribute("src", contenidoImg);
		titulo.innerHTML=contenidoTitulo;
		parrafo.innerHTML=contenidoParrafo;
	})
})

buttonCerrar.addEventListener("click", ()=> {
	lightbox.classList.remove("contenedor__lightbox--active");
})

//Galeria servicios
const contenedorServicio1 = document.getElementById("servicios-1");
const contenedorServicio2 = document.getElementById("servicios-2");
const contenedorServicio3 = document.getElementById("servicios-3");
const contenedorServicio4 = document.getElementById("servicios-4");

const tittleServicio1=document.getElementById("title-servicio-1");
const tittleServicio2=document.getElementById("title-servicio-2");
const tittleServicio3=document.getElementById("title-servicio-3");
const tittleServicio4=document.getElementById("title-servicio-4");

const buttonServicio1=document.getElementById("button-servicio-1");
const buttonServicio2=document.getElementById("button-servicio-2");
const buttonServicio3=document.getElementById("button-servicio-3");
const buttonServicio4=document.getElementById("button-servicio-4");

window.onload =() => {
	
	reiniciarEstilos();

	contenedorServicio1.style.display="flex";
	tittleServicio1.style.width="150%";
	tittleServicio1.style.backgroundColor="#FF4C29";

	buttonServicio1.addEventListener("click", galeriaServicio1);
	buttonServicio2.addEventListener("click", galeriaServicio2);
	buttonServicio3.addEventListener("click", galeriaServicio3);
	buttonServicio4.addEventListener("click", galeriaServicio4);
}

function reiniciarEstilos () {
	contenedorServicio1.style.display="none";
	tittleServicio1.removeAttribute("style");
	contenedorServicio2.style.display="none";
	tittleServicio2.removeAttribute("style")
	contenedorServicio3.style.display="none";
	tittleServicio3.removeAttribute("style");
	contenedorServicio4.style.display="none";
	tittleServicio4.removeAttribute("style");
}

function cambioEstilos (contenedor, titulo) {
	contenedor.style.display="flex";
	titulo.style.width="150%";
	titulo.style.backgroundColor="#FF4C29";
}

function galeriaServicio1 () {
	reiniciarEstilos();
	cambioEstilos(contenedorServicio1, tittleServicio1);
}
function galeriaServicio2 () {
	reiniciarEstilos();
	cambioEstilos(contenedorServicio2, tittleServicio2);
}
function galeriaServicio3 () {
	reiniciarEstilos();
	cambioEstilos(contenedorServicio3, tittleServicio3);
}
function galeriaServicio4 () {
	reiniciarEstilos();
	cambioEstilos(contenedorServicio4, tittleServicio4);
}