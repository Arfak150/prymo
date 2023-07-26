import './nav.css'
import React, { useEffect } from 'react';

const Nav = () => {



  useEffect(() => {

    ScrollReveal().reveal('.navTop', {delay: 600, duration: 1200, distance:'-200px', origin:'bottom'});
    ScrollReveal().reveal('.navBott', {delay: 600, duration: 1200, distance:'-200px', origin:'top', reset:true});


  }, []);


  return (
    <div>
      <nav>
        <div className="navTop">
          <a href="#home">
            <svg width="160" height="52" viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4788 26.2478L6.63431 24.5942C6.08312 24.3737 5.75902 23.9741 5.66201 23.3954C5.565 22.8166 5.72374 22.3205 6.13824 21.9072L11.347 16.6984C11.7328 16.3126 12.1875 16.037 12.7112 15.8716C13.2348 15.7063 13.7722 15.6787 14.3234 15.789L16.473 16.2437C15.0124 17.9799 13.8483 19.558 12.9807 20.9779C12.1131 22.3977 11.2792 24.1543 10.4788 26.2478ZM34.7862 10.1255C35.0067 10.1255 35.2272 10.1806 35.4476 10.2909C35.6681 10.4011 35.861 10.5389 36.0264 10.7043C36.1917 10.8696 36.3295 11.0625 36.4398 11.283C36.55 11.5035 36.6051 11.724 36.6051 11.9444C36.7154 14.5075 36.1714 17.1669 34.9731 19.9229C33.7748 22.6788 32.0865 25.1454 29.9082 27.3226C28.42 28.8108 26.9869 30.003 25.6089 30.8992C24.231 31.7955 22.605 32.6426 20.7309 33.4408C20.3727 33.5786 20.0078 33.6475 19.6363 33.6475C19.2648 33.6475 18.9407 33.5097 18.664 33.2341L13.4966 28.0667C13.221 27.7911 13.0832 27.467 13.0832 27.0944C13.0832 26.7218 13.1521 26.3569 13.2899 25.9997C14.0891 24.1532 14.9368 22.5339 15.8331 21.1416C16.7293 19.7493 17.921 18.3095 19.4081 16.8224C21.5853 14.6453 24.0518 12.957 26.8078 11.7576C29.5637 10.5582 32.2232 10.0142 34.7862 10.1255ZM24.2861 22.4446C24.92 23.0784 25.6988 23.3954 26.6226 23.3954C27.5464 23.3954 28.3246 23.0784 28.9574 22.4446C29.5913 21.8107 29.9082 21.0324 29.9082 20.1097C29.9082 19.187 29.5913 18.4082 28.9574 17.7732C28.3235 17.1394 27.5447 16.8224 26.6209 16.8224C25.6971 16.8224 24.9189 17.1394 24.2861 17.7732C23.6522 18.4071 23.3353 19.1859 23.3353 20.1097C23.3353 21.0335 23.6522 21.8118 24.2861 22.4446ZM20.4829 36.2518C22.5774 35.4526 24.3412 34.6192 25.7743 33.7516C27.2074 32.8841 28.7921 31.7194 30.5283 30.2576L30.9417 32.4073C31.0519 32.9585 31.0244 33.503 30.859 34.041C30.6937 34.579 30.4181 35.0403 30.0322 35.425L24.8235 40.6338C24.4101 41.0471 23.914 41.1987 23.3353 41.0885C22.7565 40.9782 22.3569 40.6475 22.1365 40.0963L20.4829 36.2518ZM7.0477 32.6884C8.01228 31.7293 9.18631 31.2426 10.5698 31.2283C11.9533 31.2151 13.1245 31.6907 14.0836 32.6553C15.0427 33.6199 15.5222 34.7912 15.5222 36.1691C15.5222 37.5471 15.0399 38.7184 14.0753 39.683C13.3864 40.3719 12.236 40.9645 10.6244 41.4605C9.01268 41.9566 6.78698 42.3976 3.94727 42.7834C4.3331 39.9448 4.77405 37.7235 5.27012 36.1195C5.76619 34.5167 6.35871 33.373 7.0477 32.6884Z" fill="url(#paint0_linear_1058_573)"/>
            <path d="M47.9537 13.7838H59.3474C61.4428 13.7838 63.2286 14.1529 64.7049 14.891C66.2051 15.6292 67.3361 16.653 68.0981 17.9627C68.86 19.2723 69.241 20.7843 69.241 22.4987C69.241 24.2131 68.86 25.7252 68.0981 27.0348C67.3361 28.3444 66.2051 29.3683 64.7049 30.1064C63.2286 30.8446 61.4428 31.2137 59.3474 31.2137H54.4185V39.5H47.9537V13.7838ZM58.8831 25.749C60.1689 25.749 61.1452 25.487 61.8119 24.9632C62.4786 24.4393 62.8119 23.6179 62.8119 22.4987C62.8119 21.3796 62.4786 20.57 61.8119 20.07C61.169 19.5461 60.1927 19.2842 58.8831 19.2842H54.4185V25.749H58.8831ZM71.7691 20.9272H77.591V24.356C78.6387 21.9273 80.4126 20.7129 82.9128 20.7129H84.4486V26.1061H82.5913C80.9484 26.1061 79.7221 26.5109 78.9125 27.3205C78.1267 28.1301 77.7338 29.5112 77.7338 31.4637V39.5H71.7691V20.9272ZM86.3712 41.9288H89.5143C90.4191 41.9288 91.0501 41.7978 91.4073 41.5359C91.7645 41.2739 92.0859 40.7382 92.3716 39.9286L85.3711 20.9272H91.8002L95.6576 34.2853L99.3007 20.9272H105.73L98.6578 40.6429C97.9435 42.6193 97.0148 44.1075 95.8719 45.1076C94.7528 46.1314 93.1693 46.6434 91.1215 46.6434H86.3712V41.9288ZM130.774 29.0706C130.774 28.0229 130.571 27.1896 130.166 26.5705C129.762 25.9276 129.095 25.6061 128.166 25.6061C127.19 25.6061 126.428 25.9514 125.88 26.6419C125.356 27.3086 125.095 28.2492 125.095 29.4635V39.5H119.13V29.0706C119.13 28.0229 118.927 27.1896 118.523 26.5705C118.118 25.9276 117.451 25.6061 116.522 25.6061C115.546 25.6061 114.784 25.9514 114.237 26.6419C113.713 27.3086 113.451 28.2492 113.451 29.4635V39.5H107.486V20.9272H113.308V23.5702C114.689 21.5225 116.522 20.4986 118.808 20.4986C120.023 20.4986 121.106 20.7843 122.059 21.3558C123.011 21.9273 123.749 22.7726 124.273 23.8917C125.011 22.8678 125.904 22.0463 126.952 21.4272C128 20.8081 129.166 20.4986 130.452 20.4986C132.333 20.4986 133.845 21.1534 134.988 22.463C136.155 23.7488 136.738 25.7013 136.738 28.3206V39.5H130.774V29.0706ZM149.101 39.9286C147.029 39.9286 145.256 39.5119 143.779 38.6785C142.303 37.8213 141.184 36.6665 140.422 35.214C139.66 33.7377 139.279 32.0709 139.279 30.2136C139.279 28.3563 139.66 26.7014 140.422 25.2489C141.184 23.7726 142.303 22.6178 143.779 21.7844C145.256 20.9272 147.029 20.4986 149.101 20.4986C151.173 20.4986 152.935 20.9272 154.387 21.7844C155.863 22.6178 156.983 23.7726 157.745 25.2489C158.507 26.7014 158.888 28.3563 158.888 30.2136C158.888 32.0709 158.507 33.7377 157.745 35.214C156.983 36.6665 155.863 37.8213 154.387 38.6785C152.935 39.5119 151.173 39.9286 149.101 39.9286ZM145.279 30.2136C145.279 33.4995 146.553 35.1425 149.101 35.1425C151.625 35.1425 152.887 33.4995 152.887 30.2136C152.887 26.9276 151.625 25.2846 149.101 25.2846C146.553 25.2846 145.279 26.9276 145.279 30.2136Z" fill="url(#paint1_linear_1058_573)"/>
            <defs>
            <linearGradient id="paint0_linear_1058_573" x1="3.94727" y1="26.3848" x2="36.6191" y2="26.3848" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDA8FF"/>
            <stop offset="0.46875" stopColor="white"/>
            <stop offset="1" stopColor="#DCFCFF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1058_573" x1="-1" y1="25.9023" x2="159.989" y2="25.9023" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDA8FF"/>
            <stop offset="0.5" stopColor="white"/>
            <stop offset="1" stopColor="#73F2FF"/>
            </linearGradient>
            </defs>
            </svg>

          </a>

          <ul>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#freecall"> <b> Regalo! </b> </a></li>
          </ul>

        </div>

        <div className="navBott">

          <div className="socialMedia">
            <a href="" target='_blank'>
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6665 24.195H23.9998V12.5283L15.9998 17.5283L7.99984 12.5283V24.195H5.33317V8.19499H6.93317L15.9998 13.8617L25.0665 8.19499H26.6665M26.6665 5.52832H5.33317C3.85317 5.52832 2.6665 6.71499 2.6665 8.19499V24.195C2.6665 24.9022 2.94746 25.5805 3.44755 26.0806C3.94765 26.5807 4.62593 26.8617 5.33317 26.8617H26.6665C27.3737 26.8617 28.052 26.5807 28.5521 26.0806C29.0522 25.5805 29.3332 24.9022 29.3332 24.195V8.19499C29.3332 7.48774 29.0522 6.80947 28.5521 6.30937C28.052 5.80927 27.3737 5.52832 26.6665 5.52832Z" fill="url(#paint0_linear_799_392)"/>
            <defs>
            <linearGradient id="paint0_linear_799_392" x1="2.6665" y1="16.1541" x2="29.3332" y2="16.1541" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDA8FF"/>
            <stop offset="0.5" stopColor="white"/>
            <stop offset="1" stopColor="#73F2FF"/>
            </linearGradient>
            </defs>
            </svg>
            </a>

            <a href="https://www.instagram.com/prymoagencia" target='_blank' rel="noreferrer">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3708 3.41375C18.3438 3.41002 19.3167 3.4198 20.2894 3.44308L20.5481 3.45242C20.8468 3.46308 21.1414 3.47642 21.4974 3.49242C22.9161 3.55908 23.8841 3.78308 24.7334 4.11242C25.6135 4.45108 26.3548 4.90975 27.0961 5.65108C27.7739 6.31722 28.2986 7.12301 28.6335 8.01242C28.9628 8.86175 29.1868 9.83108 29.2535 11.2497C29.2695 11.6044 29.2828 11.9004 29.2935 12.1991L29.3015 12.4577C29.3251 13.43 29.3354 14.4025 29.3321 15.3751L29.3335 16.3698V18.1164C29.3367 19.0894 29.3265 20.0624 29.3028 21.0351L29.2948 21.2937C29.2841 21.5924 29.2708 21.8871 29.2548 22.2431C29.1881 23.6617 28.9615 24.6297 28.6335 25.4791C28.2996 26.3694 27.7749 27.1759 27.0961 27.8417C26.4294 28.5195 25.6232 29.0441 24.7334 29.3791C23.8841 29.7084 22.9161 29.9324 21.4974 29.9991C21.1414 30.0151 20.8468 30.0284 20.5481 30.0391L20.2894 30.0471C19.3167 30.0708 18.3438 30.081 17.3708 30.0777L16.3761 30.0791H14.6308C13.6578 30.0824 12.6848 30.0721 11.7121 30.0484L11.4535 30.0404C11.1369 30.0289 10.8205 30.0156 10.5041 30.0004C9.08545 29.9337 8.11745 29.7071 7.26678 29.3791C6.37703 29.0449 5.5711 28.5202 4.90545 27.8417C4.22685 27.1755 3.70175 26.3692 3.36678 25.4791C3.03745 24.6297 2.81345 23.6617 2.74678 22.2431C2.73194 21.9267 2.7186 21.6103 2.70678 21.2937L2.70012 21.0351C2.67554 20.0624 2.66442 19.0894 2.66678 18.1164V15.3751C2.66306 14.4025 2.67284 13.43 2.69612 12.4577L2.70545 12.1991C2.71612 11.9004 2.72945 11.6044 2.74545 11.2497C2.81212 9.82975 3.03612 8.86308 3.36545 8.01242C3.70062 7.12258 4.22674 6.31701 4.90678 5.65242C5.57198 4.97342 6.3774 4.44785 7.26678 4.11242C8.11745 3.78308 9.08412 3.55908 10.5041 3.49242L11.4535 3.45242L11.7121 3.44575C12.6844 3.42118 13.6569 3.41007 14.6295 3.41242L17.3708 3.41375ZM16.0001 10.0804C15.1168 10.0679 14.2398 10.2311 13.4201 10.5605C12.6004 10.8899 11.8543 11.3789 11.2252 11.9992C10.5962 12.6194 10.0967 13.3585 9.7557 14.1734C9.41475 14.9884 9.23917 15.863 9.23917 16.7464C9.23917 17.6298 9.41475 18.5044 9.7557 19.3194C10.0967 20.1344 10.5962 20.8734 11.2252 21.4937C11.8543 22.1139 12.6004 22.6029 13.4201 22.9323C14.2398 23.2617 15.1168 23.4249 16.0001 23.4124C17.7682 23.4124 19.4639 22.71 20.7142 21.4598C21.9644 20.2096 22.6668 18.5139 22.6668 16.7457C22.6668 14.9776 21.9644 13.2819 20.7142 12.0317C19.4639 10.7815 17.7682 10.0804 16.0001 10.0804ZM16.0001 12.7471C16.5315 12.7373 17.0594 12.8335 17.5532 13.03C18.0469 13.2266 18.4966 13.5195 18.8758 13.8918C19.2551 14.2641 19.5564 14.7082 19.762 15.1982C19.9677 15.6882 20.0737 16.2143 20.0738 16.7457C20.0739 17.2772 19.9681 17.8033 19.7626 18.2934C19.557 18.7835 19.2559 19.2277 18.8768 19.6001C18.4976 19.9725 18.0481 20.2656 17.5544 20.4623C17.0607 20.659 16.5328 20.7554 16.0015 20.7457C14.9406 20.7457 13.9232 20.3243 13.173 19.5742C12.4229 18.824 12.0015 17.8066 12.0015 16.7457C12.0015 15.6849 12.4229 14.6675 13.173 13.9173C13.9232 13.1672 14.9406 12.7457 16.0015 12.7457L16.0001 12.7471ZM23.0001 8.08042C22.57 8.09763 22.1632 8.28062 21.8649 8.59104C21.5667 8.90147 21.4001 9.31526 21.4001 9.74575C21.4001 10.1762 21.5667 10.59 21.8649 10.9005C22.1632 11.2109 22.57 11.3939 23.0001 11.4111C23.4421 11.4111 23.8661 11.2355 24.1786 10.9229C24.4912 10.6104 24.6668 10.1864 24.6668 9.74442C24.6668 9.30239 24.4912 8.87847 24.1786 8.56591C23.8661 8.25334 23.4421 8.07775 23.0001 8.07775V8.08042Z" fill="url(#paint0_linear_799_390)"/>
            <defs>
            <linearGradient id="paint0_linear_799_390" x1="2.66602" y1="16.6948" x2="29.334" y2="16.6948" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDA8FF"/>
            <stop offset="0.5" stopColor="white"/>
            <stop offset="1" stopColor="#73F2FF"/>
            </linearGradient>
            </defs>
            </svg>
            </a>

            <a href="https://www.twitter.com/prymoagency" target='_blank' rel="noreferrer">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9466 8.29655C28.9199 8.76322 27.8132 9.06988 26.6666 9.21655C27.8399 8.50988 28.7466 7.38988 29.1732 6.04322C28.0666 6.70988 26.8399 7.17655 25.5466 7.44322C24.4932 6.29655 23.0132 5.62988 21.3332 5.62988C18.1999 5.62988 15.6399 8.18988 15.6399 11.3499C15.6399 11.8032 15.6932 12.2432 15.7866 12.6565C11.0399 12.4165 6.81322 10.1365 3.99989 6.68322C3.50656 7.52322 3.22656 8.50988 3.22656 9.54988C3.22656 11.5365 4.22656 13.2965 5.77322 14.2965C4.82656 14.2965 3.94656 14.0299 3.17322 13.6299V13.6699C3.17322 16.4432 5.14656 18.7632 7.75989 19.2832C6.92086 19.5128 6.04002 19.5448 5.18656 19.3765C5.5487 20.5132 6.25794 21.5078 7.21458 22.2205C8.17122 22.9332 9.32715 23.3281 10.5199 23.3499C8.49806 24.9505 5.99188 25.8156 3.41322 25.8032C2.95989 25.8032 2.50656 25.7765 2.05322 25.7232C4.58656 27.3499 7.59989 28.2965 10.8266 28.2965C21.3332 28.2965 27.1066 19.5765 27.1066 12.0165C27.1066 11.7632 27.1066 11.5232 27.0932 11.2699C28.2132 10.4699 29.1732 9.45655 29.9466 8.29655Z" fill="url(#paint0_linear_799_391)"/>
            <defs>
            <linearGradient id="paint0_linear_799_391" x1="2.05322" y1="16.9198" x2="29.9466" y2="16.9198" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDA8FF"/>
            <stop offset="0.5" stopColor="white"/>
            <stop offset="1" stopColor="#73F2FF"/>
            </linearGradient>
            </defs>
            </svg>
            </a>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav