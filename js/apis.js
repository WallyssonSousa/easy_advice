async function conselhoFacil() {
    let url = 'https://api.adviceslip.com/advice'

    let api = await fetch(url, {
        method: "GET"
    })

    if (api.ok) {
        let resposta = await api.json();

        console.log(resposta)

        document.getElementById('conselhoRamdom').innerHTML = resposta.slip.advice;
    }
}

conselhoFacil()

async function conselhoComplexo() {

    let palavra = document.getElementById('key').value;

    let url = `https://api.adviceslip.com/advice/search/${palavra}`

    let api = await fetch(url, {
        method: "GET"
    })

    if (api.ok) {
        let resposta = await api.json();

        document.getElementById('palavra').innerHTML = palavra;

        const totalResults = parseInt(resposta.total_results);

        if (totalResults > 1) {
            const randomTotal = Math.floor(Math.random() * totalResults);  
            document.getElementById('conselho').innerHTML = resposta.slips[randomTotal].advice;
        }else if (totalResults < 1) {
                document.getElementById('conselho').innerHTML = 'Não possuo conselho para essa palavra.';
        } else {
            document.getElementById('conselho').innerHTML = resposta.slips[0].advice;
        }
    } 
}

conselhoComplexo()