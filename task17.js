function hasUniqueCharacters(str) {
    const charSeen = {};
    for (const char of str) {
      if (charSeen[char]) {
        return false;
      }
      charSeen[char] = true;
    }
    return true;
  }
  
  console.log(hasUniqueCharacters("abcdefg")); 
  console.log(hasUniqueCharacters("hello"));   
  