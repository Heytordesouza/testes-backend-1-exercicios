interface Users {
    name: string,
    age: number
}

const users: Users[] = [
    {
        name: "Juvenal",
        age: 56
    },
    {
        name: "Astrodev",
        age: 26
    },
    {
        name: "Francisca",
        age: 32
    }
]

export const exercicio3 = (str: string) => {

    for(let user of users){
        if(user.name === str){
            return user.name
        }
    }
}