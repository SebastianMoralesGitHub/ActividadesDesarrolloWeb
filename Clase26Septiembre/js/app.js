import { Persona } from "./persona.js";
import { ComputerChoiseDisplay } from "./dom.js";
import { UserChoiseDisplay } from "./dom.js";
import { ResultDisplay } from "./dom.js";

const SectionMain = document.createElement("section");
SectionMain.classList.add("main");
const Seccion = `
    <section>
        <p>Otro sección </p>
    </section
    `;
SectionMain.innerHTML = Seccion;
document.body.appendChild(SectionMain);
for(let i = 0; i<Persona.length+1;i++)
{
    const ParrafoPrincipal = document.createElement("p");
    ParrafoPrincipal.innerHTML = Persona[i].Nombre+ ' ' +Persona[i].Apellido;
    document.body.appendChild(ParrafoPrincipal);
}