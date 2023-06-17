const tab = document.querySelector('.tab__navigation');
const tabs = Array.from(document.querySelectorAll('.tab'));
let selectedTab = document.querySelector('.tab_active');

const contents = document.querySelectorAll('.tab__content');
let selectedContent = document.querySelector('.tab__content_active');

tab.addEventListener('click', onClick);

function onClick(e) {
    let tabActive = e.target;
    if (! tabActive.classList.contains('tab')) {
        return;
    }
    
    changeTab(tabActive);
}

function changeTab(arg) {
    selectedTab.classList.remove('tab_active');
    selectedTab = arg;
    selectedTab.classList.add('tab_active');

    const index = tabs.indexOf(selectedTab);

    changeContent(index);
}

function changeContent(ind) {
    selectedContent.classList.remove('tab__content_active');
    selectedContent = contents[ind];
    selectedContent.classList.add('tab__content_active');
}
