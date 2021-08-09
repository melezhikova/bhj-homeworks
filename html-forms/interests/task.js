const interests = Array.from(document.querySelectorAll(".interest__check"));

for (let i = 0; i < interests.length; i++) {
    let interest = interests[i];
    interest.addEventListener("change", markDown);
    interest.addEventListener("change", markUp);

    function markDown () {
        let neighbor = interest.closest("label").nextElementSibling;
        if (neighbor) {
            let children = Array.from(neighbor.querySelectorAll(".interest__check"));
            children.forEach ((item) => {
                if (item.checked) {
                    item.checked = false;
                } else {
                    item.checked = true;
                }
            });
        }
    }

    function markUp () {
        let list = interest.closest("ul");
        let parent = list.previousElementSibling;
        if (parent) {
            let parentCheck = parent.querySelector(".interest__check");
            let checkGroup = Array.from(list.querySelectorAll(".interest__check"));
            let count = 0;
            for (let i = 0; i < checkGroup.length; i++) {
                if (checkGroup[i].checked === true) {
                    count += 1;
                }
            }
            if (count === checkGroup.length) {
                parentCheck.checked = true;
                parentCheck.indeterminate = false;
            } else if (count === 0) {
                parentCheck.checked = false;
                parentCheck.indeterminate = false;
            } else {
                parentCheck.indeterminate = true;
            }
            interest = parentCheck;
            markUp ();
        }
    }
}

