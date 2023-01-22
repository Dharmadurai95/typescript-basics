type BioData =  {
  readonly name:string;  //you can change the value runtime
    age:number;
    degree:string
}
type SkillSet = {
    html:boolean;
    js:boolean;
    css:boolean;
    activeUser:string;
}


type USERPROFILE = BioData & SkillSet & {
    experience:number;
    salary?:number
}

const bioData:BioData = {
    name: "Dharmadurai",
    age: 28,
    degree: "BCA"
}
const skillSet:SkillSet = {
   html:true,
   js:true,
   css:true,
   activeUser:'yes' 
}

const userProfile:USERPROFILE = {
    name:"dev",
    age:28,
    degree:"bca",
    html:true,
    js:true,
    css:true,
    activeUser:'yes',
    experience:3
}



function selfIntro({ name, age }: { name: string, age: number }): { name: string, age: number } {
    return { name: name, age: age }
}

selfIntro(bioData)

export {}