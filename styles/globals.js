import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }

  body.light {
    background: ${props => props.theme.colors.background2};
    color: ${props => props.theme.colors.primary2};
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  #about {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
  }
  
  /* Position and sizing of burger button */
  .bm-burger-button {
    margin: 15px 10px;
    position: relative;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${props => props.theme.colors.background1};
  }

  .bm-burger-bars.light {
    background: ${props => props.theme.colors.background2};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${props => props.theme.colors.background2};
    transition: .5s;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
        background: ${props => props.theme.colors.background1};
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #3e412e;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #3e412e;
  }

/* Wrapper for item list */
.bm-item-list {
  display: flex;
  flex-direction: column;
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}

.blogTitle {
  margin: 18px;
}

.blogContainer {
  display: flex;
  flex-direction: column;
}

.blogPost {
  margin-bottom: 20px;
  color: #f2f4db;
}

.blogLink {
  color: #f2f4db;
  &:hover {
    color: white;
    cursor: pointer;
    transition: 0.5s;
  }
}

.blogPage {
  padding: 5px;
  display: flex;
  flex-direction:column;
  justify-content: center:
  align-items: center;
}

.blogContent {
  padding: 10px;
}

.blogContent p {
  margin-bottom: 15px;
}

.blogContent ul {
  margin-left: 15px;
  margin-bottom: 20px;
}

.blogContent li {
  margin-bottom: 5px;
}

.backToHome {
  padding: 10px;
}

.backToHome a {
  color: #f2f4db;
  &:hover {
    color: white;
    cursor: pointer;
    transition: 0.5s;
  }

  .video-react-video, .video-react-poster {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .video-react-controls-enabled, .video-react-has-started, .video-react-paused, .video-react-fluid, .video-react-user-inactive, .video-react-workinghover, .video-react {
    width: 80%;
    display: flex;
    justify-content: center;
  }
}

.vitoIcon {
  &:hover {
    cursor: pointer;
  }
}

.chapters-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
}

.vitoLink {
  text-decoration: none;
  color: #3e412e;
  font-size: 22px;
  text-align: center;
}

.vitoImg {
  object-fit: contain;
  object-position: 50% 50%;
}

.photoList {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
}

.photoList li {
  list-style-type: none;
}

.slugContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;;
}

.videoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.videoFrame {
  width: 400px;
  height: 225px;
  margin-bottom: 10px;
}

/* Contact */

.contactForm {
  color: #f2f4db;
  font-size: 20px;
  margin: 2% 0;
  text-align: center;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  text-align: center;
  margin: 20px auto;
  width: 90%;
}

.inputs {
  width: 80%
  max-width: 1040px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #f2f4db;
  color: #3e412e;
  border-radius: 5px;
  box-shadow: 0 0 5px #f2f4db;
  border-style: none;
}

#messageField {
  height: 30vh;
  background-color: #f2f4db;
  color: #3e412e;
  border-radius: 5px;
  box-shadow: 0 0 5px #f2f4db;
  border-style: none;
}

#submitBtn {
  margin-top: 10px;
  background-color: #f2f4db;
  color: #3e412e;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 5px #f2f4db;
  font-weight: 799;
  border-style: none;
}

.zoom-wrapper div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-container {
  width: 100%;
  max-width: 250px;
  max-height: 250px;
  border-radius: 5px;
  border: 3px solid #f2f4db;
}

.slide-container img {
  min-width: 244px;
  width: fit-content;
  align-self: center;
}

.indicators, .default-nav {
  display: none;
  visibility: hidden;
}

.calendar {
  width: 800px;
}

.NavLink {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  color: #f2f4db;
  margin: 0 .5rem;
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    background-color: #3e412e;
    transform: scale(1.1);
    cursor: pointer;
    transition: .5s;
  }
}

.SocialIcons {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
  width: 5rem;
  color: #f2f4db;
  border-radius: 10px;
  padding: 2px;
&:hover {
    background-color: #3e412e;
    transform: scale(1.1);
    cursor: pointer;
  }
}

.genreContainer {
  width: 200px;
  height: 60vh;
  overflow-x: hidden; /* Hide horizontal scrollbar */
}


.spotifyGenres {
  padding: 10px;
  text-transform: capitalize;
}

.spotifyGenres a {
  text-transform: capitalize;
  color: #f2f4db;
  &:hover {
    color: white;
    cursor: pointer;
    transition: 0.5s;
  }
}
`;

export default GlobalStyles;