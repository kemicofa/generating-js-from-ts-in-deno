const greet = (name)=>{
    const span = document.createElement('span');
    span.innerText = `Hello ${name}.`;
    return span;
};
export { greet as default };
