import { getStyles } from "./database.js";

const styles = getStyles();


export const JewelryStyles = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItemsArray = styles.map((style) => {
    html += `<li>
    <input type="radio" name="style" value="${style.id}" /> ${style.name}
</li>`
  });

  // Join all of the strings in the array into a single string
  html += listItemsArray.join("");

  html += "</ul>";
  return html;
};
