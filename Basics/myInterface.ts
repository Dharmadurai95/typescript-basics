interface USERDATA {
    readonly dbid: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(name: string, off: number): number
}

interface USERDATA {
    githubId: string
}

//inheritance 
// interface ADMINUSER extends USERDATA , USERDATAONE,USERDATATWO,USERDATATHREE{}
interface ADMINUSER extends USERDATA {
    role: string
}

const hitesh: USERDATA = {
    dbid: 123654,
    githubId: "dharma@github.com",
    email: 'dharmamech365@gmail.com',
    userId: 123025,
    startTrail: () => {
        return 'dharmadurai'
    },
    getCoupon(name, off) {
        return 12;
    },


};