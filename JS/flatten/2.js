function flattenDeep(arr) {
    let result = [];
    function dfs(x) {
        console.log(x);
        for(let i = 0;i < x.length;++ i) {
            if(Array.isArray(x[i])) {
                dfs(x[i]);
            }
            else {
                result.push(x[i]);
            }
        }
    }
    dfs(arr);
    return result;
}

let res = flattenDeep([1,2,[3,4,5,[6,7,8]],9]);
