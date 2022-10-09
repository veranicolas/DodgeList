
/* const mockData = `Otto Bototo se unió a la sala
bera se unió a la sala
purlow se unió a la sala
PIOJOschpeir se unió a la sala
tonyHikariTwo se unió a la sala`
 */
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

const compareData = (summoners:string) =>{

    const cleanedFellas = cleanupData(summoners)
    console.log(cleanedFellas)
    const blockedFellas = localStorage.getItem('blockedFellas')
    if(blockedFellas){
        const parsedFellas:any[] = JSON.parse(blockedFellas)
        const result = parsedFellas.filter((fella)=> cleanedFellas.includes(fella))
        return result
    } else {
        return undefined
    }
}

const cleanupData = (data:string) =>{

    const cleanedData = data
        .trim()
        .replace(/\n/g, '')
        .split('se unió a la sala')
        .map((item)=>{
            return item.trim()
        })
    return cleanedData
}

export { saveData, compareData, cleanupData }
