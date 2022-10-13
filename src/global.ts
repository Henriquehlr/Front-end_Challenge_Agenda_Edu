import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');
* {
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

:root {
  --font-smallest: 12px;
  --font-small: 14px;
  --font-medium: 18px;
  --font-large: 26px;
  --font-larger: 32px;

  --default-title-color: #32325d;
  --default-dark-gray: #ced4da;
  --default-gray: #8898aa;
  --success-color: #2dce89;
  --primary-color: #354371;
  --danger-color: #f5365c;
  --info-color: #11cdef;
  --warning-color: #fb6340;
}

label.required::after {
  content: ' *';
  color: red;
}

.bold div span{
  color:#B9335A !important;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.spinner.small {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 35px;
  height: 35px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#global-modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;
}

*body {
  margin: 0 ;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;
