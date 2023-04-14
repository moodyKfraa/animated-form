const multiSteps = document.querySelector(`[data-multi-steps]`);
const steps = [...document.querySelectorAll(`[data-step]`)];
let currstep = steps.findIndex(step => step.classList.contains(`active`));
let incrmeintor =0;
            // if active not found
if(currstep < 0){
    steps[0].classList.add(`active`);
    currstep = 0;
};

multiSteps.addEventListener(`click`, (e) => {
    if((Object.keys(e.target.dataset))[0] === `next` && currstep < 1){
        incrmeintor = 1;

    }else if((Object.keys(e.target.dataset))[0] === `pre` && currstep>0){
        incrmeintor = -1;

    }else{return}

        const inputs = [...steps[currstep].querySelectorAll(`input`)];

            if(inputs.every(el => el.reportValidity()) && incrmeintor === 1 || incrmeintor !== 1){
                currstep += incrmeintor;
                steps.forEach(step=> {step.classList.toggle(`active`);})
            }else{return}



            // change the active step
}
)
