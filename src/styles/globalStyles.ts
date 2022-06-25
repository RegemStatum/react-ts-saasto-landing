import { createGlobalStyle } from "styled-components";
import st from ".";

const GlobalStyle = createGlobalStyle`
// Global styles
body {
  font-family: "Inter", sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  button {
    font-family: "Poppins", sans-serif;
  }
}

.container {
  margin: 0 ${st.indentations.ind_400};


  @media (min-width: ${st.breakpoints.sm}) {
    margin: 0 ${st.indentations.ind_1000};
  }

  @media (min-width: ${st.breakpoints.md}) {
    margin: 0 ${st.indentations.ind_1400};
  }

  @media (min-width: ${st.breakpoints.lg}) {
    max-width: 950px;
    margin: 0 auto;
  }

  @media (min-width: ${st.breakpoints.xl}) {
    max-width: 1170px;
  }
}

h2 {
  font-size: ${st.fontSizes.fs_700};
  font-weight: 600;
  line-height: 150%;
  color: ${st.colors.nt_4};
}

p {
  line-height: 180%;
  color: ${st.colors.nt_5};
}

@media screen and (min-width: ${st.breakpoints.md}) {
  h2 {
    font-size: ${st.fontSizes.fs_1000};
    line-height: 70px;
  }

  p {
    font-size: ${st.fontSizes.fs_500};
    line-height: 36px;
  }
}

// Fonts
// ----------
// Inter
// ----------

@font-face {
  font-family: "Inter", sans-serif;
  src: local("Inter"),
    url(../assets/fonts/Inter/Inter-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Inter", sans-serif;
  src: local("Inter"),
    url(../assets/fonts/Inter/Inter-Medium.ttf) format("truetype");
}

// ----------
// Poppins
// ----------

@font-face {
  font-family: "Poppins", sans-serif;
  src: local("Poppins"),
    url(../assets/fonts/Poppins/Poppins-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins", sans-serif;
  src: local("Poppins"),
    url(../assets/fonts/Poppins/Poppins-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins", sans-serif;
  src: local("Poppins"),
    url(../assets/fonts/Poppins/Poppins-Bold.ttf) format("truetype");
}

// ----------
// Nunito Sans
// ----------
@font-face {
  font-family: "Nunito Sans", sans-serif;
  src: local("Nunito Sans"),
    url(../assets/fonts/NunitoSans/NunitoSans-Regular.ttf) format("truetype");
}


// Reset
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}


ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select,
time,
label {
  font: inherit;
  border: none;
}

button {
  padding: 0;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyle;
