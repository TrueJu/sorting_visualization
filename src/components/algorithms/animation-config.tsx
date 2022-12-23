const good_check_color = "#00a716";
const currently_checking_color = "#e80f1b";
const default_color = "#00b862";
let updateAnimation = false;

function changeUpdateAnimation(state:boolean) {
    updateAnimation = state;
}

export {good_check_color, currently_checking_color, default_color, updateAnimation, changeUpdateAnimation};