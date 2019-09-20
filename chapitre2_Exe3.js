function chessboard(num){
    
    let str;
    let str1 = ' #';
    let str2 = '# ';
    for(i = 0; i <= num; i++){
        str = str1.repeat(num) + '\n' + str2.repeat(num) + '\n';
    }
    return str.repeat(num/2);
}

console.log(chessboard(2));