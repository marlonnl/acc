import { createGlobalStyle } from 'styled-components'
import { color } from './colors'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", sans-serif;
    list-style-type: none;
  }

	body {
    background-color: ${color.bg};
	}

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }

  .rotate {
  	/* transition: transform 0.5s ease-in-out; */

		:hover {
			/* transform: rotate(45deg); */
      animation: popit 0.75s linear infinite forwards;

      @keyframes popit {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(90deg);
        }
        100% {
          transform: rotate(180deg);
        }
      }
		}
	}
`
