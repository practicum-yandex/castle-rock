import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline-color: rgb(77, 144, 254);
  font: inherit;
  font-size: 100%;
  font-weight: inherit;
  font-style: inherit;
  color: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input,
textarea,
button {
  border-radius: 0;
}

button {
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  cursor: pointer;
}

a {
  background-color: transparent;
  cursor: pointer;
}

button,
input,
optgroup,
select,
textarea {
  line-height: 1.15;
}

button,
input {
  overflow: visible;
}

input,
optgroup,
select,
textarea {
  line-height: 1.15;
}

input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

textarea {
  overflow: auto;
  resize: none;
}

a,
a:hover,
a:active,
a:visited,
input,
input:hover,
input:active,
textarea,
textarea:hover,
textarea:active,
button,
button:hover,
button:active {
  outline: 0;
  text-decoration: none;
}

a:focus,
input:focus,
textarea:focus,
button:focus {
  outline: 0;
}

html {
  line-height: 1.15;
}

pre {
  font-family: monospace;
  font-size: 1em;
}

abbr[title] {
  border-bottom: none;
  text-decoration: none;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  display: block;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
}

::-webkit-file-upload-button {
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

`;
