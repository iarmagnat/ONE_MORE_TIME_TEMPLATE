#Template: 'collorfull' for `One More Time`

- No api calls... `work in progress`
- sorry I prefer markdown rather than raw text files

## Use and guidelines

- Use only one slider or else it will crash. The same goes for side-bars, top bars, and Star-wars characters tables

### To create an article:

    <article class="article [[ MODIFIER ]]">
        <h2 class="article__title [[ MODIFIER ]]">YOUR TITLE</h2>
        <section class="section [[ MODIFIER ]]">
            Your content
        </section>
    </article>

- Available article modifier: 

    -article__main: grey background 
    
    -article__orange: orange background
    
    -article__accentuated: green gradient background
    
- Available section modifier: 

    -section__wide: wider text on large screens
    
### To add a picture (only in sections):

``<img src="[[ YOUR SOURCE ]]" alt="Image" class="section__image section__image__[[ LEFT OR RIGHT ]]">`` 
         
 - Please fill the left or right modifier with 'left' or 'right' to stick the image to the corresponding side
 
 
### To add a top bar:

    <header>
      <nav>
        <ul class="navbar navbar__fixed" id="top-nav">
          <li>
            <a class="navbar__link navbar__link__logo" href="#">
              <img class="navbar__image" src="[[ SOURCE OF YOUR LOGO ]]" alt="Logo">
            </a>
          </li>
          <li><button type="button" name="button" class="navbar__toggle" id="nav-toggle">
            <i><i class="fa fa-caret-down fa-3x"></i></i>
          </button></li>
          <li><a class="navbar__link" href="[[ LINK DESTINATION URL ]]">[[ LINK TEXT ]]</a></li>
        </ul>
      </nav>
    </header>
    
- Note that the responsive version (mobile and tablets) wil look ugly if you dont have around 5 links... `unfixed bug`

### To add a side bar:
    
    <aside class="side-bar side-bar__hidden">
      <div class="side-bar__inner">
        <header>
          <h3>I am a side menu</h3>
        </header>
        <nav class="side-nav">
            <ul>
              <li><a class="side-nav" href="#">Potato 01</a></li>
              <li><a href="#">Potato 02</a></li>
              <li><a href="#">Potato 03</a></li>
              <li><a href="#">Potato 04</a></li>
              <li><a href="#">Potato 05</a></li>
            </ul>
        </nav>
      </div>
    </aside>

    <button type="button" name="Side nav toggle" class="side-toggle flipped" id="side-toggle">
      <i class="fa fa-caret-left fa-3x"></i>
    </button>
    
- This part is not stiled because of lack of time 


### To add a swapi star wars character list:

      <article class="article article__accentuated">
        <h2 class="article__title">SWAPI TIME!!</h2>
        <section class="section">
          <h3>STAR-WARS saga characters</h3>
          <table class="swapi">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Birth year</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          <button type="button" name="button" class="toggle-button" id="swapiPrev"><i class="fa fa-step-backward fa-2x"></i></button>
          <button type="button" name="button" class="toggle-button" id="swapiNext"><i class="fa fa-step-forward fa-2x"></i></button>
        </section>
      </article>
      
- This part is not stiled because of lack of time

### To add a bottom bar:

    <footer>
      <nav>
        <ul class="navbar navbar__bottom">
          <li><a class="navbar__link" href="[[ LINK DESTINATION URL ]]">[[ LINK TEXT ]]</a></li>
        </ul>
      </nav>
    </footer> 
    
### Notes:

Not using some parts, mostly top and bottom bars may result in ugly white bars at the top and bottom of the page.

## Requirements:

Jquery (js library): integrated

Font Awesome (icon font): as CDN

Require Js and domReady: included
