export function randomNumberGenerator(max: number, min?: number) {
    if (min) {
        return Math.floor(Math.random() * (max - min) + min);
    } else {
        return Math.floor(Math.random() * max);
    }
}
