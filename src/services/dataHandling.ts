
const saveData = (summoner:string) =>{

    const blockedFellas = localStorage.getItem('blockedFellas')
    if(blockedFellas){
        const blockedArray:any[] = JSON.parse(blockedFellas)
        const newArray = [...blockedArray, summoner]
        localStorage.setItem('blockedFellas',JSON.stringify(newArray))
    } else {
        localStorage.setItem('blockedFellas',JSON.stringify([summoner]))
    }
}

const compareData = (summoner:string) =>{

    const blockedFellas = localStorage.getItem('blockedFellas')
    if(blockedFellas){
        const parsedFellas:any[] = JSON.parse(blockedFellas)
        const result = parsedFellas.find((fella)=> fella === summoner)
        return result
    } else {
        return undefined
    }
}

export { saveData, compareData }