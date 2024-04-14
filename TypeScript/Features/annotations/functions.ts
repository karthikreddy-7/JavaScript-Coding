
//annotations for type of arguments the function will receive
// and the type of return value
const add = (a: number,b:number): number=>{
    return a+b;
};

const subtract=(a:number,b:number) : number=>{
    return a-b;
}


// annotations for functions defined with function

function divide(a:number,b:number):number{
    return a/b;
}


const multiply=function (a:number,b:number):number{
    return a*b;
}

const forecast={
    date: new Date(),
    weather: 'sunny'
};

const logWeather=(forecast :{date: Date,weather:string} ): void=>{
    console.log(forecast.date);
    console.log(forecast.weather);
}
console.log(add(10,10));
console.log(subtract(10,10));

console.log(logWeather(forecast))