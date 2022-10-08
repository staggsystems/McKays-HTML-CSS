/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Case Problem 2

   Author: 
   Date:   

   Filename: tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   attCount
      Running count of all attribute nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   setup() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeTree(sourceNode, nestedList) 
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   writeElemLI(elemNode, nestedList) 
      Writes a single list item based on the contents of an element node
      and then appends that list item to nestedList

   writeTextLI(textNode, nestedList) 
      Writes a single list item based on the contents of a text node
      and then appends that list item to nestedList

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't

*/




function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}
