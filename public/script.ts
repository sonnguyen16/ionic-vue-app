const hideTabBar = (): void => {
    const tabBar = document.getElementsByTagName('ion-tab-bar');
    if (tabBar !== null) {
        for (let i = 0; i < tabBar.length; i++) {
            tabBar[i].style.display = 'none';
        }
    }
}


const showTabBar = (): void => {
    const tabBar = document.getElementsByTagName('ion-tab-bar');
    if (tabBar !== null) {
        for (let i = 0; i < tabBar.length; i++) {
            tabBar[i].style.display = 'flex';
        }
    }
}

export { hideTabBar, showTabBar };