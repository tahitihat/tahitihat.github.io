var Books = { 
	template: `<div class="bgA">
    <div class="container-fluid">
      <div class="row" style="padding-top: 6%;">
        <div class="col-sm-offset-1 col-sm-4 ">
          <div>
            <div>
              Reading books (mostly fiction) is one of my favorite activities. I've kept track of most of the books I've
              read since 2014. And here they are in roughly reverse-chronological order! Favorites are bolded.
            </div>
            <br />
            <div>
              Two of the most impactful periodical pieces that I read in 2019 were
              <a href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?auth=login-email"
                target="_blank" title="1619">
                The 1619 Project
              </a> and
              <a href="https://www.buzzfeednews.com/article/annehelenpetersen/millennials-burnout-generation-debt-work"
                target="_blank" title="burnout">
                How Millenials Became the Burnout Generation.
              </a>
            </div>
            <br />
            <div>
              Please send your recommendations to
              <a href="mailto:trippisabel@gmail.com" title="Email" target="_blank">
                trippisabel@gmail.com
              </a>!
            </div>
          </div>


        </div>
        <div class="col-sm-6">
          <ul class="booklist">
	    <li><span>Sputnik Sweetheart by Haruki Murakami</span></li>
	    <li><span>The Fellowship of the Ring by J. R R. Tolkien</span></li>
            <li><span>The Ballad of Songbirds and Snakes by Suzanne Collins</span></li>
	    <li><span>The Futurological Congress by Stanislaw Lem</span></li>
            <li><span>Sapiens: A Brief History of Humankind by Noah Yuval Harari</span></li>
            <li><span>The World is a Carpet: Four Seasons in an Afghan Village by Anna Badkhen</span></li>
            <li><span>The Girl on the Train by Paula Hawkins</span></li>
            <li><span>Ball Lightning by Cixin Liu</span></li>
            <li><span>The Power by Naomi Alderman</span></li>
            <li><span>Becoming by Michelle Obama</span></li>
            <li><span>The Hitchhiker's Guide to the Galaxy by Douglas Adams</span></li>
            <li><span>Educated by Tara Westover</span></li>
            <li><span>The Lean Farm by Ben Hartman</span></li>
            <li><span>Motherless Brooklyn by Jonathan Letham</span></li>
            <li>The Three Body Problem (Remembrance of Earth's Past) Trilogy by Cixin Liu</li>
            <li><span>This Side of Paradise by F. Scott Fitzgerald</span></li>
            <li><span>The Wind-Up Bird Chronicle by Haruki Murakami</span></li>
            <li><span>Little Fires Everywhere by Celeste Ng</span></li>
            <li><span>No One at the Wheel by Samuel Schwartz</span></li>
            <li><span>Freshwater by Akwaeke Emezi</span></li>
            <li><span>Cross Her Heart by Sarah Pinborough</span></li>
            <li><span>The Lowland by Jhumpa Lahiri</span></li>
            <li><span>The Goldfinch by Donna Tartt</span></li>
            <li><span>All the Missing Girls by Megan Miranda</span></li>
            <li><span>Even Cowgirls Get the Blues by Tom Robbins</span></li>
            <li><span>The Underground Railroad by Colton Whitehead</span></li>
            <li><span>Homegoing by Yaa Gyasi</span></li>
            <li><span>Beloved by Toni Morrison</span></li>
            <li><span>The Girls by Emma Cline</span></li>
            <li><span>The Assistants by Camille Perri</span></li>
            <li><span>The Remains of the Day by Kazuo Ishiguro</span></li>
            <li><span>Empire Falls by Richard Russo</span></li>
            <li><span>All the Light We Cannot See by Anthony Doerr</span></li>
            <li><span>The Night Circus by Erin Morgenstern</span></li>
            <li><span>Dune by Frank Herbert</span></li>
            <li>The Unberable Lightness of Being by Milan Kundera</li>
            <li><span>Ready Player One by Ernest Cline</span></li>
            <li><span>The Vacationers by Emma Straub</span></li>
            <li><span>Mrs. Fletcher by Tom Perrotta</span></li>
            <li><span>My Antonia by Willa Cather</span></li>
            <li><span>The Awakening by Kate Chopin</span></li>
            <li><span>The Sympathizer by Viet Thanh Nguyen</span></li>
            <li>Kafka on the Shore by Haruki Murakami</li>
            <li><span>Wild Sheep Chase by Haruki Murakami</span></li>
            <li><span>Naked Economics by Charles Whethan</span></li>
            <li><span>Everything Everything by Nicola Yoon</span></li>
            <li><span>The Road by Cormac McCarthy</span></li>
            <li><span>The Handmaid's Tale by Margaret Atwood</span></li>
            <li><span>Disgrace by J. M. Coetzee</span></li>
            <li><span>100 Years of Solitude by Gabriel Garcia Marquez</span></li>
            <li><span>The Sun Also Rises by Ernest Hemingway</span></li>
            <li><span>Garden of Eden by Ernest Hemingway</span></li>
            <li><span>The Hobbit by J. R. R. Tolkein</span></li>
            <li><span>Drown by Junot Diaz</span></li>
            <li><span>The Help by Katharyn Stockett</span></li>
            <li><span>All Souls: A Family Story from Southie by Michael Patrick McDonald</span></li>
            <li><span>The Strength in What Remains by Tracy Kidder</span></li>
            <li><span>Pet Sematary by Stephen King</span></li>
            <li><span>Carrie by Stephen King</span></li>
            <li>Dark Money by Jane Meyer</li>
            <li><span>Brave New World by Aldous Huxley</span></li>
            <li><span>The Book Thief by Markus Zusak</span></li>
            <li><span>Tibetan Peach Pie by Tom Robbins</span></li>
            <li><span>The Hours by Michael Cummingham</span></li>
            <li><span>A Lost Lady by Willa Cather</span></li>
            <li><span>Giovanni's Room by James Baldwin</span></li>
            <li><span>Rubyfruit Jungle by Rita Mae Brown</span></li>
            <li><span>A Picture of Dorian Gray by Oscar Wilde</span></li>
            <li><span>Running with Scissors by Augusten Burroughs</span></li>
            <li><span>Americanah by Chimamanda Ngozi Adichie</span></li>
            <li><span>Another Roadside Attraction by Tom Robbins</span></li>
            <li>All the Pretty Horses by Cormac McCarthy</li>
            <li><span>Foundation by Isaac Asimov</span></li>
            <li>The God of Small Things by Arundhati Roy</li>
            <li><span>Ubik by Philip K. Dick</span></li>
            <li><span>Bluebeard by Kurt Vonnegut</span></li>
            <li>Half of a Yellow Sun by Chimamanda Ngozi Adichie</li>
            <li><span>Things Fall Apart by Chinua Achebe</span></li>
            <li>Jitterbug Perfume by Tom Robbins</li>
            <li>The Brief, Wondrous Life of Oscar Wao by Junot Diaz</li>
            <li><span>Missile Paradise by Ron Tanner</span></li>
            <li><span>The Merchant of Venice by William Shakespeare</span></li>
            <li><span>1984 by George Orwell</span></li>
            <li><span>The Oresteia by Aeschylus</span></li>
            <li><span>A Raisen in the Sun by Lorraine Hansberry</span></li>
            <li><span>The Color Purple by Alice Walker</span></li>
            <li><span>The Great Gatsby by F. Scott Fitzgerald</span></li>
            <li>Slaughterhouse Five by Kurt Vonnegut</li>
            <li><span>The Catcher in the Rye by J. D. Salinger</span></li>
            <li>The Grapes of Wrath by John Steinbeck</li>
            <li><span>The Martian Chronicles by Ray Bradbury</span></li>
            <li><span>A Visit from the Goon Squad by Jennifer Egan</span></li>
            <li><span>The Bell Jar by Sylvia Plath</span></li>
            <li><span>The Stranger by Albert Camus</span></li>
            <li><span>The Outsiders by S.E. Hinton</span></li>
            <li><span>To Kill a Mockingbird by Harper Lee</span></li>
            <li><span>Of Mice and Men by John Steinbeck</span></li>
            <li><span>The Curious Incident of the Dog in the Nighttime by Mark Hadden</span></li>
            <li><span>The Lovely Bones by Alice Sebold</span></li>
            <li><span>Animal Farm by George Orwell</span></li>
            <li><span>The Perks of Being a Wallflower by Stephen Chbosky</span></li>
            <li><span>Fahrenheit 451 by Ray Bradbury</span></li>
            <li><span>Prep by Curtis Sittenfeld</span></li>
            <li><span>Wicked by Gregory MacGuire</span></li>
            <li><span>Sabriel by Garth Nix</span></li>
            <li><span>The Harry Potter series by J. K. Rowling</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
};