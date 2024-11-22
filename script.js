document.addEventListener('DOMContentLoaded', function() {
    const appleStoreLink = document.getElementById('iStore');
    const googlePlayStoreLink = document.getElementById('googleStore');
    const brightMoneyLink = document.getElementById('brightMoney');
    const getStartLink = document.getElementById('getStart');
    const getStartLink1 = document.getElementById('getStart1');
    const getStartLink2 = document.getElementById('getStart2');
    const getStartLink3 = document.getElementById('getStart3');
    const getApplyLink1 = document.getElementById('apply1');
    const getApplyLink2 = document.getElementById('apply2');
    const getApplyLink3 = document.getElementById('apply3');


    
    function openStore(storeName) {
        if (storeName === 'apple') {
            window.open('https://apps.apple.com/us/app/bright-ai-debt-manager/id1511043796', '_blank'); 
        } else if (storeName === 'googlePlay') {
            window.open('https://play.google.com/store', '_blank'); 
        }
        else if(storeName === 'brightMoney'){
            window.open('https://www.brightmoney.co/', '_blank');
        }
        else if(storeName === 'getStart'){
            window.open('https://app.brightmoney.co/?deeplink_source=newWebsite&referrer=singular_click_id%3Df75c54ff-2428-4918-a2d1-6292b6c1cbbc', '_blank');
        }
        else if(storeName === 'getStart1'){
            window.open('https://app.brightmoney.co/?deeplink_source=newWebsite&referrer=singular_click_id%3Df75c54ff-2428-4918-a2d1-6292b6c1cbbc', '_blank');
        }
        else if(storeName === 'getStart2'){
            window.open('https://app.brightmoney.co/?deeplink_source=newWebsite&referrer=singular_click_id%3Df75c54ff-2428-4918-a2d1-6292b6c1cbbc', '_blank');
        }
        else if(storeName === 'getStart3'){
            window.open('https://app.brightmoney.co/?deeplink_source=newWebsite&referrer=singular_click_id%3Df75c54ff-2428-4918-a2d1-6292b6c1cbbc', '_blank');
        }
        else if(storeName === 'apply1'){
            window.open('https://apps.apple.com/us/app/bright-ai-debt-manager/id1511043796', '_blank');
        }
        else if(storeName === 'apply2'){
            window.open('https://app.brightmoney.co/?deeplink_source=newWebsite&referrer=singular_click_id%3Db599b55f-0595-47db-969d-55fd9d537901', '_blank');
        }
        else if(storeName === 'apply3'){
            window.open('https://app.brightmoney.co/?deeplink_source=newWebsite&referrer=singular_click_id%3Db599b55f-0595-47db-969d-55fd9d537901', '_blank');
        }
    }

   
    appleStoreLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('apple');
    });

    googlePlayStoreLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('googlePlay');
    });

    brightMoneyLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('brightMoney');
    });
    getStartLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('getStart');
    });
    getStartLink1.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('getStart1');
    });
    getStartLink2.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('getStart2');
    });
    getStartLink3.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('getStart3');
    });
    getApplyLink1.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('apply1');
    });
    getApplyLink2.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('apply2');
    });
    getApplyLink3.addEventListener('click', function(event) {
        event.preventDefault(); 
        openStore('apply3');
    });
});
