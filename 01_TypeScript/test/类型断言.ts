function func(val: string | number): number {
    if ((val as string).length) {
        return (val as string).length
    } else {
        return val.toString().length
    }
}
// console.log(func("Hello TypeScript"));
console.log(func(132456));
