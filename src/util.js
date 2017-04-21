/*
*将给定的字符串kebab-case化
*/
function kebabCaseler(str) {
    if (!str || typeof str != 'string') return
    var tempStr = ''
    tempStr = str.replace(/([A-Z])/g, function(e){
        return '-' + e.toLowerCase()
    })
    return tempStr[0] == '-' ? tempStr.slice(1) : tempStr
}
