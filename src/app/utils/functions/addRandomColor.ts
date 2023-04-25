export const addRandomColor = (arr: any[], colors: string[]): any[] =>
    arr.map((obj) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return { ...obj, color: randomColor };
    });
