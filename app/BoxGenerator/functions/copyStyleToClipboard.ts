
export const copyStyleToClipboard = (
  styleObj: Record<string, string | number>
) => {
    const all = Object.entries(styleObj)
    let str = ''
    all.forEach((item)=>{
     if(item[0] != 'id'){
        str+=(`${item[0]}:"${item[1]}";${'\n'}`)
     }
    })
    navigator.clipboard.writeText(str)
};
