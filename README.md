# Vuurvogel — Interactieve Parallax Sprookjeswebsite

In een donkere boomgaard ontmoet prins Ivan een magische vuurvogel. Ze schenkt hem een veer met bijzondere kracht. Die veer helpt hem om de twaalf gevangen prinsessen te bevrijden uit de greep van de onsterfelijke reus Kashei. Met moed, magie en de betoverende dans van de vuurvogel verslaat Ivan de reus, en brengt hij licht en liefde terug in de boomgaard.

# Project Setup

1. Kloon de repository: git clone https://github.com/EHB-MCT/cp-frontend-BeatriceBjoko
2. Navigeer naar de projectmap: cd cp-frontend-BeatriceBjoko
3. Installeer de dependencies: npm install
4. Start de ontwikkelserver: npm run dev

## BRONNEN

- [NavLink](https://reactrouter.com/api/components/NavLink) -> In Navbar.jsx -> line 1-24
- [NavLink](https://api.reactrouter.com/v7/functions/react_router.NavLink.html) -> Navbar.jsx -> line 1-24
- [Embedded Youtube-video](https://developers.google.com/youtube/player_parameters) -> YoutubeEmbed.jsx -> Voor het integreren van de uitlegvideo’s op de Making-Of pagina’s maak ik gebruik van een iframe component die echt gebaseerd is op de richtlijnen van youtube zelf.
- [pathname](https://surajsharma.net/blog/current-url-in-react) Navbar.jsx -> line 22 -> Om visueel aan te duiden op welke pagina de gebruiker zich bevindt (bijv. rode lijn onder "Making-Of"), gebruiken we het window.location.pathname object om het huidige pad op te halen. Dus gaat dynamisch een rode lijn (active css class) aan toe voegen
- [useParams](https://api.reactrouter.com/v7/functions/react_router.useParams.html) MakingOfDetails.jsx -> line 6 -> Ik gebruik de useParams() van React Router om het dynamische deel uit de URL(:projectId) op te halen. Dit is nodig om per sprookje de juiste "Making-of"-pagina te tonen.
- [GSAP] Tijdens de implementatie van de animatie voor de sprookjespagina heb ik gebruik gemaakt van GSAP. Om vertrouwd te raken met de syntax en mogelijkheden binnen React heb ik volgende bronnen geraadpleegd:
  (https://gsap.com/resources/React/) (https://gsap.com/docs/v3/Installation/) (https://gsap.com/docs/v3/Eases/) (https://gsap.com/docs/v3/) (https://gsap.com/docs/v3/GSAP/gsap.fromTo()/) (https://gsap.com/community/forums/topic/22264-react-hook-useeffect-greensock-antipattern/) (https://gsap.com/cheatsheet/) (https://www.youtube.com/watch?v=m6PDUIF24v4&ab_channel=WebDevSimplified) (https://gsap.com/docs/v3/GSAP/gsap.to()/)
- [Timeline GSAP](https://gsap.com/docs/v3/GSAP/Timeline/) (https://gsap.com/docs/v3/GSAP/gsap.timeline()/) (https://www.youtube.com/watch?v=T0_Y4oCjLxw&list=PLkY85cDHOEpt96vm9LEfs1kLlT8ECwPTs&ab_channel=DesignCourse) -> Ik heb de GSAP-timeline gebruikt om meerdere animaties op een soepele en gestructureerde manier te coördineren. Hierdoor kunnen elementen zoals de hoofdstuktitel, het kader en Prins Ivan in een specifieke volgorde verschijnen, met nauwkeurige timing en overlapping. Dit maakt het eenvoudig om alles te beheren en aan te passen.

-[json niet gevonden bij mijn deploy op github pages](https://chatgpt.com/share/6830ab41-5a70-8008-952d-ec135a669e56) -> JSON fetch werkte niet

-[React refresh problem](https://www.youtube.com/watch?v=fuGu-Ponjf8&ab_channel=ToThePointCode) -> bij het refreshen: 404 error

-[GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) -> Om dynamische animaties bij het scrollen te maken, heb ik GSAP ScrollTrigger gebruikt. Deze plugin maakt het mogelijk om elementen te animeren op basis van de scrollpositie van de gebruiker.
Bijvoorbeeld, in de veer-scène (scène 4) wordt elke veer: willekeurig gepositioneerd op het scherm en geanimeerd om naar boven te zweven met een subtiele links/rechts-beweging.

-[scroll reveal](https://www.reactbits.dev/text-animations/scroll-reveal) -> Gebruikt in mijn component: ScrollRevealText.js.
Ik heb me laten inspireren door dit codevoorbeeld om hetzelfde effect te bekomen.

-[mousemove](https://javascript.info/mouse-drag-and-drop) (https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event) in FirebirdReveal.jsx

-[JS events: mousedown, mousemove, mouseup](https://www.youtube.com/watch?v=T-x8dDHS35o&ab_channel=CreativeDeveloper) -> in FirebirdReveal.jsx

-[Gsap: keyframes + CSS properties](https://gsap.com/resources/keyframes/) (https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/) -> Gebruikt in mijn component: ScrollRevealText.js → om mijn vuurvogel een stralend, wisselend effect te geven.

-[GSAP: ScrollTrigger.refresh()](<https://gsap.com/docs/v3/Plugins/ScrollTrigger/refresh()/>) -> In de prinsessenscène wou ik pas nadat de 12 prinsessen verschenen zijn (na een GSAP-timeline) de bijhorende tekstregels (met het ScrollRevealText-component) laten animeren bij scroll. Maar: de zinnen staan onzichtbaar (opacity: 0) bij het laden van de pagina. Omdat ze pas later zichtbaar worden via een animatie, weet ScrollTrigger niet dat er iets nieuws is verschenen. Daardoor werkt het scroll-effect soms niet goed of start het te laat. Dus een oplossing hier is die scrolltrigger refresh en laat ik hem zo weten dat er nieuwe inhoud is op de pagina, dus dat hij de triggers moet herberekenen, want zonder die refresh denkt ScrollTrigger dat de tekst nog onzichtbaar is, en werkt de animatie niet goed.

-[GSAP: killTweensOf()](<https://gsap.com/docs/v3/GSAP/gsap.killTweensOf()/>) -> in SceneFireBirdDance.jsx: ik gebruik gsap.killTweensOf(eggRef.current) om eerst alle andere animaties op het ei te stoppen (zoals het pulseren), voordat we de explosie-animatie starten. Zo zorgen we ervoor dat het ei niet tegelijk pulseert én explodeert, wat anders voor conflicten kan zorgen.

-[audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio) -> MusicToggleButton.jsx -> alles over het <audio> element: play en pause methodes
