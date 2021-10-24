(() => {
    const
    
            // theTeam = document.querySelector("#team-members"),
            
            theTemplate = document.querySelector("#favThing").content;

    function favThingsInfo(info) {
        info.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            panel.firstElementChild.dataset.key = person.id;

            memberInfo[0].querySelector('img').src = `images/${person.biopic}`;

            // theTeam.appendChild(panel);
        })
    }

    function getMoreData(event) {
        if (event.target.closest("section").dataset.key) {
            let key = event.target.closest("section").dataset.key;

            getData({id: key},  showPortfolioData);
        }
    }

    function showPortfolioData(data) {
        console.log(data);
    }

    getData(null, favThingsInfo);
})()
