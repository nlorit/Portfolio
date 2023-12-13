import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Header() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="main_div_header" >
      <h1 className="h1_header">Hello and welcome! I'm Nathan LORIT, </h1>

      <p>
        a dedicated IT student at CESI engineering school, fueled by a profound curiosity for technology and a passion for solving complex problems. In the realm of IT, I find both challenge and fulfillment, constantly seeking innovative solutions to push the boundaries of what's possible.
      </p>
      <p>
        As a student in the dynamic field of IT, I've had the privilege of immersing myself in various facets of technology, gaining hands-on experience and honing my skills in areas such as [mention specific areas of focus or interest, e.g., software development, network security, data analytics]. This journey has not only enriched my academic pursuits but has also fueled my desire to contribute meaningfully to the ever-evolving landscape of information technology.
      </p>
      <div className="div_skills">
        <Slider {...settings}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" /><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" /></svg>
          </div >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" clipRule="evenodd"><path fill="#00549d" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd" /><path fill="#0086d4" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd" /><path fill="#0075c0" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clipRule="evenodd" /><path fill="#fff" fillRule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clipRule="evenodd" /></svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><linearGradient id="SNASnMitCxQrIYk4GDibta" x1="18.208" x2="34.159" y1="2.413" y2="46.236" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f09701" /><stop offset="1" stopColor="#e36001" /></linearGradient><path fill="url(#SNASnMitCxQrIYk4GDibta)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z" /><path fill="#f09601" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z" /><path fill="#fff" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z" /><path fill="#d6e0e9" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" /><path d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z" opacity=".05" /><path d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z" opacity=".07" /></svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z" /><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z" /><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z" /><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z" /><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z" /><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z" /><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z" /></g></svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#009688" d="M35.7,34.7c-7.7,0-13.2-8.9-13.4-9.3l-0.6-1l0.6-1C22.5,22.9,28,14,35.7,14C41.4,14,46,18.6,46,24.3 S41.4,34.7,35.7,34.7z M26.4,24.3c1.5,2,5.1,6.3,9.2,6.3c3.5,0,6.3-2.8,6.3-6.3c0-3.5-2.8-6.3-6.3-6.3C31.5,18,27.9,22.3,26.4,24.3 z" /><path fill="#009688" d="M12.3,34.7C6.6,34.7,2,30,2,24.3S6.6,14,12.3,14c7.9,0,13.2,8.9,13.4,9.3l0.6,1l-0.6,1 C25.5,25.7,20,34.7,12.3,34.7z M12.3,18C8.8,18,6,20.8,6,24.3c0,3.5,2.8,6.3,6.3,6.3c4.2,0,7.8-4.3,9.3-6.3 C20.2,22.3,16.6,18,12.3,18z" /><path fill="#009688" d="M10 23h6v2h-6V23zM32 23h6v2h-6V23z" /><path fill="#009688" d="M34,21h2v6h-2V21z" /></svg>
          </div>
          <div>
            <svg height="100px" width="100px" xmlns="http://www.w3.org/2000/svg"><path d="m852.97077 1013.9363c-6.55238-.4723-13.02857-2.1216-17.00034-4.3296-2.26232-1.2576-3.98589-2.8032-4.66223-4.1807l-.4024-.8196v-25.70807-25.7081l.31843-.6465c1.42297-2.889 5.96432-5.4935 12.30378-7.0562 2.15195-.5305 5.2586-1.0588 7.79304-1.3252 2.58797-.2721 9.44765-.2307 12.02919.073 6.86123.8061 12.69967 2.6108 16.29768 5.0377 1.38756.9359 2.81137 2.4334 3.29371 3.4642l.41358.8838-.0354 25.6303-.0354 25.63047-.33195.6744c-.18257.3709-.73406 1.1007-1.22553 1.6216-2.99181 3.1715-9.40919 5.5176-17.8267 6.5172-1.71567.2038-9.16916.3686-10.92937.2417zm12.07501-22.02839c-.0252-.0657-1.00472-.93831-2.17671-1.93922s-2.18138-1.86687-2.24309-1.92436c-.0617-.0575.15481-.26106.48117-.45237.32635-.19131.95163-.7235 1.3895-1.18265 1.2805-1.34272 1.88466-3.00131 1.88466-5.17388 0-2.1388-.65162-3.8645-1.95671-5.1818-1.31533-1.3278-2.82554-1.8983-5.02486-1.8983-3.39007 0-5.99368 1.9781-6.82468 5.1851-.28586 1.1031-.28432 3.33211.003 4.31023.74941 2.55136 2.79044 4.40434 5.33062 4.83946.8596.14724.97605.21071 1.5621.85144.34829.38078 1.06301 1.14085 1.58827 1.68904l.95501.9967h2.53878c1.39633 0 2.51816-.0537 2.49296-.11939zm-8.70653-7.10848c-.61119-.31868-.84225-.56599-1.19079-1.27453-.26919-.54724-.31522-.85851-.31824-2.15197-.003-1.3143.0388-1.5983.31987-2.169.45985-.9339 1.09355-1.376 2.07384-1.4469 1.36454-.099 2.15217.5707 2.56498 2.1801.50612 1.97321-.0504 4.07107-1.26471 4.76729-.63707.36527-1.58737.40659-2.18495.095zm-11.25315 3.66269c2.66179-.5048 4.1728-2.0528 4.1728-4.27495 0-1.97137-.97548-3.12004-3.6716-4.32364-1.54338-.689-2.10241-1.1215-2.10241-1.6268 0-.4188.53052-.8777 1.14813-.993.60302-.1126 2.20237.1652 3.14683.5467l.79167.3198v-1.7524-1.7525l-.85923-.1906c-.53103-.1178-1.64689-.1885-2.92137-.1849-1.80528 0-2.15881.044-2.83818.3138-1.98445.7878-2.92613 2.1298-2.91107 4.1485.0141 1.8898 1.01108 3.06864 3.49227 4.12912 1.46399.62572 2.05076 1.10218 2.05076 1.66522 0 1.1965-1.99362 1.34375-4.10437.30315-.57805-.28498-1.09739-.54137-1.1541-.56976-.0567-.0284-.10311.79023-.10311 1.81917 0 1.86239.002 1.87137.33919 1.99974 1.26979.48278 4.07626.69787 5.52379.42335zm30.4308-1.72766v-1.58098h-2.40584-2.40583v-5.43035-5.4303h-2.13089-2.13088v7.0113 7.01131h4.53672 4.53672zm-14.84745-27.70503c4.23447-.2937 7.4086-.8482 10.20178-1.7821 2.78264-.9304 4.42643-2.0562 4.79413-3.2834.14166-.4729.13146-.6523-.0665-1.1708-.88775-2.3245-5.84694-4.1104-13.42493-4.8345-3.24154-.3098-9.13671-.2094-12.22745.2081-4.71604.6372-8.54333 1.8208-10.2451 3.1683-3.44251 2.726.19793 5.7242 8.66397 7.1354 3.67084.6119 8.42674.828 12.30414.559z" fill="#00bcf2" transform="translate(-810.906 -928.981)" /></svg>          </div>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"><g fill="#339af0" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M34.55469,3.98438c-0.77969,-0.02622 -1.5958,0.10972 -2.41406,0.375c-1.63652,0.53057 -3.35142,1.56451 -5.11133,2.99609c-0.68971,0.56104 -1.38567,1.20236 -2.08398,1.88281c-0.68291,-0.66318 -1.36458,-1.28728 -2.03906,-1.83594c-1.75849,-1.43043 -3.46875,-2.46478 -5.10156,-2.99414c-1.63281,-0.52936 -3.25746,-0.54577 -4.5918,0.22461c-1.33433,0.77038 -2.13227,2.18454 -2.49024,3.86328c-0.35796,1.67874 -0.31853,3.6779 0.04102,5.91602c0.12489,0.7774 0.303,1.59297 0.50586,2.42383c-0.76244,0.23107 -1.50285,0.47402 -2.18945,0.74219c-2.0721,0.80931 -3.78663,1.77754 -5.03516,2.92969c-1.24853,1.15215 -2.05469,2.55049 -2.05469,4.08594c0,1.53545 0.80616,2.93183 2.05469,4.08398c1.24852,1.15215 2.96306,2.12233 5.03516,2.93164c0.73417,0.28675 1.52904,0.54495 2.34961,0.78906c-0.29516,1.10284 -0.53429,2.17303 -0.69727,3.1875c-0.35984,2.23992 -0.39783,4.23933 -0.03906,5.92187c0.35878,1.68255 1.15712,3.10472 2.49805,3.87891c1.34093,0.77419 2.97286,0.75518 4.60938,0.22461c1.63652,-0.53057 3.34947,-1.56256 5.10938,-2.99414c0.68336,-0.55587 1.3746,-1.18998 2.06641,-1.86328c0.69543,0.67736 1.38944,1.31443 2.07617,1.87305c1.75849,1.43043 3.4707,2.46282 5.10352,2.99219c1.63281,0.52936 3.25747,0.54577 4.5918,-0.22461c1.33433,-0.77038 2.13032,-2.18454 2.48828,-3.86328c0.35796,-1.67874 0.31853,-3.67595 -0.04102,-5.91406c-0.16341,-1.01722 -0.4027,-2.09096 -0.69922,-3.19727c0.84768,-0.25006 1.66765,-0.5152 2.42383,-0.81055c2.0721,-0.80931 3.78663,-1.77949 5.03516,-2.93164c1.24853,-1.15215 2.05469,-2.54854 2.05469,-4.08398c0,-1.53545 -0.80616,-2.93379 -2.05469,-4.08594c-1.24853,-1.15215 -2.96306,-2.12037 -5.03516,-2.92969c-0.69645,-0.27202 -1.44823,-0.51813 -2.22266,-0.75195c0.20451,-0.83595 0.38608,-1.65737 0.51172,-2.43945c0.35983,-2.23991 0.39784,-4.24128 0.03906,-5.92383c-0.35877,-1.68255 -1.15907,-3.10277 -2.5,-3.87695c-0.67047,-0.38709 -1.41367,-0.57535 -2.19336,-0.60156zM34.46289,6.01953c0.48926,0.01338 0.90664,0.12981 1.26367,0.33594c0.71406,0.41226 1.24186,1.21462 1.52344,2.53516c0.28158,1.32053 0.27185,3.1047 -0.06055,5.17383c-0.11381,0.70843 -0.27905,1.45924 -0.4668,2.22852c-2.0455,-0.49227 -4.28691,-0.85757 -6.67578,-1.07227c-1.19924,-1.66137 -2.43147,-3.17492 -3.67383,-4.51758c0.65714,-0.64146 1.31002,-1.2414 1.94727,-1.75977c1.62571,-1.32243 3.16481,-2.22226 4.44922,-2.63867c0.6422,-0.20821 1.2041,-0.29854 1.69336,-0.28516zM15.48633,6.02539c0.49209,-0.01374 1.05516,0.07635 1.69922,0.28516c1.28811,0.41761 2.82991,1.31705 4.45703,2.64063c0.62446,0.50796 1.26272,1.09648 1.90625,1.72266c-1.25155,1.35365 -2.49397,2.88031 -3.70117,4.55664c-2.37877,0.21861 -4.61105,0.58588 -6.64648,1.08008c-0.18635,-0.76501 -0.35161,-1.51196 -0.46484,-2.2168c-0.33269,-2.07092 -0.34099,-3.85535 -0.05859,-5.17969c0.28239,-1.32434 0.8145,-2.13276 1.53516,-2.54883c0.36032,-0.20803 0.78135,-0.32611 1.27344,-0.33984zM24.97656,12.14258c0.81461,0.88649 1.62939,1.85658 2.4375,2.90039c-0.79403,-0.03311 -1.59777,-0.05274 -2.41406,-0.05274c-0.83254,0 -1.65159,0.02026 -2.46094,0.05469c0.80829,-1.04462 1.62269,-2.01518 2.4375,-2.90234zM25,17.00977c1.35989,0 2.68535,0.05588 3.97461,0.15039c0.88712,1.27416 1.75404,2.6259 2.58008,4.05664c0.72582,1.25715 1.38264,2.51237 1.98047,3.75195c-0.60414,1.25603 -1.27197,2.52822 -2.00781,3.80273c-0.64774,1.12191 -1.32415,2.18746 -2.01172,3.21484c-1.45631,0.12172 -2.96532,0.18945 -4.51562,0.18945c-1.58762,0 -3.13054,-0.07175 -4.61914,-0.19922c-0.67612,-1.01261 -1.34112,-2.06202 -1.97852,-3.16602c-0.73416,-1.2716 -1.39877,-2.54147 -2.00195,-3.79492c0.60572,-1.26053 1.27331,-2.53745 2.01172,-3.81641c0.82171,-1.42324 1.6861,-2.76716 2.56836,-4.03516c1.30314,-0.09664 2.64398,-0.1543 4.01953,-0.1543zM31.54883,17.41016c1.64847,0.20568 3.19626,0.49125 4.63672,0.83398c-0.42742,1.40115 -0.95389,2.86467 -1.5918,4.375c-0.41418,-0.79842 -0.84315,-1.59956 -1.30664,-2.40234c-0.56169,-0.97287 -1.1467,-1.90038 -1.73828,-2.80664zM18.34375,17.42578c-0.5791,0.88932 -1.14891,1.7988 -1.69922,2.75195c-0.46944,0.81309 -0.90731,1.625 -1.32617,2.43359c-0.6324,-1.50125 -1.1557,-2.95645 -1.58008,-4.34961c1.42972,-0.34336 2.96848,-0.62791 4.60547,-0.83594zM38.16406,18.77539c0.70888,0.21449 1.3935,0.43832 2.02148,0.68359c1.91015,0.74606 3.4211,1.62951 4.40039,2.5332c0.97929,0.90369 1.4043,1.76551 1.4043,2.60156c0,0.83605 -0.42501,1.69787 -1.4043,2.60156c-0.97929,0.90369 -2.49024,1.78714 -4.40039,2.5332c-0.69785,0.27256 -1.46459,0.51973 -2.26172,0.75391c-0.56863,-1.75878 -1.29442,-3.59365 -2.1582,-5.4668c0.99316,-2.15054 1.79546,-4.24734 2.39844,-6.24023zM11.80273,18.78516c0.59607,1.97301 1.38808,4.04896 2.36719,6.17773c-0.86945,1.88406 -1.59883,3.72936 -2.16992,5.49805c-0.76904,-0.22802 -1.50979,-0.46849 -2.18555,-0.73242c-1.91015,-0.74606 -3.4211,-1.62951 -4.40039,-2.5332c-0.97929,-0.90369 -1.4043,-1.76551 -1.4043,-2.60156c0,-0.83605 0.42501,-1.69787 1.4043,-2.60156c0.97929,-0.90369 2.49024,-1.78714 4.40039,-2.5332c0.61832,-0.2415 1.29146,-0.46215 1.98828,-0.67383zM25,20c-2.74958,0 -5,2.25042 -5,5c0,2.74958 2.25042,5 5,5c2.74958,0 5,-2.25042 5,-5c0,-2.74958 -2.25042,-5 -5,-5zM15.3418,27.36523c0.4207,0.81262 0.85823,1.62805 1.33008,2.44531c0.36917,0.63943 0.7462,1.26185 1.12891,1.87305c-1.34296,-0.18622 -2.61955,-0.42199 -3.81836,-0.70117c0.38123,-1.16761 0.83732,-2.37963 1.35938,-3.61719zM34.61914,27.36523c0.52414,1.24049 0.98047,2.45445 1.36328,3.625c-1.20261,0.27886 -2.48313,0.51382 -3.83008,0.69922c0.38773,-0.61867 0.77064,-1.24888 1.14453,-1.89648c0.46838,-0.81125 0.90421,-1.62105 1.32227,-2.42773zM13.40625,32.92383c1.80982,0.42874 3.77147,0.75808 5.85156,0.97266c1.38857,2.00838 2.83516,3.81301 4.29102,5.39063c-0.65102,0.63475 -1.29626,1.23047 -1.92773,1.74414c-1.62571,1.32243 -3.16677,2.22031 -4.45117,2.63672c-1.28441,0.41641 -2.24298,0.36148 -2.95703,-0.05078c-0.71406,-0.41226 -1.2399,-1.21462 -1.52149,-2.53516c-0.28158,-1.32053 -0.2738,-3.10275 0.05859,-5.17187c0.15079,-0.93866 0.37615,-1.94378 0.65625,-2.98633zM36.56055,32.93164c0.28244,1.04891 0.50847,2.05771 0.66016,3.00195c0.33269,2.07092 0.34099,3.85535 0.05859,5.17969c-0.28239,1.32434 -0.8106,2.13471 -1.53125,2.55078c-0.72065,0.41607 -1.68845,0.47035 -2.97656,0.05273c-1.28811,-0.41761 -2.82991,-1.31705 -4.45703,-2.64062c-0.63601,-0.51736 -1.28573,-1.11791 -1.94141,-1.75781c1.46562,-1.58377 2.92242,-3.3976 4.32031,-5.41797c2.08534,-0.21314 4.05243,-0.54052 5.86719,-0.96875zM21.86719,34.10156c1.02676,0.05596 2.06706,0.09375 3.13281,0.09375c1.0305,0 2.03706,-0.03552 3.03125,-0.08789c-1.01629,1.37117 -2.05222,2.61773 -3.08398,3.74023c-1.03114,-1.1249 -2.06512,-2.37369 -3.08008,-3.74609z"></path></g></g></svg>
          </div>
        </Slider>
      </div >

      <p>
        On this platform, I invite you to explore a snapshot of my academic and practical endeavors. From innovative projects to a showcase of technical skills, each section reflects my commitment to excellence and my enthusiasm for the possibilities that IT holds. Whether you're a fellow enthusiast, a potential collaborator, or an industry professional, I'm excited to share my journey and connect with like-minded individuals.
      </p>
      <p>
        Feel free to navigate through my projects, delve into my educational background, and reach out for collaboration or discussion. Let's embark on a technological journey together!
      </p>
      <p>
        Thank you for visiting.
      </p>


    </div>


  )
}
