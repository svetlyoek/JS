function attachEvents() {

    const appKey = `BD8D30E6-598F-D08F-FF83-014AADA39E00`;
    const restApiKey = `59CFC15F-8417-4506-BA1A-65A215C86C2F`;

    const baseUrl = `https://api.backendless.com/${appKey}/${restApiKey}/data/Players`;

    const playersDiv = document.getElementById('players');
    const saveBtn = document.getElementById('save');
    const reloadBtn = document.getElementById('reload');
    const addBtn = document.getElementById('addPlayer');
    const playerInput = document.getElementById('addName');
    const canvasEl = document.getElementById('canvas');
    let currentPlayerId = '';
    let currentPlayer = {};

    window.onload = async (e) => {

        const players = await getPlayers();

        await reloadPlayers(players);
    };

    addBtn.addEventListener('click', async function () {

        const newPlayer = {
            name: playerInput.value,
            money: 500,
            bullets: 6
        }

        async function createPlayer(newPlayer) {

            await fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(newPlayer)
            });
        };

        if (playerInput.value != '') {

            await createPlayer(newPlayer);

            playerInput.value = '';

            const players = await getPlayers();

            await reloadPlayers(players);
        }
    });

    async function getPlayers() {

        const response = await fetch(baseUrl);

        const players = await response.json();

        return players;
    };

    async function savePlayer(playerId, player) {

        await fetch(baseUrl + `/${playerId}`, {
            method: 'PUT',
            body: JSON.stringify(player)
        });
    };

    async function getPlayerById(playerId) {

        return await (await fetch(baseUrl + `/${playerId}`)).json();
    };

    async function reloadPlayers(players) {

        playersDiv.innerHTML = '';

        players.forEach(player => {

            renderPlayer(player);
        });
    };

    reloadBtn.addEventListener('click', async function () {

        if (currentPlayer.money >= 60) {

            currentPlayer.money -= 60;
            currentPlayer.bullets = 6;

            await savePlayer(currentPlayerId, currentPlayer);
        }

        const players = await getPlayers();
        await reloadPlayers(players);
    });

    saveBtn.addEventListener('click', async function () {

        saveBtn.style.display = 'none';
        reloadBtn.style.display = 'none';
        canvasEl.style.display = 'none';

        clearInterval(canvasEl.intervalId);

        await savePlayer(currentPlayerId, currentPlayer);

        const players = await getPlayers();
        await reloadPlayers(players);
    });

    async function renderPlayer(player) {

        let newPlayer = await getPlayerById(player.objectId);

        const div = document.createElement('div');
        div.classList.add('player');

        const playBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');
        const nameRow = document.createElement('tr');
        const moneyRow = document.createElement('tr');
        const bulletsRow = document.createElement('tr');
        const playBtnRow = document.createElement('tr');
        const deleteBtnRow = document.createElement('tr');

        nameRow.textContent = `Name:` + player.name;
        moneyRow.textContent = `Money:` + player.money;
        bulletsRow.textContent = `Bullets:` + player.bullets;

        playBtn.classList.add('play');
        playBtn.textContent = 'Play';
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';

        playBtnRow.appendChild(playBtn);
        deleteBtnRow.appendChild(deleteBtn);

        tableBody.appendChild(nameRow);
        tableBody.appendChild(moneyRow);
        tableBody.appendChild(bulletsRow);
        tableBody.appendChild(playBtnRow);
        tableBody.appendChild(deleteBtnRow);

        table.appendChild(tableBody);

        div.appendChild(table);

        playersDiv.appendChild(div);

        playBtn.addEventListener('click', async function () {

            currentPlayerId = newPlayer.objectId;

            saveBtn.style.display = 'inline-block';
            reloadBtn.style.display = 'inline-block';
            canvasEl.style.display = 'block';

            loadCanvas(newPlayer);

            currentPlayer = newPlayer;
        });

        deleteBtn.addEventListener('click', async function () {

            const currentId = newPlayer.objectId;

            async function deletePlayer(currentId) {

                await fetch(baseUrl + `/${currentId}`, {
                    method: 'DELETE'
                });
            };

            await deletePlayer(currentId);

            div.remove();
        });
    }
}

