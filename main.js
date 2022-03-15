const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    
    console.log(data);

    document.querySelector('#adviceId').innerText = `Advice #${data.slip.id}`;
    document.querySelector('#adviceText').innerText = `"${data.slip.advice}`
}

