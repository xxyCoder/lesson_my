function flattenDepth(arr,depth = 1) {
    let result = [];
    function dfs(x,dep) {
        if(dep >= depth) {
            result = result.concat(x);
            return ;
        }
        for(let i = 0;i < x.length;++ i) {
            if(Array.isArray(x[i])) {
                dfs(x[i],dep + 1);
            }
            else {
                result.push(x[i]);
            }
        }
    }
    dfs(arr,0);
    return result;
}

let res1 = flattenDepth([1,2,[3,4,5,[6,7,8]],9]);
let res2 = flattenDepth([1,2,[3,4,5,[6,7,8]],9],2);
console.log(res1,res2);
