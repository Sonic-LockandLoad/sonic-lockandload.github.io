// Function to fetch and render DLC items
async function renderDlcItems() {
    const response = await fetch('dlc-items.json');
    const dlcItems = await response.json();
    const container = document.getElementById('dlc-container');

    const categories = new Set(dlcItems.map(item => item.category));

    categories.forEach(category => {
        const categoryHeader = document.createElement('h2');
        categoryHeader.id = category.toLowerCase();
        categoryHeader.textContent = category;
        container.appendChild(categoryHeader);

        dlcItems
            .filter(item => item.category === category)
            .forEach(item => {
                const dlcElement = document.createElement('a');
                dlcElement.setAttribute('href', `checkout.html?name=${item.name}`);
                dlcElement.id = 'box-link';

                const divElement = document.createElement('div');

                const h4Element = document.createElement('h4');
                h4Element.id = 'title';
                h4Element.textContent = item.name;

                const dateP = document.createElement('p');
                dateP.textContent = `Updated ${item.date}`;

                const descriptionP = document.createElement('p');
                descriptionP.innerHTML = item.description;

                const compatibilityP = document.createElement('p');
                compatibilityP.textContent = `Compatible with Sonic: Lock & Load ${item.compatibility}.`;

                divElement.appendChild(h4Element);
                divElement.appendChild(dateP);
                divElement.appendChild(descriptionP);
                divElement.appendChild(compatibilityP);

                dlcElement.appendChild(divElement);

                container.appendChild(dlcElement);
            });
    });
}

// Call the function to render DLC items
renderDlcItems();
