function main() {
    const PI = Math.PI;
    const r = parseFloat(readLine());

    const area = PI * r * r;
    console.log(area.toFixed(3));

    const perimeter = 2 * PI * r;
    console.log(perimeter.toFixed(3));
}
