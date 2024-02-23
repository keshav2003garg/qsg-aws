const printProcessingAnimation = () => {
    const frames = ['◰◰', '◳◳', '◲◲', '◱◱'];
    let i = 0;

    return setInterval(() => {
        process.stdout.write(`  \r${frames[i]} Deploying... `);
        i = (i + 1) % frames.length;
    }, 100);
};

export default printProcessingAnimation;
