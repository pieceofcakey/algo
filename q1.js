process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const nums = data.split(" ");
    const n = Number(nums[0]), m = Number(nums[1]);
    
    let rect = ""
    
    for (let column = 0; column < m; column++) {
        for (let row = 0; row < n; row++) rect += "*"
        rect += "\n"
    }
    console.log(rect)
});