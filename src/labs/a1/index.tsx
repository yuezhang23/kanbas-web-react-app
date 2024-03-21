function Assignment1 () {
    const tb_style = { 'border': '1px solid grey',
        'border-collapse': 'collapse' }
    return (
    <div className="container" style={{padding: '2px'}}>
        <h3>hover input</h3>
        <label htmlFor='firstName'> First Name</label>
        <input id='firstName' value="Alice" placeholder="Jane" 
            title="Type your first name" />
        <h1>HTML Example</h1>
        <h2>Heading Tags</h2>
        Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than the plain text and their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
        <p>
        This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
        </p>
        <p>
        This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
        </p>
        <p>
        This is the second paragraph. Even though we added a deliberate gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
        </p>
        <p>
        This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>
        <h2>List Tags</h2>
        <h3>Ordered List Tag</h3>
        How to make pancakes:
        <ol>
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
        </ol>
        <h3>Unordered List Tag</h3>
        My favorite books (in no particular order)
        <ul>
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
        </ul>
        <h2>Table Tag</h2>
            <table id="table-1" style={tb_style}>
            <thead>
            <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td >Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
            </tr>
            <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
            </tr>
            <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>95</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td >Average</td>
                <td>90</td>
            </tr>
            </tfoot>
        </table>

        <h2>Image tag</h2>

        Loading an image from the internet:<br/>
        <img width="400px"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
        <br/>
        Loading a local image:<br/>
        <img src="treeflower.png"
            height="200px"/>

        <h2>Text fields</h2>
        <form id="text-fields">
            <label htmlFor="text-fields-username">Username:</label>
            <input id="text-fields-username" placeholder="john"/><br/>
            <label htmlFor="text-fields-password">Password:</label>
            <input type="password" id="text-fields-password"
                value="123@#$asd"/><br/>
            <label htmlFor="text-fields-first-name">First name:</label>
            <input type="text" id="text-fields-first-name"
                title="John"/><br/>
            <label htmlFor="text-fields-last-name">Last name:</label>
            <input type="text" id="text-fields-last-name"
                placeholder="Doe" value="Wonderland"/>
        </form>
        <h2>Text boxes</h2>
        <form id="textarea">
            <label>Biography:</label><br/>
            <textarea >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        </form>
        <h3>Buttons</h3>
        <button type="button">Click me!</button>

        <h2>File upload</h2>
        <input type="file"/>

        <h2>Radio buttons</h2>

        <label>Favorite movie genre:</label><br/>

        <input type="radio" defaultValue="COMEDY"
            name="radio-genre" id="radio-comedy"/>
        <label htmlFor="radio-comedy">Comedy</label><br/>

        <input type="radio" defaultValue="DRAMA"
            name="radio-genre" id="radio-drama"/>
        <label htmlFor="radio-drama">Drama</label><br/>

        <input type="radio" defaultValue="SCIFI"
            name="radio-genre" id="radio-scifi" defaultChecked/>
        <label htmlFor="radio-scifi">Science Fiction</label><br/>

        <input type="radio" defaultValue="FANTASY"
            name="radio-genre" id="radio-fantasy"/>
        <label htmlFor="radio-fantasy">Fantasy</label>


        <h2>Checkboxes</h2>
        <label>Favorite movie genre:</label>
        <br/>
        <input type="checkbox" defaultValue="COMEDY"
            name="check-genre" id="chkbox-comedy" defaultChecked/>
        <label htmlFor="chkbox-comedy">Comedy</label>    <br/>

        <input type="checkbox" defaultValue="DRAMA"
            name="check-genre" id="chkbox-drama"/>
        <label htmlFor="chkbox-drama">Drama</label>    <br/>

        <input type="checkbox" defaultValue="SCIFI"
            name="check-genre" id="chkbox-scifi"  defaultChecked/>
        <label htmlFor="chkbox-scifi">Science Fiction</label> <br/>

        <input type="checkbox" defaultValue="FANTASY"
            name="check-genre" id="chkbox-fantasy"/>
        <label htmlFor="chkbox-fantasy">Fantasy</label>

        <h3>hover input</h3>
            <label htmlFor='firstName'> First Name</label>
            <input id='firstName' defaultValue="Alice" placeholder="Jane" 
                title="Type your first name" />


        <h2>Dropdowns</h2>

        <h3>Select one</h3>
        <label htmlFor="select-one-genre"> Favorite movie genre: </label><br/>
        <select id="select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
                Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
        </select>


        <h3>Select many</h3>
        <label htmlFor="select-many-genre"> Favorite movie genres: </label><br/>
        <select id="select-many-genre" multiple>
            <option selected value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">
                Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
        </select>

        <h2>Other HTML field types</h2>
        <label htmlFor="text-fields-email"> Email: </label>
        <input type="email"
            placeholder="jdoe@somewhere.com"
            id="text-fields-email"/><br/>

        <label htmlFor="text-fields-salary-start"> Starting salary:</label>
        <input type="number"
            id="text-fields-salary-start"
            placeholder="1000"
            value="100000"/><br/>

        <label htmlFor="text-fields-rating"> Rating: </label>
        <input type="range" id="text-fields-rating"
            placeholder="Doe"
            max="5"
            value="4"/><br/>

        <label htmlFor="text-fields-dob"> Date of birth: </label>
        <input type="date"
            id="text-fields-dob"
            value="2000-01-21"/><br/>
        <h2>Anchor tag</h2>
    </div>
    );
}
export default Assignment1