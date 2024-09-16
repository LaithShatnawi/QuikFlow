// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      width="150"
      height="50"
      viewBox="0 0 1500 280"
    >
      <g transform="matrix(1,0,0,1,-0.9090909090909918,-1.8407724527759797)">
        <svg
          viewBox="0 0 396 74"
          data-background-color="#ffffff"
          preserveAspectRatio="xMidYMid meet"
          height="280"
          width="1500"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,0.4864898625193632)">
            <svg viewBox="0 0 395.52 73.02702027496129" height="73.02702027496129" width="395.52">
              <g>
                <svg viewBox="0 0 509.21570362561465 94.01927971530249" height="73.02702027496129" width="395.52">
                  <g transform="matrix(1,0,0,1,113.69570362561466,12.993981494661924)">
                    <svg viewBox="0 0 395.52 68.03131672597864" height="68.03131672597864" width="395.52">
                      <g id="textblocktransform">
                        <svg viewBox="0 0 395.52 68.03131672597864" height="68.03131672597864" width="395.52" id="textblock">
                          <g>
                            <svg viewBox="0 0 395.52 68.03131672597864" height="68.03131672597864" width="395.52">
                              <g transform="matrix(1,0,0,1,0,0)">
                                <svg
                                  width="395.52"
                                  viewBox="1.2 -40.5 252.88000000000002 43.5"
                                  height="68.03131672597864"
                                  data-palette-color="#5a189a"
                                >
                                  <g class="wordmark-text-0" data-fill-palette-color="primary" id="text-0">
                                    <path
                                      d="M34.6 3L23.1 0.9 23.1-1.4 18 0Q13.1 0 9.88-1.23 6.65-2.45 4.73-4.83 2.8-7.2 2-10.68 1.2-14.15 1.2-18.7L1.2-18.7Q1.2-23.85 2.1-27.58 3-31.3 5.05-33.7 7.1-36.1 10.5-37.25 13.9-38.4 18.85-38.4L18.85-38.4Q23.8-38.4 27.2-37.25 30.6-36.1 32.7-33.68 34.8-31.25 35.7-27.53 36.6-23.8 36.6-18.7L36.6-18.7Q36.6-14.85 35.8-11.83 35-8.8 33.4-6.4L33.4-6.4 37.75-3.9 34.6 3ZM14.1-24.95L14.1-24.95 14.1-9.35 19.1-9.35Q21.6-9.35 22.68-9.93 23.75-10.5 23.75-12.55L23.75-12.55 23.75-28.15 18.7-28.15Q16.3-28.15 15.2-27.58 14.1-27 14.1-24.95ZM40.2-9L40.2-30 52.2-30 52.2-7.85 54.05-7.85Q56.25-7.85 57.22-8.3 58.2-8.75 58.2-10.4L58.2-10.4 58.2-30 70.2-30 70.2 0 64.2 0 60.7-3.4Q57.1 0.9 50.45 0.9L50.45 0.9Q45.1 0.9 42.65-1.38 40.2-3.65 40.2-9L40.2-9ZM88.2-30L88.2 0 76.2 0 76.2-28.5 88.2-30ZM75.55-35.65L75.55-35.65Q75.55-37 75.85-37.93 76.15-38.85 76.9-39.43 77.65-40 78.95-40.25 80.25-40.5 82.25-40.5L82.25-40.5Q84.25-40.5 85.52-40.25 86.8-40 87.55-39.43 88.3-38.85 88.6-37.93 88.9-37 88.9-35.65L88.9-35.65Q88.9-34.3 88.6-33.4 88.3-32.5 87.55-31.93 86.8-31.35 85.52-31.13 84.25-30.9 82.25-30.9L82.25-30.9Q80.8-30.9 79.57-31 78.35-31.1 77.45-31.58 76.55-32.05 76.05-33 75.55-33.95 75.55-35.65ZM111.24 0L124.19 0 116.94-15.7 123.89-30 110.94-30 106.59-20.1 106.19-20.1 106.19-39.9 94.19-39 94.19 0 106.19 0 106.19-11.9 106.59-11.9 111.24 0ZM149.99-13.9L149.99-22.85 139.79-22.85 139.79-27.9 150.89-27.9 152.39-37.5 127.79-37.5 127.79 0 139.79 0 139.79-13.9 149.99-13.9ZM155.99-5.65L155.99-39 167.99-39.9 167.99-8.6Q168.94-8.4 169.69-8.3 170.44-8.2 170.94-8.15L170.94-8.15 170.39 0.65Q162.74 0.65 160.24-0.25L160.24-0.25Q158.14-1 157.06-2.2 155.99-3.4 155.99-5.65L155.99-5.65ZM173.34-15L173.34-15Q173.34-23.05 177.09-26.98 180.84-30.9 189.24-30.9L189.24-30.9Q197.64-30.9 201.39-26.98 205.14-23.05 205.14-15L205.14-15Q205.14-6.95 201.39-3.03 197.64 0.9 189.24 0.9L189.24 0.9Q181.04 0.9 177.19-2.95 173.34-6.8 173.34-15ZM186.24-19.6L186.24-19.6 186.24-7.85 188.09-7.85Q190.29-7.85 191.26-8.3 192.24-8.75 192.24-10.4L192.24-10.4 192.24-22.15 190.39-22.15Q188.19-22.15 187.21-21.7 186.24-21.25 186.24-19.6ZM213.78 0L227.93 0 230.53-12.9 230.98-12.9 233.33 0 248.08 0 254.08-30 242.33-30 239.43-12.2 238.78-12.2 235.43-30 226.43-30 222.63-12.2 221.98-12.2 219.53-30 207.78-30 213.78 0Z"
                                      fill="#5a189a"
                                      data-fill-palette-color="primary"
                                    ></path>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                        </svg>
                      </g>
                    </svg>
                  </g>
                  <g>
                    <svg viewBox="0 0 97.63514249821252 94.01927971530249" height="94.01927971530249" width="97.63514249821252">
                      <g>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          x="0"
                          y="0"
                          viewBox="4.126 5.826761691052359 91.746 88.34823830894764"
                          enable-background="new 0 0 100 100"
                          xml:space="preserve"
                          height="94.01927971530249"
                          width="97.63514249821252"
                          class="icon-icon-0"
                          data-fill-palette-color="accent"
                          id="icon-0"
                        >
                          <path
                            d="M38.431 27.455C38.672 27.207 38.977 26.975 39.365 26.793 39.904 26.539 40.361 26.349 40.736 26.206 40.811 26.177 40.883 26.151 40.951 26.126 41.506 25.924 41.845 25.84 41.974 25.804A0.3 0.3 0 0 0 42.03 25.786C42.082 25.758 44.973 24.999 46.3 24.277 46.547 24.119 46.719 23.993 46.781 23.948 46.789 23.903 46.797 23.858 46.801 23.812 46.808 23.743 46.812 23.673 46.817 23.604L46.837 22.956C42.431 22.995 41.132 21.107 41.132 21.107S43.65 21.068 43.494 14.422 46.402 6.678 47.544 6.244C50.87 4.98 52.541 6.991 52.541 6.991 56.396 6.634 57.46 10.846 56.986 15.643S59.147 21.186 59.147 21.186C57.337 23.035 53.52 22.919 53.52 22.919L53.639 23.931S53.835 24.08 54.146 24.28C55.472 25.001 58.364 25.761 58.416 25.789 58.425 25.794 58.455 25.802 58.504 25.816L58.573 25.835C58.775 25.89 59.168 26.001 59.754 26.227 60.12 26.368 60.562 26.553 61.081 26.797 61.403 26.948 61.668 27.133 61.886 27.333 59.317 31.084 55.003 33.545 50.114 33.545A14.26 14.26 0 0 1 38.431 27.455M16.071 61.813C16.947 61.813 17.657 61.103 17.657 60.227V51.104H48.414V60.227A1.586 1.586 0 1 0 51.586 60.227V51.104H82.343V60.227A1.586 1.586 0 1 0 85.515 60.227V49.519C85.515 48.643 84.805 47.933 83.929 47.933H51.67V38.103A1.586 1.586 0 1 0 48.498 38.103V47.933H16.071C15.195 47.933 14.485 48.643 14.485 49.519V60.228C14.485 61.103 15.195 61.813 16.071 61.813M94.99 87.452A40.6 40.6 0 0 1 88.725 85.322C88.37 84.848 88.199 84.046 88.122 83.52 88.895 82.476 89.288 81.25 89.48 80.158 89.807 80.383 90.35 80.265 90.948 78.13 91.434 76.394 91.138 75.813 90.719 75.666 92.083 69.062 88.968 68.841 88.968 68.841S88.498 67.927 87.26 67.236C86.431 66.739 85.276 66.353 83.752 66.487 83.259 66.511 82.793 66.607 82.355 66.757H82.354C81.794 66.949 81.281 67.227 80.818 67.553A8.2 8.2 0 0 0 79.237 68.875C78.486 69.651 77.817 70.654 77.527 71.906A5.7 5.7 0 0 0 77.671 75.288C77.111 75.235 76.45 75.563 77.072 77.788 77.527 79.414 77.95 79.87 78.271 79.896 78.451 81.072 78.855 82.441 79.726 83.583 79.653 84.057 79.507 84.721 79.227 85.181 79.206 85.191 76.279 86.61 72.867 87.451A3.3 3.3 0 0 0 71.984 87.805C74.566 91.647 78.952 94.175 83.928 94.175S93.29 91.647 95.872 87.805A3.3 3.3 0 0 0 94.99 87.452M54.88 85.322C54.525 84.848 54.354 84.046 54.277 83.52 55.05 82.476 55.443 81.25 55.635 80.158 55.962 80.383 56.505 80.265 57.103 78.13 57.589 76.394 57.293 75.813 56.874 75.666 58.238 69.062 55.123 68.841 55.123 68.841S54.653 67.927 53.415 67.236C52.586 66.739 51.431 66.353 49.907 66.487 49.414 66.511 48.948 66.607 48.51 66.757H48.509C47.949 66.949 47.436 67.227 46.973 67.553A8.2 8.2 0 0 0 45.392 68.875C44.641 69.651 43.972 70.654 43.682 71.906A5.7 5.7 0 0 0 43.826 75.288C43.266 75.235 42.605 75.563 43.227 77.788 43.682 79.414 44.105 79.87 44.426 79.896 44.606 81.072 45.01 82.441 45.881 83.583 45.808 84.057 45.662 84.721 45.382 85.181 45.361 85.191 42.434 86.61 39.022 87.451A3.3 3.3 0 0 0 38.139 87.805C40.721 91.647 45.107 94.175 50.083 94.175S59.445 91.647 62.027 87.805A3.3 3.3 0 0 0 61.144 87.45C57.721 86.608 54.88 85.322 54.88 85.322M20.867 85.322C20.512 84.848 20.341 84.046 20.264 83.52 21.037 82.476 21.43 81.25 21.622 80.158 21.949 80.383 22.492 80.265 23.09 78.13 23.576 76.394 23.28 75.813 22.861 75.666 24.225 69.062 21.11 68.841 21.11 68.841S20.64 67.927 19.402 67.236C18.573 66.739 17.418 66.353 15.894 66.487 15.401 66.511 14.935 66.607 14.497 66.757H14.496C13.936 66.949 13.423 67.227 12.96 67.553A8.2 8.2 0 0 0 11.379 68.875C10.628 69.651 9.959 70.654 9.669 71.906A5.7 5.7 0 0 0 9.813 75.288C9.253 75.235 8.592 75.563 9.214 77.788 9.669 79.414 10.092 79.87 10.413 79.896 10.593 81.072 10.997 82.441 11.868 83.583 11.795 84.057 11.649 84.721 11.369 85.181 11.348 85.191 8.421 86.611 5.009 87.451A3.3 3.3 0 0 0 4.126 87.805C6.708 91.647 11.094 94.175 16.07 94.175S25.432 91.647 28.014 87.805A3.3 3.3 0 0 0 27.131 87.45C23.708 86.608 20.867 85.322 20.867 85.322"
                            fill="#5a189a"
                            data-fill-palette-color="accent"
                          ></path>
                        </svg>
                      </g>
                    </svg>
                  </g>
                </svg>
              </g>
              <defs></defs>
            </svg>
            <rect width="395.52" height="73.02702027496129" fill="none" stroke="none" visibility="hidden"></rect>
          </g>
        </svg>
      </g>
    </svg>
  );
};

export default Logo;
