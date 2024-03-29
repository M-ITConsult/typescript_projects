import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import '../tutorials/tutorial.ts';
import '../function/function.ts';
import '../alias/alias.ts';
import '../intersections/intersections.ts';
import '../interfaces/interfaces.ts';
import '../tuples/tuples.ts';
import '../enum/enum.ts';
import '../unknow/unknow.ts';
import '../modules/modules.ts';
import '../imports/imports.ts';
import '../guarding/guard.ts';
import '../type_predicate/type_predicate.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
