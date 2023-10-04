// se declara una variable para manejar el body
const body = document.body;

const header = document.createElement("header");
const HeaderIMG = document.createElement("img");
HeaderIMG.src="./imgs/AcutorLogo.png";
HeaderIMG.alt="Logo de la banda Acutor";
header.appendChild(HeaderIMG);
body.appendChild(header);

const nav = document.createElement("nav");
const navList = document.createElement("ul");
const navItems = ["Historia", "Dios Ha Muerto", "Reunión"];
navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    navList.appendChild(li);
});
nav.appendChild(navList);
body.appendChild(nav);

const main = document.createElement("main");
main.style.padding = "1rem";
body.appendChild(main);
const contenidoPrincipal = document.createElement("section");
main.appendChild(contenidoPrincipal);
const titulo = document.createElement("h1");
titulo.textContent="Biografia: ";
contenidoPrincipal.appendChild(titulo);
const parrafos = ["Acutor fue una banda de thrash metal (también se le consideraba black metal) de origen colombiana. Una banda que es muy recordada por los fanáticos de la escena del metal en Colombia y también en lo que es el thrash underground."
,"La banda fue formada por Ricardo Márquez (D.E.P.). Un día él puso un anuncio en una tienda de discos solicitando un guitarrista y de esa manera entra a la banda Carlos Montoya. Luego de eso la última persona en entrar a la formación es Francy Helena Polo para tocar el bajo, y fue con esta formación que se graba su único disco, Dios ha Muerto",
"Acutor lanzó únicamente un disco en el año 1998, un disco muy potente, muy profesional y con influencias de bandas reconocidas, incluso cuenta con un cover de Sodom. Irónicamente la banda fue más reconocida por no ser muy conocida, sino que era únicamente una de las más paradigmáticas en su país de origen."]
parrafos.forEach(parrafo=>{
    const p = document.createElement("p");
    p.textContent=parrafo;
    contenidoPrincipal.appendChild(p);
})
const videoalbum = document.createElement("iframe");
videoalbum.src="https://www.youtube.com/embed/FKCeSfRaADc";
videoalbum.title="ACUTOR - Dios Ha Muerto (FULL ALBUM) Colombia";
videoalbum.frameBorder="0";
videoalbum.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
contenidoPrincipal.appendChild(videoalbum);

const aside = document.createElement("aside");
const imagendelaside = document.createElement("img");
imagendelaside.src="./imgs/DiosHaMuerto.jpg";
imagendelaside.alt="Dios Ha Muerto Album";
aside.appendChild(imagendelaside);
const Descripciones = ["Género: Thrash/Black metal","Temas liricos: Nihilismo, anticristianismo, suicidio, odio",
"Pais de origen: Colombia","Periodo de actividad: 1990 - 1999"];
Descripciones.forEach(titulito=>{
    h2 = document.createElement("h4");
    h2.textContent = titulito;
    aside.appendChild(h2);
})
main.appendChild(aside);

const footer = document.createElement("footer");
footer.innerHTML = "Sebastian Morales Cano CC: 1000899164, Desarrollo Web con nuevas tecnologías 2023-2";
body.appendChild(footer);

