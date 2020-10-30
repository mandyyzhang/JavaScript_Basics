function tree(node){
  if (node == "root"){
    return "root";
  }
  else if (node == "parent") {
    return "parent";
  }
  else if (node == "child") {
    return "child";
  }
  else{
    return "leaf";
  }
}


console.log(tree("root"));
console.log(tree("parent"));
console.log(tree("child"));
console.log(tree("leaf"));
