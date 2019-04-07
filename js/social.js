@keyframes getcrossedpos {
  45% {
    transform: rotate(0); top: 33%;
  }
  50% {
    transform: rotate(0); top: 45%;
  }
  100% {
    transform: rotate(45deg); top: 45%;
  }
}
@keyframes straightenpos {
  0% {
    transform: rotate(45deg); top: 45%;
  }
  55% {
    transform: rotate(0); top: 33%;
  }
  100% {
    transform: rotate(0); top: 33%;
  }

}
@keyframes getcrossedneg {
  45% {
    transform: rotate(0); top: 60%;
  }
  50% {
    transform: rotate(0); top: 45%;
  }
  100% {
    transform: rotate(-45deg); top: 45%;
  }
}
@font-face {
  font-family: "SSSocialCircle";
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ss-social-circle.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
* {
  box-sizing: border-box;
}
.ss-icon {
  font-family: "SSSocialCircle";
  text-decoration: none;
  text-rendering: optimizeLegibility;
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  -ms-font-feature-settings: "liga" 1;
  -o-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  position: absolute;
  left: 43%;
  top: 33%;
  width: 7rem;
  height: 7rem;
  z-index: initial;
  line-height: 7rem;
  border-radius: 50%;
  transition: .3s;
  background: #f00;
  outline: none;
  // a very bad idea to set outline to none, but done here to tidy up the example.

  &:hover, &:focus {
    background: #333;
  }
  &:before, &:after, > span {
      position: absolute;
      left: 27%;
      content: "";
      display: block;
      width: 46%;
      top: 33%;
      height: 8%;
      background: #fff;
      transform-origin: center;
      transition: .5s;
    }
  span {
      top: 46%;
    }
    &:after {
      top: 60%;
    }
 &.clicked:before {
      animation: getcrossedpos .6s forwards;
    }
 &.clicked:after {
      animation: getcrossedneg .6s forwards;
    }
  &.clicked span#center-bar {
      opacity: 0;
    }
  &:hover {
    cursor: pointer;
  }
  &.clicked {
    background: #000;
    outline: none;
  }
  a {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: red;
  text-align: center;
  line-height: 1.5;
  color: #fff;
  text-decoration: none;
  position: absolute;
  font-size: 4rem;
  text-align: center;
  left: 1rem;
 top: 1rem;
 transition: .4s;
 z-index: -1;
  &:hover, &:focus {
    background-color: #000;
  }
  }
  @for $i from 1 through 6 {
  $rot: (($i - 2) * 72);
  a:nth-child(#{$i}) {
    transform: rotate(#{$rot}deg);
    }
    &.clicked a:nth-child(#{$i}) {
      transform: rotate(#{$rot}deg) translateX(7rem) rotate(-#{$rot}deg);
     }
   }
}
