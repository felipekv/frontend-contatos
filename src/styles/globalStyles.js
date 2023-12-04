import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-secondary: #3FEFBE;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        --color-success: #3FE864;
        --color-negative: #E83F5B;

        --font-size-title: 1rem;
        --font-size-paragraph: 0.75rem;

        --font-weight-bold: 700;
        --font-weight-regular: 400;

        --font-style-italic: italic;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body, html{
        width: 100vw;
        height: 100vh;
    }
    
    body{
        background-color: var(--color-grey-1);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, button, input, select, option, label, textarea{
        font-family: "Inter", sans-serif;
    }

    ul,ol{
        list-style: none;
    }

    button, link{
        cursor: pointer;
        appearance: none;
        border: none;
    }

    input, textarea, select{
        border-radius: 0;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    #root{
        width: 100%;
        height: 100%;
    }
`;