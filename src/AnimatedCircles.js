export default function AnimatedCircles() {

    const circles = document.createElement('div'); 
    const circle1 = document.createElement('div');
    const circle2 = document.createElement('div');
    const circle3 = document.createElement('div');

    circle1.className = 'circle circle-1';
    circle2.className = 'circle circle-2';
    circle3.className = 'circle circle-3';

    circles.append(circle1);
    circles.append(circle2);
    circles.append(circle3);
    circles.id = 'circles';
    return circles;
}