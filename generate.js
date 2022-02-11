let proverbios = ["A cada panela o seu testo.", "A ciência é mãe da dúvida.", "À falta de pão, até migalhas vão.", "Boca fechada não mete mosca.", "Bom político, mau cristão.", "Homem ambicioso não é preguiçoso.", "Quando entra o vinho, sai o juízo.", "Quando o gato não está os ratos fazem festa.", "Quem mente, cai-lhe um dente.", "Ri com quem ri e chora com quem chora.", "Vai e vem quem de seu tem."]

function gerarProverbio() {
	let text = document.getElementById("proverbio")
	text.innerHTML = proverbios[Math.floor(Math.random() * proverbios.length)];
}