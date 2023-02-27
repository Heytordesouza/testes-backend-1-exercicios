export const exercicio2 = (str: string): string => {
    const dataReverse = str.split('/').reverse().join('/')
//                   "2022/09/26" = ["2022", "09", "26"] = ["26", "09", "2022"] = 26/09/2022
//                       str              split                    reverse           join
    return dataReverse
}