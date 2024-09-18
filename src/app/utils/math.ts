export function randomIntFromInterval(min: number, max: number) { 
    const length = (max - min + 1);
    return Math.floor(Math.random() * length) + min;
}