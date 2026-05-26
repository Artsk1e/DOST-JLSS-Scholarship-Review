#!/bin/bash
for file in math-topics.js science-topics.js english-topics.js ict-topics.js; do
  # Get the variable name from the file
  varname=$(grep "^const " "$file" | head -1 | sed 's/const \([a-zA-Z]*\).*/\1/')
  
  # Remove the old CommonJS export (last 4 lines)
  head -n $(($(wc -l < "$file") - 4)) "$file" > "${file}.tmp"
  
  # Add ES6 export
  echo "" >> "${file}.tmp"
  echo "export default $varname" >> "${file}.tmp"
  
  # Replace original file
  mv "${file}.tmp" "$file"
  echo "✓ Converted $file"
done
