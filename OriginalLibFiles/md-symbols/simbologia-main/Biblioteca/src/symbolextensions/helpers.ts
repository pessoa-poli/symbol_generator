export function pad(num: string|number = "0", size: number) {
    let s = "0000000000000000000000000000000000000000000000000000" + num
    return s.substr(s.length-size)
}

