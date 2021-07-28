const tabs = Array.from(document.getElementsByClassName("tab"));
const contents = Array.from(document.getElementsByClassName("tab__content"));

for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let number = i;
    tab.addEventListener('click', selectTab);

    function selectTab () {
        let oldSelectedItem = tabs.findIndex((tab) => tab.className === "tab tab_active");
        tabs[oldSelectedItem].className = "tab";
        tab.className = "tab tab_active";
        contents[oldSelectedItem].className = "tab__content";
        contents[number].className = "tab__content tab__content_active";
    }
}