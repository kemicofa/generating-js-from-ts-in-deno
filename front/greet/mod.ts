const greet = (name: string) => {
    const span = document.createElement('span');
    span.innerText = `Hello ${name}.`;
    return span;
}

export default greet;