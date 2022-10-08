/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Case Problem 3

   Author: 
   Date:   

   Filename: table.js

   Global Variables:
   ================
   caption
      The caption display with the stats table
   head
      An array of column headings for the stats table
   sortIndex
      The index of the column by which the stats table will
      sorted
   sortDown
      A Boolean variable indicating whether the table will be
      sorted from highest to lowest (true)


   Functions List:
   ==============

   changeTable(statsCategory) 
      Change the table category based on the value
      in the statsCategory parameter

   makeStatsTable() 
      Generates the node tree for the stats table and
      appends it to the Web document

   createTableCaption(table, caption) 
      Generates the node tree for the table caption and
      appends it to the table

   createTableColumns(table, cols) 
      Generates the node tree for the table column group
      and appends the column group to the table

   createTableHead(table, cols) 
      Generates the node tree for the table header and
      appends it to the table

   createTableFoot(table, cols) 
      Generates the node tree for the table footer and
      appends it to the table

   createTableBody(table, rows, cols) 
      Generates the node tree for the table body, where rows
      is the number of rows in the body, cols is the number
      of columns, and table is the Web table for which the body is
      appended

   changeDirection() 
      Changes the sorting direction of the current table and
      then recreates the table

   colSort(a, b) 
      Sorting function used to sort the contents of a mult-dimensional
      array based on the value of the global sortIndex variable

   isNumeric(val) 
      Returns true if val parameter represents a number and false
      if otherwise

*/





function colSort(a, b) {
   if (sortDown) dValue = 1
   else dValue = -1;

   if (isNumeric(a[sortIndex])) {
      return (b[sortIndex] - a[sortIndex])*dValue;
   } else {
      var astring = a[sortIndex].toLowerCase();
      var bstring = b[sortIndex].toLowerCase();
           
      if (bstring > astring) return -dValue;
      if (bstring < astring) return dValue;
      return 0;
   }
}


function isNumeric(val) {
   if (isNaN(parseFloat(val))) return false;
   else return true
}
