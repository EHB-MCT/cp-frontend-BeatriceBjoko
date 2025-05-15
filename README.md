# React + Vite

## SOURCES

- [NavLink](https://reactrouter.com/api/components/NavLink) -> In Navbar.jsx -> line 1-24
- [NavLink](https://api.reactrouter.com/v7/functions/react_router.NavLink.html) -> Navbar.jsx -> line 1-24
- [Embedded Youtube-video](https://developers.google.com/youtube/player_parameters) -> YoutubeEmbed.jsx -> Voor het integreren van de uitlegvideo’s op de Making-Of pagina’s maak ik gebruik van een iframe component die echt gebaseerd is op de richtlijnen van youtube zelf.
- [pathname](https://surajsharma.net/blog/current-url-in-react) Navbar.jsx -> line 22 -> Om visueel aan te duiden op welke pagina de gebruiker zich bevindt (bijv. rode lijn onder "Making-Of"), gebruiken we het window.location.pathname object om het huidige pad op te halen. Dus gaat dynamisch een rode lijn (active css class) aan toe voegen
- [useParams](https://api.reactrouter.com/v7/functions/react_router.useParams.html) MakingOfDetails.jsx -> line 6 -> Ik gebruik de useParams() van React Router om het dynamische deel uit de URL(:projectId) op te halen. Dit is nodig om per sprookje de juiste "Making-of"-pagina te tonen.
