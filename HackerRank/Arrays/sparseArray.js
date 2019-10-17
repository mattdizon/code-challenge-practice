/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings.

strings = [ab, ab, abc]
queries = [ab, abc, bc]

2 instances of ab
1 instance of abc
0 of bc
=====================
[2,1,0]

strings and queries must match exactly

input: s = array of strings
       q = array of queries

output: array of results of all queries in order
*/
const sparseArr = (n,q) => {
  let strObj = {}
  let result = []
  for(let i = 0; i < n.length; i ++){
    let  word = n[i]
    if(strObj[word] === undefined){
      strObj[word] = 1
    }
    else{
      strObj[word] += 1
    }
  }
  let unique = q.filter((v, i, a) => a.indexOf(v) === i);
  for (let j = 0; j < unique.length; j ++){
    let query = unique[j]
    if(strObj[query]){
      result.push(strObj[query])
    }
    else {
       result.push(0)
    }
  }
  return result
}
