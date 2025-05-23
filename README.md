# React + Vite

## SOURCES

- [NavLink](https://reactrouter.com/api/components/NavLink) -> In Navbar.jsx -> line 1-24
- [NavLink](https://api.reactrouter.com/v7/functions/react_router.NavLink.html) -> Navbar.jsx -> line 1-24
- [Embedded Youtube-video](https://developers.google.com/youtube/player_parameters) -> YoutubeEmbed.jsx -> Voor het integreren van de uitlegvideo’s op de Making-Of pagina’s maak ik gebruik van een iframe component die echt gebaseerd is op de richtlijnen van youtube zelf.
- [pathname](https://surajsharma.net/blog/current-url-in-react) Navbar.jsx -> line 22 -> Om visueel aan te duiden op welke pagina de gebruiker zich bevindt (bijv. rode lijn onder "Making-Of"), gebruiken we het window.location.pathname object om het huidige pad op te halen. Dus gaat dynamisch een rode lijn (active css class) aan toe voegen
- [useParams](https://api.reactrouter.com/v7/functions/react_router.useParams.html) MakingOfDetails.jsx -> line 6 -> Ik gebruik de useParams() van React Router om het dynamische deel uit de URL(:projectId) op te halen. Dit is nodig om per sprookje de juiste "Making-of"-pagina te tonen.
- [GSAP] Tijdens de implementatie van de animatie voor de sprookjespagina heb ik gebruik gemaakt van GSAP. Om vertrouwd te raken met de syntax en mogelijkheden binnen React heb ik volgende bronnen geraadpleegd:
  (https://gsap.com/resources/React/) (https://gsap.com/docs/v3/Installation/) (https://gsap.com/docs/v3/Eases/) (https://gsap.com/docs/v3/) (https://gsap.com/docs/v3/GSAP/gsap.fromTo()/) (https://gsap.com/community/forums/topic/22264-react-hook-useeffect-greensock-antipattern/) (https://gsap.com/cheatsheet/) (https://www.youtube.com/watch?v=m6PDUIF24v4&ab_channel=WebDevSimplified)
- [Timeline GSAP](https://gsap.com/docs/v3/GSAP/Timeline/) (https://gsap.com/docs/v3/GSAP/gsap.timeline()/) (https://www.youtube.com/watch?v=T0_Y4oCjLxw&list=PLkY85cDHOEpt96vm9LEfs1kLlT8ECwPTs&ab_channel=DesignCourse) -> I used the GSAP timeline to coordinate multiple animations in a smooth and structured way. It allows elements like the chapter title, frame, and Prince Ivan to appear in a specific sequence, with precise timing and overlap. This makes it easy to control and update.

-[React refresh problem](https://www.youtube.com/watch?v=fuGu-Ponjf8&ab_channel=ToThePointCode) -[GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) -> To create dynamic animations on scroll, I used GSAP ScrollTrigger. This plugin allows elements to animate based on the user's scroll position. For example, in the feather scene (scene 4), each feather is:
randomly positioned on the screen; animated to float upward with a subtle left/right drift;
