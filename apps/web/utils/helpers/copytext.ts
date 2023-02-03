export function copyToClipBoard(text:string| string[]):void{
    if (typeof(text)!='string'){
        navigator.clipboard.writeText(text.join(' '));
    }
    else {
        navigator.clipboard.writeText(text);
    }
}